FROM node:24-alpine

WORKDIR /app
COPY package.json server.js ./

ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION PORT=8080 NODE_ENV=production

# The cluster requires non-root containers; the node image ships UID 1000 ("node").
USER 1000
EXPOSE 8080
CMD ["node", "server.js"]
