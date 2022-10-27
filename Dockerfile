FROM node

COPY [".", "/usr/src"]

WORKDIR /usr/src/Teams

RUN npm install

CMD ["npm", "test"]