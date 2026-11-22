import { selectAllUsers, selectById, selectByDni, selectbyLocation, selectByComStatus } from "../models/usuarios.model.js";



const getAllUsers = async (req, res)=>{
    const usuarios = await selectAllUsers();
    res.json(usuarios)
}

const getById = async (req, res) =>{
    const unUsuarioCompleto = await selectById(Number(req.params.idUsuario))
    res.json(unUsuarioCompleto)
}

const getByDni = async (req, res) =>{
    const unUsuarioCompleto = await selectByDni(String(req.params.dniUsuario))
    res.json(unUsuarioCompleto)
}

const getByLocation = async (req, res) =>{
    const usuarios = await selectbyLocation(String(req.params.localidadUsuario))
    res.json(usuarios)
}

const getOpenToCom = async (req, res) =>{
    const usuarios = await selectByComStatus()
    res.json(usuarios)
}



export { getAllUsers, getById, getByDni, getByLocation, getOpenToCom }

