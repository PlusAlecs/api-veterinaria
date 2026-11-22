import db from "../config/db.js"

const selectAllUsers = async ()=>{
    const [result] = await db.execute("select * from dueno")
    return result
}

const selectById = async (idUsuario) =>{
    const [result] = await db.execute(`select * from dueno where id = ?`, [idUsuario])
    return result[0]
}

export { selectAllUsers, selectById }