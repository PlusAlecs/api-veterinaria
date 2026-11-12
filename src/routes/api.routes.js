import { Router } from "express"
// import mascotasRoutes from "./mascotas.routes.js"
// import usuariosRoutes from "./usuarios.routes.js"

//como este es un fichero de rutas, voy a crear una constante que almacene rutas.
const router = Router()

//todas las rutas de nuestra api, tiene que haber tantas rutas como tablas en la base de datos. usuarios, mascotas.

router.use("/mascotas", mascotasRoutes)
// router.use("/mascotas", usuariosRoutes)
// router.use("/veterinaros", veterinariosRoutes)

export default router
