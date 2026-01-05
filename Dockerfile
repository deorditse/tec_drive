# #docker build -t deorbot-landing -f ci_cd/Dockerfile .
# #docker run -d -p 80:80 deorbot-landing

# # define multistage variables
# ARG BASE_HREF=/
# ARG APP=/app
# ARG NGINX_IMAGE=nginx:1.27.1-alpine-slim
# ARG BUILD_IMAGE=node:22-alpine
# #prod | preprod  | dev
# # prod, preprod - miinimize version со своими метриками
# # dev - logs, analizer and checkers

# #ARG BUILD_MODE=preprod

# # Use the official Node.js runtime as the base image
# FROM $BUILD_IMAGE AS build

# # Set the working directory in the container
# ARG APP
# WORKDIR $APP

# # Copy package.json and package-lock.json to the working directory
# COPY ../package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the entire application code to the container
# COPY ../ ./

# # Build the React app for production
# #ARG BUILD_MODE
# #RUN npm run build:${BUILD_MODE}
# RUN npm run build


# # use nginx to deploy
# FROM $NGINX_IMAGE AS deploy

# ARG BASE_HREF
# ARG APP
# # Copy the built React app to Nginx's web server directory
# COPY --from=build ${APP}/dist /usr/share/nginx/html${BASE_HREF}

# # Expose port 80 for the Nginx server
# EXPOSE 3000

# # Start Nginx when the container runs
# CMD ["nginx", "-g", "daemon off;"]к