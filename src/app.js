import express from "express"
//vamos a instalar las cors - politica de seguridad que imponen los navegadores 
// dos aplicaciones en local se conecten. Cors hace que esa conexión sea legitima.
import cors from "cors"
import apiRoutes from "./routes/api.routes.js"

const app = express()
app.use(express.json())
app.use(cors()) 



//configurar el punto de entrada de las rutas
app.use("/api", apiRoutes)


//configurar que pasa cuando una ruta no existe
app.use( (req, res, next)=>{
    res.status(404).json({
        message: "Not found"
    })
} )

//configurar que pasa cuando hay un error
app.use( (err, req, res, next)=>{
    //error por la consola
    console.log(err.stack)
    res.status(500).json({ message : err.message })

} )







export default app