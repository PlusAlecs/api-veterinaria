import { Router } from "express";
import { getAllUsers, getById, getByDni, getByLocation, getOpenToCom, getBySurname, getBasicById } from "../controllers/usuarios.controller.js";

const router = Router()

//obtener usuario por id
router.get("/", getAllUsers)

//obtener usuario por id
router.get("/:idUsuario", getById)

//obtener usuario completo por DNI
router.get("/dni/:dniUsuario", getByDni)

//obtener todos los usuarios de una localidad
router.get("/loc/:localidadUsuario", getByLocation)

//obtener todos los usuarios que aceptan comunicaciones
router.get("/com/open", getOpenToCom)

//obtener todos los usuarios cuyo apellido sea López
router.get("/apellido/:apellidoUsuario", getBySurname)

//obtener solo el nombre, dni, telefono de un usuario por id
router.get("/basic/:idUsuario", getBasicById)

//insertar un usuario

//borrar un usuario por id

//editar un usuario por id

export default router