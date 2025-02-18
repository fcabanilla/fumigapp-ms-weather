FROM node:14-alpine
WORKDIR /app
# ...existing code: copia de archivos necesarios...
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
