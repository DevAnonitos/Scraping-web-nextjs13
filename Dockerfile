FROM node:20
WORKDIR /app

COPY ./Scraping-nextjs/scraping-app/package.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]