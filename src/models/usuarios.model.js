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

const selectBasicById = async (idUsuario) =>{
    const [result] = await db.execute(`select nombre, dni, telefono from dueno where id = ?`, [idUsuario])
    return result
}

const insertNewUser = async ({
    dni,
    nombre,
    apellidos,
    fecha_nacimiento = null,
    telefono = null,
    email = null,
    direccion = null,
    localidad = null,
    codigo_postal = null,
    acepta_comunicaciones = 0,
    fecha_alta = null
}) => {
    const [result] = await db.execute(
        `insert into dueno
            (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta)
         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            dni,
            nombre,
            apellidos,
            fecha_nacimiento,
            telefono,
            email,
            direccion,
            localidad,
            codigo_postal,
            acepta_comunicaciones,
            fecha_alta
        ]
    )
    return result.insertId
}


export { selectAllUsers, selectById, selectByDni, selectbyLocation, selectByComStatus, selectBySurname, selectBasicById, insertNewUser }