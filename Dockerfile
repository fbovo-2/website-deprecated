
FROM node:10-alpine AS node
LABEL Maintainer="Filippo Bovo <hello@filippobovo.com>" \
      Description=""

ENV HOME /home/node/app

# Switch root
USER root

# Install extra packages
RUN apk --no-cache add git

# Switch to use a non-root user from here on
USER node

# Clone repo
RUN git clone https://github.com/fbovo/website.git $HOME

# Switch workdir
WORKDIR $HOME

# Install application
RUN npm install
