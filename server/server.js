import "colors";
import express from "express";
import authRoutes from "./app/auth/auth.router.js";

const app = express();

async function main() {
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

main();
