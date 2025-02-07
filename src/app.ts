import express from "express";
import weatherRoutes from "./routes/weather.routes";
import { config } from "./config/config";

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Uso de las rutas definidas
app.use("/api", weatherRoutes);

app.listen(config.port, () => {
  console.log(`Servidor corriendo en el puerto ${config.port}`);
});
