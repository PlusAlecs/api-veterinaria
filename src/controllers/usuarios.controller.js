import { 
    selectAllUsers, 
    selectById, 
    selectByDni, 
    selectbyLocation, 
    selectByComStatus, 
    selectBySurname, 
    selectBasicById,
    insertNewUser,
    deleteUserById,
    updateUserById } from "../models/usuarios.model.js";

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

const getBySurname = async (req, res) =>{
    const usuarios = await selectBySurname(String(req.params.apellidoUsuario))
    res.json(usuarios)
}

const getBasicById = async (req, res) =>{
    const usuarios = await selectBasicById(Number(req.params.idUsuario))
    res.json(usuarios)
}

const insertUser = async (req, res) =>{
    const idNuevoUsuario = await insertNewUser(req.body)
    const usuario = await selectById(idNuevoUsuario)
    res.json(usuario)
}

const deleteUser = async (req, res) =>{
    const response = await deleteUserById(Number(req.params.idUsuario))
    if (!response.status)
        return res.status(404).json({ status: false, message: "usuario no encontrado" })
    res.json(response)
}

const editUser = async (req, res) =>{
    const dataUser = req.body
    const idUsuario = Number(req.params.idUsuario)

    const respuesta = await updateUserById(idUsuario, dataUser)
    if ( respuesta.affectedRows === 1 ){
        const usuario = await selectById(idUsuario)
        res.json(usuario)
    }
    else
        res.status(404).json( { status: false, message: "No se ha podido actualizar el usuario"} )
}

export { getAllUsers, getById, getByDni, getByLocation, getOpenToCom, getBySurname, getBasicById, insertUser, deleteUser, editUser }

