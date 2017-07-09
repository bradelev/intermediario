# intermediario
En este repositorio se encuentra los archivos que componen el sitio web.

![imagen del repositorio](/assets/tutorial/screen01.jpg "Estructura de archivos")

- En 1 se muestra la branch actual del repositorio 'gh-pages' tiene el contenido del sitio web, 
cada cambio que se realiza se ve instantáneamente en la página.

- En 2 se muestra el directorio _posts: acá van ubicadas las publicaciones y las novedades

- En 3 se muestra el directorio assets: acá van ubicados los pdf adjuntos de las publicaciones


## Actualización de una nueva publicación

Primero vamos a la carpeta assets/publicaciones, ahí presionamos 'Upload files' 
para seleccionar el archivo pdf adjunto que la publicación tendra como link.

![imagen del repositorio](/assets/tutorial/screen02.jpg "Estructura de archivos")

Luego creamos la publicación, para esto vamos a la carpeta _posts.
Los archivos son con extensión .md, y el nombre tiene la siguiente convención: año-mes-dia-nombre.md

Ej: 2017-06-25-publicacion-x.md, la fecha y la extensión son importantes, la fecha, sirve para ordenar 
las publicaciones y la extensión para que la webapp reconozca el texto como una publicación.

![imagen del repositorio](/assets/tutorial/screen03.jpg "Estructura de archivos")

Entonces, vamos a 'Create new file' y creamos el archivo con el siguiente formato:

```
---
layout: post
date:   2017-06-12 11:17:48 -0300
link_archivo: Intermediario 12.06.2017 Numero 3.pdf
fecha_visible: "12.06.2017"
titulo: Numero 3
category: publicacion
---

## BOGATELL S.A.

Objeto principal: Participar en otras sociedades comerciales en Uruguay o en el extranjero de acuerdo 
con lo establecido en el art. 47 de la Ley 16.060 con la redacción dada por el art. 100 de la Ley 18.083. Objeto ...

Montevideo. Cien años. $80.000, 

26.05.2017, 7006.

---
```
- layout: es el aspecto que va a tener (dejar en post)
- date: es la fecha que se va a mostrar en la publicación (hora y zona horaria no es relevante)
- link_archivo: se pone el nombre del archivo pdf adjunto
- fecha_visible: es el nombre que va a tener el archivo en el menú de publicaciones
- título: es el título de la publicación, se ve en el encabezado y en el resultado de las búsquedas.
- category: (publicacion | noticias) , según la categoría será una publicación o un post en novedades

** Es importante mantener el formato:
- el ```##``` da el formato de titulo de una empresa.
- el ```---``` es el separador entre empresas.
- si se quiere escribir un nuevo párrafo debe haber un renglón entre medio.

El lenguaje utilizado se llama markdown, si bien se puede ir viendo el resultado en preview, hay otras páginas que
hacen muy cómoda la edición de este tipo de archivos, por ejemplo http://www.dillinger.io

Una vez finalizada la edición del archivo vamos a Commit new file, se puede agregar algun mensaje para facilitar 
un seguimiento de cambios (pero no es necesario a este nivel).

![imagen del repositorio](/assets/tutorial/screen04.jpg "Estructura de archivos")

Luego de confirmar los cambios, éstos deberían verse de manera prácticamente instantánea en el sitio.

