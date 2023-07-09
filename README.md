# Proyecto de Node.js - Arquitectura Hexagonal

Este proyecto es una aplicación Node.js que utiliza una arquitectura hexagonal para implementar un CRUD.

## Requerimientos del sistema

-	Node
-	Docker
-	Postman

## Librerias globales

-	node 18.15.0
-	typescript@5.1.5
-	yarn 1.22.19




## Instrucciones de levantamiento del proyecto

### 1. Clonar el repositorio e ingresar a la carpeta:
	git clone https://github.com/cristopherSaldanaY/node-project-escalab.git
	cd node-project-escalab


### 2. Crear el contenedor MySQL
	docker compose up -d

### 3. Instalar las dependencias
	yarn install

### 4. Construir el ambiente productivo
	yarn run build

### 5. Construir la imagen de la app con Docker
	docker build -t <nombre-imagen>:<version> .
Reemplaza <nombre-imagen> con el nombre que deseas darle a la imagen y <version> con la versión que deseas asignar.

### 6. Crear la red Docker
	docker network create <nombre-red>
Reemplaza <nombre-red> con el nombre que deseas darle a la red Docker.

### 7. Conectar la base de datos a la red
	docker network connect <nombre-red> <nombre-contenedor-mysql>

Reemplaza <nombre-red> con el nombre de la red Docker que creaste en el paso anterior y <nombre-contenedor-mysql> con el nombre del contenedor MySQL que se creó en el paso 2.

### 8. Crear el contenedor con la imagen del proyecto
	docker run -d --name <nombre-contenedor> -p 3000:3000 -e DB_HOST=<nombre-contenedor-mysql> -e DB_PORT=3306 -e DB_SYNC=true --network <nombre-red> <nombre-imagen>:<version>

Reemplaza <nombre-contenedor> con el nombre que deseas darle al contenedor.

## Prueba de la aplicación

### Ruta POST: http://localhost:3000/course/insert

Cuerpo de la solicitud:

```json
{
    "name": "nombre curso",
    "description" : "Descripción curso",
    "difficulty": "nivel",
    "technology": "tecnologia"
}
```

### Ruta GET: http://localhost:3000/course/list
### Ruta GET: http://localhost:3000/course/listOne/guid
### Ruta PUT: http://localhost:3000/course/update/guid
### Ruta DELETE: http://localhost:3000/course/delete/guid

Cuerpo de la solicitud para update:

```json
{
    "name": "actualizar nombre",
    "description": "actualizar descripción",
    "difficulty": "nivel",
    "technology": "tecnologia"
}
```


Reemplaza "guid" con un identificador válido en las rutas GET, PUT y DELETE.
