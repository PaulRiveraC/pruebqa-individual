# Etapa 1: Construir la aplicación con una versión de Node.js más reciente
FROM node:20-alpine AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo los archivos de configuración
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación Angular para producción
RUN npm run build -- --configuration=production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiar los archivos de la aplicación construida desde la etapa anterior
COPY --from=build /app/dist/fashion-trends-inventory /usr/share/nginx/html

# Exponer el puerto 80 del contenedor
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]