FROM node:10.14.2-jessie-slim

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY yarn.lock ./


#RUN npm install
# If you are building your code for production
RUN yarn install --production=true

# Bundle app source
COPY . /app
RUN yarn build
EXPOSE 8500
CMD [ "yarn", "prod" ]