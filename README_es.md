# FumigApp - Gestión de Fumigaciones y Clima

## 📌 Descripción

**FumigApp** es una aplicación diseñada para gestionar fumigaciones y aeroaplicaciones en campos agrícolas. Utiliza un enfoque de microservicios, donde uno de los componentes clave es el **servicio meteorológico**, el cual permite obtener información climática en tiempo real desde proveedores externos como OpenWeatherMap.

## 🚀 Características Principales

- **Microservicio de Clima:** Obtención de datos meteorológicos en tiempo real.
- **Cliente HTTP Centralizado:** Uso de `axios` con interceptores para manejo de solicitudes y respuestas.
- **Registro de Eventos:** Implementación de `winston` para el logging.
- **Manejo de Errores:** Middleware de errores para asegurar respuestas consistentes.
- **Inversión de Dependencias:** Uso de una interfaz genérica para soportar múltiples proveedores meteorológicos.

## 📁 Estructura del Proyecto

```
src/
├── app.ts                # Archivo principal del servidor Express
├── config/               # Configuración de la aplicación
│   ├── config.ts         # Manejo de variables de entorno
│   ├── configKeys.ts     # Definición de claves de configuración
│   ├── logger.ts         # Configuración del logger con Winston
├── controllers/          # Controladores de Express
│   ├── WeatherController.ts
├── middleware/           # Middlewares de Express
│   ├── errorHandler.ts   # Middleware global de manejo de errores
├── persistence/          # Módulo de persistencia (en desarrollo)
│   ├── WeatherRepository.ts
├── providers/            # Proveedores meteorológicos
│   ├── IWeatherProvider.ts   # Interfaz para proveedores
│   ├── OpenWeatherMapProvider.ts  # Implementación de OpenWeatherMap
├── routes/               # Definición de rutas
│   ├── weather.routes.ts
├── services/             # Lógica de negocio
│   ├── WeatherService.ts
├── utils/                # Utilidades generales
│   ├── httpClient.ts     # Cliente HTTP con Axios y manejo de logs
└── .env                  # Variables de entorno (no se incluye en el repo)
```

## 🛠 Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/tuusuario/fumigapp.git
cd fumigapp
```

### 2️⃣ Instalar Dependencias

```bash
npm install
```

### 3️⃣ Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido de ejemplo:

```ini
PORT=3000
OPENWEATHERMAP_KEY=your_openweathermap_api_key
OPENWEATHERMAP_URL=https://api.openweathermap.org/data/2.5/weather?q={location}&appid={apiKey}
```

### 4️⃣ Ejecutar el Servidor

```bash
npm start
```

## 🔥 Endpoints Disponibles

### 🌦 Obtener Clima Actual

```http
GET /api/weather?location={ciudad}
```

**Ejemplo de Respuesta:**

```json
{
  "temperature": "22°C",
  "humidity": "78%",
  "description": "Lluvia ligera"
}
```

### 🧪 Endpoint Dummy

```http
GET /api/weather/dummy
```

**Ejemplo de Respuesta:**

```json
{
  "message": "Hello World"
}
```

## 🏗 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución para JavaScript
- **Express.js** - Framework para la creación de APIs REST
- **TypeScript** - Tipado estático para JavaScript
- **Axios** - Cliente HTTP para realizar solicitudes a la API meteorológica
- **Winston** - Librería para manejo de logs
- **dotenv** - Manejo de variables de entorno

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un **fork** del repositorio.
2. Crea una **rama** (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz **commit** (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube los cambios (`git push origin feature/nueva-feature`).
5. Abre un **Pull Request** 🚀.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para cualquier consulta, puedes contactarme en **[tu correo o enlace de contacto]**.
