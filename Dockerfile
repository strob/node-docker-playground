# Start with Debian

FROM debian:bookworm

# ENV DEBIAN_FRONTEND noninteractive


# Install build dependencies

RUN apt-get update
RUN apt-get install -y nodejs npm

# Move local files into the build container

COPY . /app

# Build the static JS client

WORKDIR /app/client
RUN npm install
RUN npm run build


WORKDIR /app/server
RUN npm install

# & Launch the server
CMD npm run serve 80
