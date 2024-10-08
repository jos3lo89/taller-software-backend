export interface Payload {
  id: string;
  name: string;
  email: string;
  role: "administrator" | "employe";
}

export interface Decoded extends Payload {
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: Payload;
    }
  }
}


export interface Company {
  name: string;
  telphone: string;
  email: string;
  address: string;
}
