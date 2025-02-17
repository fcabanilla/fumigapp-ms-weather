import { Router } from "express";

const router = Router();

// Lógica de autenticación (dummy)
router.post("/login", (req, res) => {
  res.json({ token: "fake-jwt-token" });
});

export default router;
