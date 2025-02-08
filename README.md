# FumigApp - Fumigation and Weather Management

## 📌 Description

**FumigApp** is an application designed to manage fumigation and aerial applications in agricultural fields. It follows a microservices approach, with one key component being the **weather service**, which retrieves real-time weather data from external providers like OpenWeatherMap.

> **Looking for another language?** Check out [README_es.md](README_es.md) for Spanish documentation or [README_ja.md](README_ja.md) for Japanese documentation.

## 🚀 Key Features

- **Weather Microservice:** Fetches real-time weather data.
- **Centralized HTTP Client:** Uses `axios` with interceptors for request and response handling.
- **Event Logging:** Implements `winston` for logging.
- **Error Handling:** Error middleware ensures consistent responses.
- **Dependency Injection:** Uses a generic interface to support multiple weather providers.

## 💁️ Project Structure

```
src/
├── app.ts                # Main Express server file
├── config/               # Application configuration
│   ├── config.ts         # Environment variable management
│   ├── configKeys.ts     # Configuration key definitions
│   ├── logger.ts         # Logger setup with Winston
├── controllers/          # Express controllers
│   ├── WeatherController.ts
├── middleware/           # Express middleware
│   ├── errorHandler.ts   # Global error handling middleware
├── persistence/          # Persistence module (in development)
│   ├── WeatherRepository.ts
├── providers/            # Weather data providers
│   ├── IWeatherProvider.ts   # Provider interface
│   ├── OpenWeatherMapProvider.ts  # OpenWeatherMap implementation
├── routes/               # Route definitions
│   ├── weather.routes.ts
├── services/             # Business logic
│   ├── WeatherService.ts
├── utils/                # General utilities
│   ├── httpClient.ts     # HTTP client using Axios and logging
└── .env                  # Environment variables (not included in repo)
```

## 🛠 Installation and Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/youruser/fumigapp.git
cd fumigapp
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project's root with the following example content:

```ini
PORT=3000
OPENWEATHERMAP_KEY=your_openweathermap_api_key
OPENWEATHERMAP_URL=https://api.openweathermap.org/data/2.5/weather?q={location}&appid={apiKey}
```

### 4️⃣ Start the Server

```bash
npm start
```

## 🔥 Available Endpoints

### 🌦 Get Current Weather

```http
GET /api/weather?location={city}
```

**Example Response:**

```json
{
  "temperature": "22°C",
  "humidity": "78%",
  "description": "Light rain"
}
```

### 🧬 Dummy Endpoint

```http
GET /api/weather/dummy
```

**Example Response:**

```json
{
  "message": "Hello World"
}
```

## 🏠 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Framework for building REST APIs
- **TypeScript** - Static typing for JavaScript
- **Axios** - HTTP client for fetching weather data
- **Winston** - Logging library
- **dotenv** - Environment variable management

## 🤝 Contributions

If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a **branch** (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -m "Add new feature"`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a **Pull Request** 🚀.

## 🐟 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📱 Contact

For any inquiries, feel free to reach out at **federico.cabanilla@gmail.com**.
