FROM node:16-alpine3.14
WORKDIR /tt
COPY . .
# RUN npm install

CMD ["npm", "start"]