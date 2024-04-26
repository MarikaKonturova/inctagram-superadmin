FROM node:18.18.0-alpine

USER node

RUN mkdir -p /home/node/dist/inctagram-superadmin

WORKDIR /home/node/dist/inctagram-superadmin

COPY --chown=node package*.json ./
COPY --chown=node yarn.lock ./

RUN yarn install 

ENV PORT=9876

COPY --chown=node . . 

RUN yarn build

EXPOSE ${PORT}

CMD ["yarn", "start"]

# команда для локальной сборки
# docker build . -t inctagram-superadmin
# команда для запуска
# docker run -p 5000:9876 inctagram-superadmin