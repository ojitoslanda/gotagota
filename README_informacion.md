### SPRING BOOT GERATE
https://start.spring.io/
![SPRINGBOOT](https://github.com/ojitoslanda/testing/blob/master/img/javaweb/preview.webp)


# 🌿 Gotagota — Backend Spring Boot

> Documentación de arquitectura y estructura del proyecto.

---

## ¿Qué es un Endpoint?

Un **endpoint** es simplemente una URL a la que tu frontend puede hacer una petición para obtener o enviar datos.

```
Tu backend (Spring Boot)  →  expone una API con URLs (endpoints)
Tu frontend (HTML/JS)     →  consume esa API con fetch()
```

---

## Estructura del Proyecto

### `entity/Cliente`
> *El molde.*

Le dice a Java cómo es un cliente. Tiene los mismos campos que la tabla en MySQL:
`nombre`, `apellido`, `dni`, `telefono`, `direccion`.

Es como el formulario en blanco.

---

### `repository/ClienteRepository`
> *El que habla con la base de datos.*

Gracias a Spring Boot no necesitas escribir SQL — él lo hace solo. Solo le dices
"dame todos los clientes" y él va a MySQL y los trae.

---

### `service/ClienteService`
> *El intermediario.*

Recibe lo que pide el Controller, lo procesa y se lo pasa al Repository.
Aquí es donde va la **lógica de negocio**, por ejemplo: verificar que el DNI no esté repetido antes de guardar.

---

### `controller/ClienteController`
> *La ventanilla.*

Recibe las peticiones que llegan desde el navegador (desde el JavaScript) y devuelve la respuesta.
Por ejemplo, cuando el JS hace `fetch("/api/clientes")`, el Controller es el primero en responder.

---

### `GotagotaApplication`
> *El encendido del sistema.*

Solo tiene el método `main()` que arranca todo Spring Boot. **No se toca.**

---

## Anotaciones en Java (`@`)

Las anotaciones son como **etiquetas** que le dan instrucciones a Spring Boot sobre qué hacer con cada clase o método.

> Sin anotaciones tendrías que escribir muchísimo código de configuración manualmente.
> Spring Boot lee las anotaciones y hace el trabajo por ti.
> *(Similar a los decoradores `@` en Python.)*

| Anotación | Qué le dice a Spring |
|---|---|
| `@Entity` | "Esta clase es una tabla de base de datos" |
| `@RestController` | "Esta clase recibe peticiones HTTP y devuelve JSON" |
| `@Service` | "Esta clase contiene la lógica del negocio" |
| `@Repository` | "Esta clase accede a la base de datos" |
| `@GetMapping` | "Este método responde a peticiones GET" |
| `@Autowired` / Constructor | "Inyecta esta dependencia automáticamente" |

> **Ejemplo:** sin `@RestController` tendrías que registrar manualmente cada clase en un archivo XML de configuración — así se hacía en Java EE antiguo, era muy tedioso.

---

## Flujo de una Petición

```
Navegador (JS)
     │
     │  fetch("/api/clientes")
     ▼
ClienteController   ←  @RestController
     │
     │  llama al servicio
     ▼
ClienteService      ←  @Service  (lógica de negocio)
     │
     │  llama al repositorio
     ▼
ClienteRepository   ←  @Repository
     │
     │  consulta SQL automático
     ▼
   MySQL
```
