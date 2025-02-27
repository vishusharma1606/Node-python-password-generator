FROM node:22

WORKDIR /passwordgenerator

# Install Python
RUN apt-get update && apt-get install -y python3 python3-pip

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]