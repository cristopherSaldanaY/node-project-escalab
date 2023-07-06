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

### 5. Construir la imagen Docker
	docker build -t node-project:1.0.0 .

### 6. Crear la red Docker
	docker network create node-project-net

### 7. Conectar la base de datos a la red
	docker network connect node-app-net cont-mysqlserver-project

### 8. Crear el contenedor con la imagen del proyecto
	docker run -d --name node-project-container -p 3000:3000 -e DB_HOST=cont-mysqlserver-project -e DB_PORT=3306 --network node-project-net node-project:1.0.0

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

Cuerpo de la solicitud:

```json
{
    "name": "actualizar nombre",
    "description": "actualizar descripción",
    "difficulty": "nivel",
    "technology": "tecnologia"
}
```

### Ruta DELETE: http://localhost:3000/course/delete/guid
Reemplaza "guid" con un identificador válido en las rutas PUT y DELETE.
