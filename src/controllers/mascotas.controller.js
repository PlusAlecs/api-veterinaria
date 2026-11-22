// cada controlador va a llamar a una funcion que conecte con la bbdd, esa función va a estar alojada en los modelos.
// el controlador tiene como objetivo principal devolver datos de respuesta (hace el res.json())
import { selectAll, selectById, selectSpeciesById, selectPetsBySpecies, deletePetById, insertNewPet, updatePetById } from "../models/mascotas.model.js"


const getAll = async (req, res) =>{
    const mascotas = await selectAll() //esta funcion estará en el modelo, contendrá el select de la bbdd.
    res.json(mascotas)
}

const getById = async (req, res) =>{
    const unaMascotaCompleta = await selectById(Number(req.params.idMascota))
    res.json(unaMascotaCompleta)
}

const getBySpecies = async (req, res) =>{
    const especie = await selectSpeciesById(Number(req.params.idMascota))
    res.json(especie)
}

const getAllBySpecies = async (req, res) =>{
    const mascotas = await selectPetsBySpecies(req.params.especie)
    res.json(mascotas)
}

const deletePet = async (req, res) =>{
    const response = await deletePetById(Number(req.params.idMascota))
    if (!response.status)
        return res.status(404).json({ status: false, message: "mascota no encontrada" })
    res.json(response)
}

const insertPet = async (req, res) =>{
    const idNuevaMascota = await insertNewPet(req.body)
    const mascota = await selectById(idNuevaMascota)
    res.json(mascota)
}

const editPet = async (req, res) =>{
    const dataMascota = req.body
    const idMascota = Number(req.params.idMascota)

    const respuesta = await updatePetById(idMascota, dataMascota)
    if ( respuesta.affectedRows === 1 ){
        const mascota = await selectById(idMascota)
        res.json(mascota)
    }
    else
        res.status(404).json( { status: false, message: "No se ha podido actualizar la mascota"} )
}

export { getAll, getById, getBySpecies, getAllBySpecies, insertPet, editPet, deletePet }