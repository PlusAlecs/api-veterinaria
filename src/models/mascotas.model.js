import db from "../config/db.js"

const selectAll = async () =>{
    //aqui hacemos la consulta a BBDD => select * from mascota
    const result = await db.execute("select * from mascota")
    return [result]
}

export { selectAll }