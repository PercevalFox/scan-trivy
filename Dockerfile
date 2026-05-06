FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN nmp ci --omit=dev

COPY src/ ./src/

USER node

EXPOSE 3000

CMD ["node", "src/index.js"]
