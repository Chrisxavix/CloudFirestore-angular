# CloudFirestoreAngular
Versión: 8.3.21.

Realizar un proyecto con cloud firestore y publicarlo con su hosting.

Tener una cuenta en Firebase: https://firebase.google.com/

Darle a comenzar.

Agregar un proyecto.

Agregar un nombre, será el dominio del sitio: cloud-host-firestore/firestore

Ir al párrafo: "Comienza por agregar Firebase a tu app" y elegir WEB </>.

Darle un sobrenombre: angularfirestore.

Copiar el script.

Ir a: https://github.com/angular/angularfire

Seleccionar Quick Start - Guía Rápida.






ng add @angular/fire


Se creará el repositorio y brindará pasos a seguir.

Darle a Hosting y comenzar.

Pasos dados por Firebase:

npm install -g firebase-tools
firebase login (Si ya se encuentra logueado, darle a logout para cambiar de cuenta)
? Allow Firebase to collect CLI usage and error reporting information? (Y/n) --> y
firebase init
? Are you ready to proceed? (Y/n) --> y
Elegir Hosting, bajar con flechas, seleccionar con la tecla espacio
Use an existing project --> porque se selecciona el proyecto antes creado (fire-angularv1)
? What do you want to use as your public directory? (public) --> escribir un punto (dist)
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) --> n
? Set up automatic builds and deploys with GitHub? (y/N) --> y
? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) --> se escribe el nombre del repositorio, junto con el usuario, chrisxavix/firebase-angular
? Set up the workflow to run a build script before every deploy? (y/N) --> y
? What script should be run before every deploy? (npm ci && npm run build) --> darle doble enter
? Set up automatic deployment to your site's live channel when a PR is merged? (Y/n) --> y
? What is the name of the GitHub branch associated with your site's live channel? (master) --> darle a enter
ng build

Ir a firebase.json y poner la dirección correcta: "public": "dist/Firebase-angular"

firebase deploy

Nos arroja un enlace que será el proyecto desplegado: https://fire-angularv1.web.app/

Nota: Configuración para tener enlaces con rutas.

En firebase.json agregar después del array ignore:
"rewrites": [ { "source": "**", "destination": "/index.html" } ]