# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app


# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

#Run Prisma 
RUN npx prisma generate

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/src/main.js" ]
