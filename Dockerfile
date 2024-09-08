# Usar una imagen oficial de Node como imagen base
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar los archivos restantes del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto que la aplicación usará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
