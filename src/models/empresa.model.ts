import PrismaClient from "../config/db";
import { EmpresaType } from "../schemas/empresa.schema";

class EmpresaModel {
  private prisma = PrismaClient;

  async create(company: EmpresaType, photo: string) {
    const newCompany = await this.prisma.empresa.create({
      data: {
        ...company,
        photo,
      },
    });


    if (!newCompany) {
      throw new Error("Nose pudo crear la empresa");
    }

    return newCompany;
  }
}

export default new EmpresaModel();
