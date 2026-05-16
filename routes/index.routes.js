//Aquí se definen los endpoints del entrypoint definido en index.js
import { Router } from "express"
import { name_one, name_two, name_three } from "../controllers/index.controllers.js"
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/users.controllers.js";

import { login } from "../controllers/login.controllers.js";

import { validateJWT } from "../utils/jwt.js";

const router = Router()

// INITIAL ROUTES
router.get("/",name_one)
router.get("/ping",name_two)
router.get("/oso", name_three)

// USERS CRUD
router.post("/users", validateJWT, createUser);
router.get("/users", validateJWT, getUsers);
router.get("/users/:id", validateJWT, getUser);
router.put("/users/:id", validateJWT,updateUser);
router.delete("/users/:id", validateJWT,deleteUser);

// LOGIN
router.post("/login", login);

export default router //default = exportar un módulo 