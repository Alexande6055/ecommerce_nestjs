# Usamos una imagen oficial de MySQL
FROM mysql:8.0

# Definimos las variables de entorno necesarias para configurar la base de datos
ENV MYSQL_DATABASE=example \
    MYSQL_USER=antrox \
    MYSQL_PASSWORD=antrox123 \
    MYSQL_ROOT_PASSWORD=antrox123

# Exponemos el puerto estándar de MySQL
EXPOSE 3306

# Copiamos archivo de configuración personalizado (esto es opcional)
COPY my.cnf /etc/mysql/conf.d/my.cnf
