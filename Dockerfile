from node:8 as base

RUN npm install -g @angular/cli

RUN mkdir -p /opt/ext-pro

WORKDIR /opt/ext-pro

COPY . .

RUN npm i

RUN ng build --prod

from nginx

maintainer email_id

COPY default.conf /etc/nginx/conf.d/

COPY --from=base /opt/ext-pro/dist/ /usr/share/nginx/html 


EXPOSE 4200