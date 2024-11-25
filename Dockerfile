FROM node:18 AS build-env
COPY . /dnj-web
WORKDIR /dnj-web

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run deploy

FROM gcr.io/distroless/nodejs18-debian12
COPY --from=build-env /dnj-web/.output /dnj-web/app
WORKDIR /dnj-web/app
CMD ["index.js"]
