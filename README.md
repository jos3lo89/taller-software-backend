## Iniciar app `windows`
### Requisitos
- Node JS `v22.6.0` [Descargar](https://nodejs.org/en/download/prebuilt-installer)
- Visual Studio Code [Descargar](https://code.visualstudio.com/)
- Docker [Instalar](https://www.docker.com/)
- Git [Instalar](https://git-scm.com/downloads)
- Clonar repositorio
```bash
git clone https://github.com/jos3lo89/taller-software-backend.git
```
- Scripts
```bash
# Instalar dependencias
npm i # npm install

# Obtener la imagen de Postgres y crear un contenedor
docker-compose up -d

# Inicializa prisma ORM

# Sincronizar Prisma con la Base de Datos
npx prisma db push

#Actualizar el Cliente Prisma
npx prisma generate

# Inicializa el servidor
npm run dev
```
