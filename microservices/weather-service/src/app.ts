// src/app.ts
import express from "express";
import weatherRoutes from "./routes/weather.routes";
import { getPort } from "./config/config";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = getPort();

// Middleware para parsear JSON
app.use(express.json());

// Uso de las rutas definidas
app.use("/api", weatherRoutes);

// Middleware de manejo de errores (debe ir después de las rutas)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
