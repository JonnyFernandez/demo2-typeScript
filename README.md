# 🚀 Node.js con TypeScript y TS-Node-Dev

Configuración rápida y optimizada para proyectos con **Node.js + TypeScript**, utilizando **TS-Node-Dev** como entorno de desarrollo.  
Incluye scripts para ejecutar en modo desarrollo, compilar a JavaScript y levantar en producción.

---

## 📦 Instalación

1. Instalar TypeScript y demás dependencias

```
npm i -D typescript @types/node ts-node-dev rimraf
```

2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))

```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

4. Tareas programadas y cronologicas ([cron](https://www.npmjs.com/package/cron))

```
npm i cron
```

5. Sevicion de desarrollo Jason Server ([json-server](https://www.npmjs.com/package/json-server?activeTab=readme))

```
npm i json-server
```
