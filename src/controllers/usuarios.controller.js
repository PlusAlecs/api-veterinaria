import { selectAllUsers, selectById } from "../models/usuarios.model.js";



const getAllUsers = async (req, res)=>{
    const usuarios = await selectAllUsers();
    res.json(usuarios)
}

const getById = async (req, res) =>{
    const unUsuarioCompleto = await selectById(Number(req.params.idUsuario))
    res.json(unUsuarioCompleto)
}



export { getAllUsers, getById }

