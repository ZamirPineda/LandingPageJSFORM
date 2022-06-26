# LandingPageJSFORM
Para la entrega final del JavaScript Fundamentals, reutilizamos el landing page utilizado para el curso introductorio a HTML5 y CSS3\
En este caso, para la entrega final, nos centramos en el formulario.\
![Image text](https://github.com/ZamirPineda/LandingPageJSFORM/blob/main/images/Interfaz.PNG)\
Este forumlario debe cumplir con los siguientes requisitos: 
- Campo nombre y apellido no debe estar vacío y contener al menos un espacio.
- Campo correo debe tener un correo válido.
- Campo número de teléfono debe tener entre 7 y 15 dígitos, pudiendo tener un + al inicio, ignorando espacios en blanco.
- Campo comentario debe tener al menos 20 caracteres.
- En caso de pasar las validaciones, enviar petición a la API entregada en clase (https://30kd6edtfc.execute-api.us-east-1.amazonaws.com/prod/send-email) usando fetch \
  - Por ejemplo, si colocamos mal el nombre, nos aparecera algo como esto: \
![Image text](https://github.com/ZamirPineda/LandingPageJSFORM/blob/main/images/Error.PNG)\
La alerta de error solo saldrá en el caso de que le de al botón cotizar e incumpla alguno de los requisitos escritos en JavaScript mediante RegEx, ya que, mediante el Fetch, primero valida si se esta enviando todo y luego verifica que esten cumpliendo los requisitos. \
Eso es todo, muchas gracias por leer! :)
