import { selectAllUsers, selectById, selectByDni } from "../models/usuarios.model.js";



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



export { getAllUsers, getById, getByDni }

