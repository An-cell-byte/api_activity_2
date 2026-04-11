import User from "../models/User.js";

// CREATE
export const createUser = async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved);
};

// READ ALL USERS
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// READ ONE USER
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// UPDATE
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
};

// DELETE
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario eliminado" });
};