import User from "../models/User.js";
import { hash } from "../utils/hash.js"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
  const { password } = req.body;
  const email = req.body.email?.trim().toLowerCase();

  const user = await User.findOne({ email }).sort({ createdAt: -1 });

  if (!user) {
    res.status(401).json({ message: "Credenciales incorrectas" });
    return
  }

  const [salt, savedHash] = user.password.split(":")
  const hashed = savedHash ? hash(password, salt) : password

  if (hashed !== (savedHash || user.password)) {
    res.status(401).json({ message: "Credenciales incorrectas" });
    return
  }

  const token = jwt.sign({sub:user._id}, process.env.JWT, {expiresIn:"1h"})

  res.json({ message: "Login exitoso", user, token });
};
