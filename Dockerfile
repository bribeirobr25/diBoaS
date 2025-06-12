FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY packages/services/package.json ./packages/services/
COPY packages/api-client/package.json ./packages/api-client/
COPY packages/ui/package.json ./packages/ui/
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]