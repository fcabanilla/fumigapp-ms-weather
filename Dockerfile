FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build   # Asumiendo que defines un script "build": "tsc"
EXPOSE 3000
CMD ["node", "dist/app.js"]
