import { Router } from "express"
import { getAll, getAllBySpecies, getBySpecies, getById, insertPet, editPet, deletePet } from "../controllers/mascotas.controller.js"

const router = Router()

//obtener la lista d etodas las mascotas GET
router.get("/", getAll )

//obtener una mascota GET
router.get("/:idMascota", getById)

//obtener la especie de una mascota GET
router.get("/:idMascota/especie", getBySpecies)

//obtener todas las mascotas por especie GET
router.get("/especie/all/:especie", getAllBySpecies)

//borrar la mascota DELETE
router.delete("/:idMascota", deletePet)

//dar de alta una mascota POST
router.post("/", insertPet)

//actualizar la mascota PUT/PATCH
router.put("/:idMascota", editPet)

export default router