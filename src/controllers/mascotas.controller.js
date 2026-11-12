// cada controlador va a llamar a una funcion que conecte con la bbdd, esa función va a estar alojada en los modelos.
// el controlador tiene como objetivo principal devolver datos de respuesta (hace el res.json())
import { selectAll } from "../models/mascotas.model.js"


const getAll = async (req, res) =>{
    const mascotas = await selectAll() //esta funcion estará en el modelo, contendrá el select de la bbdd.
    res.json(mascotas)
}

const getById = async (req, res) =>{
    const unaMascotaCompleta = await selectById(req.params.idMascota)
    res.json(unaMascotaCompleta)
}

const getBySpecies = async (req, res) =>{

}

const getAllBySpecies = async (req, res) =>{

}

const insertPet = async (req, res) =>{

}

const deletePet = async (req, res) =>{

}

const editPet = async (req, res) =>{

}

export { getAll, getById, getBySpecies, getAllBySpecies, insertPet, editPet, deletePet }