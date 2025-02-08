# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the port defined in .env (fallback to 3000)
ARG PORT=3000
ENV PORT=${PORT}

# Command to run the compiled JavaScript code
CMD ["node", "dist/app.js"]
