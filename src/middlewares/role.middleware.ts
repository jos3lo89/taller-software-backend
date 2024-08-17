import { NextFunction, Request, Response } from "express";

export const adminRoleValidate = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: ["Not Authorized"], status: 401 });
    }

    if (req.user.role !== "administrator") {
      return res.status(403).json({ message: ["Forbidden: Admins only"], status: 403 });
    }

    return next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: [error.message], status: 500 });
    }

    return res.status(500).json({ message: ["Internal Server Error"], status: 500 });
  }
};

export const employeRoleValidate = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: ["Not Authorized"], status: 401 });
    }

    if (req.user.role !== "employe") {
      return res.status(403).json({ message: ["Forbidden: Employes only"], status: 403 });
    }

    return next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: [error.message], status: 500 });
    }

    return res.status(500).json({ message: ["Internal Server Error"], status: 500 });
  }
};

export const allRolesValidate = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: ["Not Authorized"], status: 401 });
    }

    const allowedRoles = new Set(["administrator", "employe"]);

    if (allowedRoles.has(req.user.role)) {
      return next();
    }

    return res.status(401).json({ message: ["Not Authorized"], status: 401 });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: [error.message], status: 500 });
    }
    return res.status(500).json({ message: ["Internal Server Error"], status: 500 });
  }
};
