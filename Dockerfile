FROM node:22
WORKDIR /app
RUN chown node:node /app
COPY package.json /app
USER node
RUN npm install
COPY --chown=node:node . /app
EXPOSE 3000
CMD ["node", "app.js"]

