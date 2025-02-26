### Evaluacion final modulo 4

# 📚 API de Librería

Bienvenido a la **API de Librería**, una aplicación basada en **Node.js, Express.js y MySQL** para gestionar libros y autores. Esta API permite realizar operaciones CRUD (**Crear, Leer, Actualizar y Eliminar**) sobre los libros y autores almacenados en la base de datos.

## 🚀 Tecnologías Utilizadas

- **Node.js** - 
- **Express.js** -
- **MySQL** - 

---

## 🔧 Instalación y Configuración

### 1️⃣ **Clonar el Repositorio**

```bash
  git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-jacquelinlopez.git
 
```

### 2️⃣ **Instalar Dependencias**

```bash
  npm install
```

### 3️⃣ **Configurar Variables de Entorno**

Crear un archivo **.env** en la raíz del proyecto con los siguientes valores:

```
PORT=5005
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=libreria_db
```

### 4️⃣ **Iniciar el Servidor**

```bash
  node server.js
```

📌 El servidor se ejecutará en: `http://localhost:5005`

---

## 📌 Endpoints de la API

### 📖 **Libros**

#### 🟢 Obtener todos los libros

**GET** `/libros`

```json
Respuesta de ejemplo:
{
  "count": 5,
  "results": [
    {
      "id": 1,
      "titulo": "aprendiendo git y github",
      "genero": "tecnologia",
      "autor": "miguel angel duran"
    }
  ]
}
```



#### 🟢 Agregar un nuevo libro

**POST** `/libros`

**Body:**

```json
{
  "titulo": "Harry potter y la camara secreta",
  "autor_id": 5,
  "genero": "fantasia"
}
```


#### 🟡 Actualizar un libro

**PUT** `/libros/:id`

**Body:**

```json
{
  "titulo": "aprendiendo git y github (Edición 2024)",
  "autor_id": 1,
  "genero": "tecnologia"
}
```

**Respuesta:**

```json
{
  "success": true,
  "message": "Libro actualizado con éxito"
}
```

#### 🔴 Eliminar un libro

**DELETE** `/libros/:id`

**Respuesta:**

```json
{
  "success": true,
  "message": "Libro eliminado con éxito"
}
```

---



#### 🟢 Agregar un nuevo autor

**POST** `/autores`

**Body:**

```json
{
  "nombre": "Isabel Allende",
  "nacionalidad": "Chilena"
}
```

**Respuesta:**

```json
{
  "success": true,
  "message": "Autor agregado con éxito",
  "id": 6
}
```

#### 🔴 Eliminar un autor

**DELETE** `/autores/:id`

**Respuesta:**

```json
{
  "success": true,
  "message": "Autor eliminado con éxito"
}
```

---

## 🛠 Posibles Mejoras

- **Autenticación con JWT** para usuarios.

---



