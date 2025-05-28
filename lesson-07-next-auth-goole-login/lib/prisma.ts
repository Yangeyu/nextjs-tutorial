import { PrismaClient } from "@prisma/client";

// PrismaClient 是一个较重的实例，不应在每次请求时都创建
// 这里创建一个全局单例以便在整个应用中重用

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 检查是否已经存在 Prisma 实例，没有则创建新实例
export const prisma = globalForPrisma.prisma || new PrismaClient();

// 在开发环境外，将 Prisma 实例添加到全局对象中以避免热重载时创建多个连接
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;