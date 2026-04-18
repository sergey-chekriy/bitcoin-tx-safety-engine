FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY README.md ./
COPY src ./src
COPY tests ./tests
COPY docs ./docs
COPY examples ./examples

RUN npm install

CMD ["npm", "run", "dev"]
