import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

// If we're in 'development' version then use the globally defined version
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
