// app.ts es el archivo principal de la aplicación, en el que se configura el servidor y se definen las rutas.
import express from "express";
import weatherRoutes from "./routes/weather.routes";
import { getConfigValue } from "./config/config";

const app = express();
const PORT = getConfigValue("PORT");

// Middleware para parsear JSON
app.use(express.json());

// Uso de las rutas definidas
app.use("/api", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
