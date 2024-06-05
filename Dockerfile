# Use an official Node runtime as a parent image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Expose port 80 for the app
EXPOSE 3000

# Serve the app
CMD ["npm", "run", "serve", "--", "--port", "3000"]
