import "colors";
import express from "express";
import authRoutes from "./app/auth/auth.router.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { prisma } from "./app/prisma.js";

dotenv.config();

const app = express();

async function main() {
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(express.json());
  app.use("/api/auth", authRoutes);

  const PORT = process.env.PORT || 5001;

  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} on ${PORT} port`.green.bold
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
