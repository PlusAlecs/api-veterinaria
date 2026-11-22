import db from "../config/db.js"

const selectAllUsers = async ()=>{
    const [result] = await db.execute("select * from dueno")
    return result
}

const selectById = async (idUsuario) =>{
    const [result] = await db.execute(`select * from dueno where id = ?`, [idUsuario])
    return result[0]
}

const selectByDni = async (dniUsuario) =>{
    const [result] = await db.execute(`select * from dueno where dni = ?`, [dniUsuario])
    console.log(dniUsuario)
    return result[0]
}

const selectbyLocation = async (localidadUsuario) => {
    const [result] = await db.execute(`select * from dueno where localidad = ?`, [localidadUsuario])
    return result
}

const selectByComStatus = async () => {
    const [result] = await db.execute(`select * from dueno where acepta_comunicaciones = true`)
    return result
}

const selectBySurname = async (apellido) => {
    const [result] = await db.execute(`select * from dueno where apellidos like ?`, [`%${apellido}%`])
    return result
}


export { selectAllUsers, selectById, selectByDni, selectbyLocation, selectByComStatus, selectBySurname }