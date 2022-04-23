# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /fontend-app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /fontend-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts -g

# add app
COPY . ./
EXPOSE 3000

# start app
CMD ["npm", "start"]
