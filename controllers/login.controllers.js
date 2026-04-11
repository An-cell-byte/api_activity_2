import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  res.json({ message: "Login exitoso", user });
};