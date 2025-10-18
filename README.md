# 🐾 BackEnd-VitalPet

BackEnd-VitalPet es la API REST del sistema **VitalPet**, una aplicación pensada para la gestión de una veterinaria.  
Permite administrar usuarios, mascotas, turnos y servicios veterinarios, ofreciendo autenticación segura y endpoints organizados para integrarse con el frontend.

---

## 🚀 Características

- Registro e inicio de sesión de usuarios con **autenticación JWT**
- Encriptación de contraseñas con **bcrypt**
- Gestión completa de **mascotas y turnos veterinarios**
- Roles de usuario (Administrador)
- Validaciones con **express-validator**
- Base de datos **MongoDB**
- Despliegue en **Vercel**
- Código modular y organizado

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB** con **Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **express-validator**
- **cors**

## ⚙️ Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/AcostaCl/BackEnd-VitalPet.git

   ```

2. Entrá al directorio:

```bash
cd BackEnd-VitalPet

```

3. Instalá las dependencias:

```bash
npm install

```

4. Creá un archivo .env en la raíz del proyecto con el siguiente contenido: Configurá tus variables de entorno

```bash
PORT=3001
MONGODB=mongodb+srv://develop3er:LhHEspCPr0EIidwO@cluster0.rz2a5qv.mongodb.net/VetVitalPet
SECRET_JWT= Cl43v3$%s3cr3t0fr4s3

```

5. Iniciá el servidor:

```bash
npm start

```

## 🧪 Uso

Una vez que el servidor esté corriendo, podrás consumir los endpoints desde tu frontend o con herramientas como Postman.
Ejemplo:

```bash
POST /api/usuarios/login
POST /api/usuarios/registro
GET /api/pacientes
POST /api/turnos
POST /api/mensajes

```

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
Podés usarlo, modificarlo y distribuirlo libremente, siempre citando al autor original.

## 👨‍💻 Autor

Desarrollado por: Milton Mamani, Santiago Gonzales, Acosta Celina, Benjamin Quiros
📅 Año: 2025
