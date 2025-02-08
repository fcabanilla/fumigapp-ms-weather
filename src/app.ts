// src/app.ts
import express from "express";
import weatherRoutes from "./routes/weather.routes";
import { getConfigValue } from "./config/config";
import { ConfigKeys as ck } from "./config/configKeys";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = getConfigValue(ck.PORT);

// Middleware para parsear JSON
app.use(express.json());

// Uso de las rutas definidas
app.use("/api", weatherRoutes);

// Middleware de manejo de errores (debe ir después de las rutas)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
