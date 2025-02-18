"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const weather_routes_1 = __importDefault(require("./routes/weather.routes"));
const config_1 = require("./config/config");
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
const PORT = (0, config_1.getPort)();
// Middleware para parsear JSON
app.use(express_1.default.json());
// Uso de las rutas definidas
app.use("/api", weather_routes_1.default);
// Middleware de manejo de errores (debe ir después de las rutas)
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
