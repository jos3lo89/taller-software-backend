import { Request, Response } from "express";
import prisma from "../config/db";
export interface Company {
  name: string;
  telphone: string;
  email: string;
  address: string;
}

export const create = async (req: Request, res: Response) => {
  try {
    if (!req.file) throw new Error("No found Photo");

    const body: Company = { ...req.body };

    const photo = `/uploads/${req.file.filename}`;

    const newComapny = await prisma.empresa.create({
      data: {
        ...body,
        photo,
      },
    });

    if (!newComapny) throw new Error("Not created company");

    res.status(201).json({
      ...newComapny,
      photo: `${process.env.SERVER_URL}${newComapny.photo}`,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: [error.message], status: 400 });
    }
    return res.status(500).json({ message: ["Internal server error"], status: 500 });
  }
};
