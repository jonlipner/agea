En relación a la prueba, estuve con otras asignaciones urgentes hasta el miércoles, 
por lo que apenas ayer jueves pude dedicarle un poco más de tiempo a la tarea.

Le falta trabajo a nivel de estilo, y hubiera hecho los scripts con un poco más de precisión,
pero traté de cumplir con las consignas dentro del tiempo que tenía, esto es, sabiendo que estaba
fuera del límite establecido.

A nivel técnico, encontré algunas cuestiones para consultar a nivel del User Agent. En función de lo que
anduve investigando, la documentación de Mozilla recomienda no requerirlo de manera directa, sino más bien
tomar el elemento particular que se quiera obtener y ofrece distintas alternativas. El problema es que la 
consigna no establecía cuál era ese valor exacto.

El tema de la navegación privada fue un poco más truculento y me llevó bastante tiempo.
Al parecer hay distintas alternativas para obtener ese dato, aunque la solución más actualizada que conseguí
parece que solamente funcionaba hasta la versión 84 de Chrome, y falló cuando la probé. No tuve tiempo de 
probar con el resto de los navegadores aunque hay un funcion que los evalúa uno por uno.

Sobre el hash, preferí asumir que ya estaba generado y recuperarlo del localStorage, aunque encontré,
de todas maneras, una función para generarlo. De nuevo, el problema fue el criterio a utilizar, que no estaba
aclarado en las consignas. 

Como preprocesador usé Sass, si bien a nivel de estilo no lo trabajé mucho más allá de la maqueta básica.

Me hubiese gustado poder trabajar un poco más el pasaje de la imagen al video, añadirle algún efecto con hover
para que fuese más intuitivo a nivel de usabilidad. En todos los casos de las imágenes evalué si aceptaban
la propiedad de lazy loading de html y en caso de que no, llamo a una librería externa para manejarlo.
