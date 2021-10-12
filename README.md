# Api-testimonios-mongodb
Para ejecutar este proyecto se necesitara mongodb, node.js y NPM.
Antes de ejecutarlo abrir la consola de Vs Code (Ctrl + Ñ) o de su editor y ejecutar el comando NPM INSTALL.
Al ejecutarlo y al entrar a localhost:80 en su navegador se mostrara una landing page de una empresa ficticia con un slider que muestra testimonios, por defecto no abra ninguno, debera clickear en agregar testimonio y agregar uno con el formulario. Para que se muestre el mensaje con la informacion debera activarlo desde la API con el metodo PATCH pasando como parametro el _id (puede recuperarlo con un find() desde mongo o con el metodo GET desde la API).
La api cuenta con metodo GET, DELETE:ID y PATCH(solo para activar registros). 
