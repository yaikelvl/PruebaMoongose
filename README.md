<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Prueba con Mongose

1. Clonar proyecto

2. Instalar los modulos de Node.
```
npm install
```
3. Renombrar el fichero ```.env.template``` a ```.env```

4. Cambiar las variables de entorno.

5. Levantar la Base de Datos.
```
docker-compose up -d
```

6. Levantar modo de desarrollo.
```
yarn start:dev
```

7. Interactuar usando Postman u otra herramienta de desarrollo y prueba de APIs por el URL:
```
https://localhost:3000/api
```