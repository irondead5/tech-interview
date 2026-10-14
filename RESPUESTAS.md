# Respuestas

---

### 1. Explica con un ejemplo la diferencia entre renderizado en el cliente (CSR), del lado del servidor (SSR) y sitios estáticos (SSG). ¿Para un sitio corporativo informativo cuál elegirías y por qué?

> La diferencia entre CSR, SSR y SSG radica principalmente que CSR lo renderiza el cliente, se puede utilizar en cualquier caso de uso sin embargo, tiene sus limitantes el cual es que lo renderiza el cliente, el SSR sirve para renderizar la pagina desde el servidor, sirve para tiempos de carga mas rapidos, SSG sirve para tener renderizada la pagina desde el momento del build, sin embargo SSG no refleja los cambios de inmediato si es que hay un cambio desde el backend hasta que se vuelva a ejecutar el build del frontend.
>
> Utilizaria SSR para un e-commerce con precios que cambian al instante, SSG para un blog o documentacion, CSR para un dashboard privado.
>
> Para un sitio corporativo informativo eligiria SSG porque es contenido que no cambia mucho y necesita ser entregado en el menor tiempo posible.

---

### 2. Astro, Next.js y Svelte: elige uno con el que te sientas más cómodo y di en qué proyecto real lo usarías frente a los otros dos.

> Astro es para un sitio de contenidos y con la carga minima, Svelte para sistemas dinamicos e interactivos con mayor rendimiento que Next / Nuxt y Nuxt es un metaframework que ya tiene integrado un ecosistema de authentication, content management, payments mediante modulos principales o comunitarios.
>
> Elijo Nuxt porque se puede abordar cualquier caso de uso y porque tengo mayor expertise en este framework. Tiene una infinidad de modulos los cuales ahorran grandes cantidades de trabajo y soporta todos los tipos de renderizado, tiene composables que son SSR friendly por lo que no hay que pelearse con el SSR en ningun momento.

---

### 3. ¿Cuándo recomendarías un CMS como WordPress y cuándo un sitio hecho a medida? Menciona una ventaja y una desventaja de cada camino.

> Si bien hoy dia existen opciones como CMS dentro de Nuxt que seria el equivalente a un sitio hecho a medida mas barato, se limita para equipos tecnicos, mientras que WordPress es para personas ajenas a la tecnologia, como editores, equipos de marketing y ya tiene una adopcion por parte de estos equipos, lo que reduce la capacitacion, el punto malo de WordPress es que requiere un servidor para alojar el aplicativo PHP y su Database.

---

### 4. Para una tienda en línea, ¿qué preguntas le harías al cliente antes de decidir entre Shopify y Magento?

> Preguntar si su prioridad es vender rápido sin lidiar con servidores ni mantenimiento técnico (Shopify), o si tienen el presupuesto, equipo de desarrollo y complejidad para justificar el control total del código (Magento)

---

### 5. Describe, paso a paso y con tus palabras, cómo llevarías un cambio de código desde tu computadora hasta producción usando Git y GitHub. Menciona ramas (branches) y Pull Requests.

> Primero antes de hacer el cambio verifico que tenga los ultimos cambios de la branch con la que estoy trabajando, digamos "dev", luego verifico que no tenga codigo sin hacer commit, despues hago el cambio de codigo y agrego los cambios a un commit y le hago push a mi branch. Despues hago un pull request para hacer merge con la rama principal "main" y posteriormente subo el cambio con Git Actions para el CI/CD si es que esta configurado, si no, hago el despliegue manual al servidor destino mediante SSH y me conecto a un VPS con Linux.

---

### 6. ¿Qué es un “build” y qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages?

> Un build es el resultante de la compilacion de nuestro proyecto, cuando conecto un repo de github a vercel o cloudflare pages automaticamente se realiza la configuracion por el framework y se configura el CI/CD automaticamente, lo que quiere decir que cualquier merge a la rama Main automaticamente se desplegara los cambios, por eso es importante subir cambios a otras ramas, revisarlos y hacerles merge a Main en ese orden.

---

### 7. Menciona 3 cosas que cuidarías para que una landing page cargue rápido y posicione bien (SEO/rendimiento).

> Primero, utilizar Server Side Rendering o SSG para tener un excelente rendimiento, despues adaptarme a los estandares de los frameworks que nos facilitan el SEO como en Nuxt 4 tenemos un composable llamado useSeoMeta el cual nos da las propiedades de SEO con mas de 100 parametros con TypeSafe y nos prevee de ataques XSS (inyeccion de script malicioso), tercero probar con plugins de Chrome como "Social Share Preview" para probar el SEO de la pagina

---

### 8. Cuéntanos de una tecnología que aún no dominas. ¿Cómo aprenderías a usarla si empezaras la próxima semana?

> No domino Magento o Shopify, viendo un curso y leyendo documentacion, ademas de potenciar mis capacidades con AI. Ademas para aprendizaje montaria un proyecto para entender su funcionamiento localmente.