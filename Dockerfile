FROM node:alpine
WORKDIR /app
COPY . .
RUN ["npm", "install"]
COPY . /app
EXPOSE 8080
RUN ["npm", "run", "build"]
CMD ["node", "server.js"]
