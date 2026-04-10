### SPRING BOOT GERATE
https://start.spring.io/
![SPRINGBOOT](https://github.com/ojitoslanda/testing/blob/master/img/javaweb/preview.webp)

Un endpoint es simplemente una URL a la que tu frontend puede hacer una petición para obtener o enviar datos. 

- Tu backend (Spring Boot) expone una API con URLs (endpoints)           
- Tu frontend (HTML/JS) consume esa API con fetch()    




entity/Cliente
Es el molde. Le dice a Java cómo es un cliente. Tiene los mismos campos que la tabla en MySQL: nombre, apellido, dni, telefono, direccion. Es como el formulario en blanco.

repository/ClienteRepository
Es el que habla con la base de datos. Gracias a Spring Boot no necesitas escribir el SQL, él lo hace solo. Solo le dices "dame todos los clientes" y él va a MySQL y los trae.

service/ClienteService
Es el intermediario. Recibe lo que pide el Controller, lo procesa y se lo pasa al Repository. Aqui es donde va la logica, por ejemplo verificar que el DNI no este repetido antes de guardar.

controller/ClienteController
Es la ventanilla. Recibe las peticiones que llegan desde el navegador (desde el JavaScript) y devuelve la respuesta. Por ejemplo cuando el JS hace fetch("/api/clientes") el Controller es el primero en responder.

GotagotaApplication
Es el encendido del sistema. Solo tiene el metodo main() que arranca todo Spring Boot. No se toca.



Los @ se llaman anotaciones en Java. Son como etiquetas que le dan instrucciones al framework (Spring Boot) sobre qué hacer con esa clase o método.

  Sin anotaciones tendrías que escribir muchísimo código de configuración manualmente. Spring Boot lee las anotaciones y hace el trabajo por ti.

  Ejemplos concretos:

  ┌──────────────────────────┬─────────────────────────────────────────────────────┐
  │        Anotación         │                Qué le dice a Spring                 │
  ├──────────────────────────┼─────────────────────────────────────────────────────┤
  │ @Entity                  │ "Esta clase es una tabla de base de datos"          │
  ├──────────────────────────┼─────────────────────────────────────────────────────┤
  │ @RestController          │ "Esta clase recibe peticiones HTTP y devuelve JSON" │
  ├──────────────────────────┼─────────────────────────────────────────────────────┤
  │ @Service                 │ "Esta clase contiene la lógica del negocio"         │
  ├──────────────────────────┼─────────────────────────────────────────────────────┤
  │ @Repository              │ "Esta clase accede a la base de datos"              │
  ├──────────────────────────┼─────────────────────────────────────────────────────┤
  │ @GetMapping              │ "Este método responde a peticiones GET"             │
  ├──────────────────────────┼─────────────────────────────────────────────────────┤
  │ @Autowired / Constructor │ "Inyecta esta dependencia automáticamente"          │
  └──────────────────────────┴─────────────────────────────────────────────────────┘

  Por ejemplo, sin @RestController tendrías que registrar manualmente cada clase en un archivo XML de configuración (así se hacía en Java EE antiguo, era muy tedioso).             
   
  Es como los decoradores en otros lenguajes — en Python usan @ también para lo mismo.   
