import type { RequestHandler } from "express";
import { registerUser } from "../services/auth.service.ts";
import type { RegisterBody } from "../types/auth.ts";

export const register: RequestHandler<{}, {}, RegisterBody> = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await registerUser({ username, email, password });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Failed to create user!",
    });
  }
};