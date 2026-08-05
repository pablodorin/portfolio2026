# ENCARGO PARA CODEX — NO PUBLICAR ESTA SECCIÓN

Publicá una nueva nota en el blog **Endpoint** de `pablodorin.com` usando el paquete editorial y el contenido comprendidos entre `ARTICLE_START` y `ARTICLE_END`.

Antes de editar:

1. Inspeccioná la estructura del proyecto y, en particular, el artículo 06 («Deuda técnica: qué es y qué no es») para identificar la carpeta, extensión, esquema de datos, componentes y convenciones editoriales reales.
2. La versión actualmente publicada de Endpoint contiene seis artículos. Incorporá esta nota como **Artículo 07**, salvo que el repositorio ya contenga un artículo posterior todavía no publicado; en ese caso, conservá la secuencia real y reportá el ajuste.
3. Reproducí la estructura existente de la portada de Endpoint: número, fecha, línea temática, título, extracto y etiquetas.
4. Reproducí la estructura existente de la página de artículo: volanta numérica, título, bajada, copete, fecha, nota de idioma, cuerpo, referencias, etiquetas y navegación entre artículos.
5. No muestres en la página las palabras «Volanta», «Bajada» ni «Copete». Son nombres editoriales incluidos en este encargo para identificar cada pieza.
6. Adaptá los datos a los nombres de campos reales del repositorio. No inventes un *front matter* ni componentes nuevos si Endpoint utiliza objetos o archivos de datos.
7. La nota fue escrita originalmente en español. Incorporá esta versión en español y no generes ni publiques traducciones al inglés o al francés sin una instrucción adicional. No dejes enlaces de idioma que conduzcan a páginas inexistentes.
8. El extracto de portada y la descripción SEO son metadatos: no deben repetirse como párrafos dentro del cuerpo.
9. Conservá el artículo y los enlaces de «Referencias y lecturas». No agregues experiencias personales, empresas ni afirmaciones atribuidas al autor.
10. No conviertas las preguntas de ejemplo en una lista específica de Java, React, AWS ni de ningún perfil particular: deben seguir siendo generales.
11. No agregues imagen de portada: los artículos existentes de Endpoint no la utilizan.
12. No publiques ni hagas *deploy* si eso requiere una acción externa no solicitada. Incorporá la nota al repositorio, ejecutá las validaciones o el *build* existentes y reportá los archivos modificados y el resultado.

## Datos para la portada de Endpoint

- ID: `technical-interview-failure`
- Número: `7`
- Fecha: `2026-08-08`
- Línea temática: `ENTREVISTAS TÉCNICAS Y DESARROLLO PROFESIONAL`
- Título: `Fallar en una entrevista técnica`
- Extracto de portada: `Una mala entrevista técnica no define por sí sola la capacidad profesional. Puede, sin embargo, mostrar la distancia entre hacer, comprender y explicar.`
- Etiquetas: `Technical Interviews`, `Software Careers`, `Professional Development`, `Learning`, `Impostor Syndrome`

## Datos para la cabecera de la nota

- Volanta: `Artículo 07`
- Título: `Fallar en una entrevista técnica`
- Bajada: `Fallar una entrevista técnica no demuestra automáticamente que alguien no sabe programar. Sí puede revelar una distancia incómoda entre lo que sabe hacer, lo que comprende y lo que consigue explicar bajo presión.`
- Copete: `No todas las entrevistas evalúan lo mismo: una conversación técnica, un ejercicio de live coding, una sesión de pair programming o un diseño de sistemas exigen habilidades distintas. Analizar dónde apareció la dificultad permite convertir el resultado en un programa concreto de estudio, práctica y preparación para volver al ruedo.`
- Fecha visible: `8 de agosto de 2026`
- Nota de idioma: `Artículo escrito originalmente en español.`

## Rutas y metadatos técnicos

- Ruta española: `/es/endpoint/fallar-en-una-entrevista-tecnica/`
- *Slug*: `fallar-en-una-entrevista-tecnica`
- Idioma original: `es`
- Título SEO: `Fallar en una entrevista técnica | Endpoint`
- Descripción SEO: `Tipos de entrevistas técnicas en IT, dificultades del pair programming, síndrome del impostor y una guía para estudiar y volver al ruedo.`

No agregues autor ni tiempo de lectura visibles: las notas actuales de Endpoint no muestran esos elementos. Mantené la línea temática de portada y las etiquetas con el tratamiento tipográfico que ya aplica el sitio.

<!-- ARTICLE_START -->

<!-- VOLANTA: Artículo 07 -->

# Fallar en una entrevista técnica

<!-- BAJADA -->

*Fallar una entrevista técnica no demuestra automáticamente que alguien no sabe programar. Sí puede revelar una distancia incómoda entre lo que sabe hacer, lo que comprende y lo que consigue explicar bajo presión.*

<!-- COPETE -->

No todas las entrevistas evalúan lo mismo: una conversación técnica, un ejercicio de *live coding*, una sesión de *pair programming* o un diseño de sistemas exigen habilidades distintas. Analizar dónde apareció la dificultad permite convertir el resultado en un programa concreto de estudio, práctica y preparación para volver al ruedo.

<!-- FECHA: 8 de agosto de 2026 -->

<!-- NOTA DE IDIOMA: Artículo escrito originalmente en español. -->

<!-- CUERPO -->

Una entrevista técnica puede salir mal de muchas maneras.

Podemos desconocer una respuesta. Podemos entender un concepto, pero no encontrar las palabras. Podemos haber utilizado una herramienta durante años sin haber organizado una explicación sobre cómo funciona. También podemos quedarnos bloqueados al intentar programar mientras otra persona observa cada movimiento del cursor.

El resultado suele sentirse igual: terminamos la entrevista repasando cada silencio, cada respuesta incompleta y cada error que, fuera de esa situación, parecía fácil de evitar.

Entonces aparece una idea especialmente conocida entre quienes trabajan en tecnología:

**«Soy un impostor».**

No simplemente «me fue mal» o «necesito estudiar este tema», sino algo más radical: «En realidad nunca supe; solamente conseguí que los demás creyeran que sabía».

Antes de convertir una mala entrevista en un juicio definitivo sobre nuestra identidad profesional, conviene entender qué clase de prueba acabamos de realizar. Porque no existe una única entrevista técnica.

## Siete modalidades de entrevista técnica

Las empresas combinan distintos formatos. Cada uno exige habilidades diferentes y ofrece información parcial sobre el candidato. Por eso, prepararse para «una entrevista técnica» sin conocer la modalidad es parecido a prepararse para «un examen» sin saber si será oral, escrito o práctico.

### 1. Entrevista técnica conversacional

El entrevistador formula preguntas sobre programación, diseño, arquitectura, bases de datos, testing, infraestructura o formas de trabajo. No necesariamente pide escribir código: espera que el candidato pueda definir conceptos, relacionarlos y justificar decisiones.

Algunas preguntas típicas y deliberadamente generales podrían ser:

- ¿Qué diferencia existe entre herencia y composición? ¿Cuándo elegirías cada una?
- ¿Qué problema resuelve la inyección de dependencias?
- ¿Cómo organizarías el tratamiento de errores en una API?
- ¿Qué diferencia hay entre una prueba unitaria y una de integración?
- ¿Cómo investigarías un endpoint que comenzó a responder lentamente?
- ¿Qué es un índice de base de datos y qué costo introduce?
- ¿Cuándo elegirías una base relacional y cuándo una no relacional?
- ¿Qué ventajas y dificultades presentan los microservicios?
- ¿Cómo protegerías una API expuesta públicamente?
- ¿Cómo decidirías qué información registrar en los logs?
- ¿Qué significa que una operación sea transaccional?
- ¿Qué harías si una solución funciona, pero resulta difícil de mantener?
- ¿Cómo comprobarías que un cambio no rompió funcionalidades existentes?
- ¿Cuándo evitarías una tecnología que conocés bien?

La dificultad no está solamente en recordar una definición. Las repreguntas obligan a demostrar que detrás de ella existe comprensión:

—¿Por qué?  
—¿Qué alternativa había?  
—¿Qué costo introduce esa decisión?  
—¿En qué situación elegirías lo contrario?  
—¿Cómo lo probarías?  
—¿Qué sucedería si el sistema creciera?

Una respuesta memorizada puede sobrevivir a la primera pregunta. Rara vez sobrevive a las siguientes.

### 2. *Live coding*

El candidato debe resolver un problema mientras uno o más entrevistadores observan. Puede ser un algoritmo, una transformación de datos, una función, un componente visual, una pequeña API o una modificación sobre un proyecto preparado de antemano.

No se evalúa únicamente si el programa termina funcionando. También pueden observarse la comprensión de los requisitos, la descomposición del problema, la elección de estructuras de datos, la claridad del código, los casos límite, la forma de depurar y la administración del tiempo.

El formato no reproduce por completo el trabajo cotidiano. En el trabajo podemos consultar documentación, explorar el código, probar hipótesis y permanecer varios minutos en silencio. Durante una entrevista, cada pausa parece necesitar una explicación. Por eso alguien competente puede rendir mal en *live coding* y alguien muy entrenado en ejercicios de entrevista puede rendir mejor de lo que su experiencia laboral sugeriría.

La prueba no es inútil, pero tampoco es una reproducción neutral del trabajo real.

### 3. *Pair programming*

En el *pair programming*, candidato y entrevistador trabajan juntos sobre un problema. Uno puede escribir mientras el otro observa, pregunta, propone alternativas o señala posibles errores.

Bien utilizada, esta modalidad permite ver cómo una persona colabora, escucha, explica sus decisiones y modifica la solución ante nueva información. No se trata simplemente de programar con alguien mirando. [Thoughtworks describe](https://www.thoughtworks.com/en-us/insights/blog/what-expect-pair-programming-interview) un proceso en el que la comunicación, el razonamiento, el trabajo en equipo, el diseño, el código y el testing importan incluso cuando no se completa toda la solución.

El formato presenta dificultades particulares.

#### Pensar y hablar al mismo tiempo

Algunas personas resuelven mejor los problemas en silencio. En una sesión de *pair programming* deben programar, revisar lo escrito y construir una narración comprensible a la vez.

Si permanecen calladas, el entrevistador no sabe si están razonando o bloqueadas. Si narran cada carácter, entorpecen su propio pensamiento. El equilibrio consiste en verbalizar decisiones, dudas y alternativas, no cada línea escrita.

#### Trabajar en un entorno desconocido

Puede utilizarse un editor, sistema operativo, repositorio o conjunto de atajos que el candidato no conoce. Una dificultad accidental con el entorno puede consumir tiempo y parecer una carencia técnica.

#### Comprender requisitos incompletos

Muchas consignas contienen ambigüedades deliberadas. Se espera que el candidato pregunte antes de programar. Bajo presión, sin embargo, es común asumir demasiado, comenzar inmediatamente y descubrir varios minutos después que se resolvió el problema equivocado.

#### Recibir sugerencias sin ponerse a la defensiva

Una indicación del entrevistador puede ser una ayuda, una corrección o una forma de observar cómo se procesa el *feedback*. Rechazarla automáticamente puede mostrar rigidez; aceptarla sin comprender tampoco ayuda. Hay que detenerse, evaluar la propuesta y explicar qué cambiaría.

#### Recuperarse de un error observado

Un error de sintaxis insignificante puede provocar un bloqueo desproporcionado cuando alguien está mirando. El candidato comienza a modificar varias cosas a la vez, abandona su método de depuración y transforma un defecto simple en una situación caótica.

#### Equilibrar velocidad y calidad

Hay poco tiempo, pero también se evalúan nombres, diseño, legibilidad, validaciones y tests. Intentar una solución perfecta puede impedir terminar una versión mínima. Correr demasiado puede producir código imposible de defender.

#### Comprender el papel del entrevistador

No siempre queda claro si la otra persona actuará como compañero, observador o examinador. Conviene preguntar: ¿podemos consultar documentación?, ¿esperan tests?, ¿prefieren que primero expliquemos el diseño?, ¿podemos pedir una pista?

El *pair programming* examina varias capacidades superpuestas: programar, comunicar, escuchar y corregir mientras todo ocurre al mismo tiempo.

### 4. Ejercicio para realizar en casa

El candidato recibe una consigna y dispone de algunas horas o días para entregar una solución. Este formato permite investigar, utilizar el entorno habitual y trabajar con más tranquilidad.

Sus dificultades son otras: interpretar el alcance, decidir cuánto tiempo invertir, evitar la sobreingeniería, documentar la instalación, escribir tests suficientes y entregar algo completo dentro del plazo. Además, el tiempo anunciado por la empresa no siempre coincide con el que exige una solución competitiva.

La evaluación suele continuar después de la entrega. Pueden pedir que expliquemos el diseño, modifiquemos una parte o defendamos las decisiones tomadas. Si no podemos explicar el código enviado, la calidad aparente del repositorio pierde valor.

### 5. Diseño de sistemas

Se presenta un problema amplio: diseñar un servicio de mensajería, una plataforma de pagos, un sistema de reservas o alguna otra solución distribuida.

El candidato debe descubrir requisitos, declarar supuestos y proponer componentes. La conversación puede incluir APIs, bases de datos, cachés, colas, eventos, escalabilidad, consistencia, seguridad, tolerancia a fallos, observabilidad y costos.

No suele existir una única respuesta correcta. Importa convertir una necesidad imprecisa en un diseño razonado y explicar los compromisos: qué ganamos, qué sacrificamos y bajo qué condiciones cambiaríamos la solución.

### 6. Revisión de código y *debugging*

En lugar de construir algo desde cero, se entrega código existente para revisar o reparar. Pueden pedir detectar un defecto funcional, una vulnerabilidad, una consulta ineficiente, una condición de carrera, una mala separación de responsabilidades, una prueba insuficiente o un problema de legibilidad.

Esta modalidad se parece a una parte muy habitual del trabajo real: comprender código ajeno antes de modificarlo. También evita confundir velocidad de escritura con capacidad de ingeniería.

### 7. Caso técnico o presentación

El candidato recibe un escenario y debe presentar una propuesta. Puede explicar una arquitectura, analizar un incidente, defender una solución o exponer un proyecto realizado anteriormente.

Aquí se evalúan simultáneamente conocimientos, organización y comunicación. Saber construir una solución no garantiza saber presentarla. Sin embargo, los puestos de mayor responsabilidad suelen requerir ambas capacidades.

Una [taxonomía de entrevistas técnicas publicada por Zahra Traboulsi](https://zahra.dev/blog/technical-interview-taxonomy/) muestra que incluso estas categorías contienen numerosas variantes: algoritmos o trabajo práctico, ejercicios en vivo o domiciliarios, programación individual o en pareja, diseño de sistemas, modelado de datos, lectura de código, revisión de *pull requests* y presentaciones.

## Hacer, comprender y explicar

Muchos conocimientos profesionales se vuelven tácitos. Después de repetir una tarea durante suficiente tiempo, dejamos de reconstruir conscientemente sus fundamentos. Sabemos dónde colocar una configuración, qué estructura aplicar o qué error buscar. El procedimiento se vuelve familiar.

Eso puede servir para trabajar. No siempre alcanza para explicar.

Una conversación técnica obliga a convertir hábitos en conceptos. Ya no basta con afirmar que algo «se hace así». Hay que identificar qué problema resuelve, cómo funciona, qué alternativas existen y qué consecuencias produce.

Por eso alguien puede utilizar una tecnología y, sin embargo, responder mal una pregunta elemental sobre ella. La práctica puede haberse vuelto mecánica, parcial o muy dependiente del contexto de un proyecto.

También puede ocurrir lo contrario: la persona comprende el tema, pero no consigue recuperar el conocimiento bajo presión. Reconoce una buena explicación cuando la escucha, aunque no logra producirla por sí misma.

Conviene distinguir problemas que parecen iguales desde afuera:

1. No conocer el contenido.
2. Conocerlo solamente de nombre.
3. Haberlo aplicado sin comprender por completo sus fundamentos.
4. Comprenderlo, pero no poder recuperarlo con rapidez.
5. Recuperarlo, pero no saber organizar una explicación.
6. Saber explicarlo, pero bloquearse en el formato de la entrevista.

Para mejorar hay que descubrir cuál de estas cosas ocurrió. Decir simplemente «me puse nervioso» puede ocultar una laguna real. Concluir «no sé nada» convierte una dificultad localizada en una condena total.

## Explicar también forma parte del *seniority*

Un profesional senior no es una enciclopedia. Puede olvidar sintaxis, consultar documentación y desconocer tecnologías enteras. La amplitud del desarrollo de software hace imposible recordarlo todo.

Pero el *seniority* supone algo más que acumular años o haber participado en muchos proyectos. Implica comprender problemas, evaluar alternativas, justificar decisiones, anticipar riesgos y ayudar a que otras personas entiendan el sistema.

Eso requiere explicación.

Una mala respuesta aislada no elimina el *seniority* de nadie. Pero si una persona no puede explicar sistemáticamente las decisiones que toma, resulta difícil que pueda orientar a un equipo, defender una arquitectura, realizar una revisión profunda o comunicar un riesgo técnico.

En la entrevista, además, la empresa no puede evaluar un conocimiento invisible. Puede que el candidato sepa más de lo que consiguió demostrar, pero la decisión se tomará sobre la evidencia disponible.

No alcanza con saber. En esa situación también hay que poder demostrarlo.

## La entrevista como examen imperfecto

Una entrevista técnica se parece a un examen: representa de manera incompleta una capacidad mucho más amplia.

Una persona puede conocer los contenidos y rendir mal. Tal vez no practicó su recuperación, interpretó mal una consigna, administró mal el tiempo o se bloqueó. También puede descubrir que creía dominar un tema que en realidad entendía de manera superficial.

El resultado no describe todo lo que sabe. Pero tampoco carece necesariamente de información.

Ese matiz importa. Criticar los defectos de las entrevistas técnicas puede ser válido: algunas usan preguntas irrelevantes, privilegian la memorización o someten al candidato a condiciones muy alejadas del trabajo real. Pero señalar esas limitaciones no debería impedirnos examinar lo que el fracaso mostró.

Un relato publicado en DEV Community sobre [las lecciones obtenidas al fallar varias entrevistas técnicas](https://dev.to/farhanaxmustafa/what-i-learned-from-failing-my-technical-interviews-276a) ofrece un ejemplo concreto: cada experiencia permitió identificar qué contenidos y formatos necesitaban preparación específica.

## «Soy un impostor»

Después de fallar, el pensamiento no siempre es «tengo una laguna en bases de datos» o «necesito practicar *live coding*».

Muchas veces es:

**«Soy un impostor. Finalmente se dieron cuenta».**

La expresión «síndrome del impostor» suele utilizarse para describir esa incapacidad de reconocer como propia la competencia demostrada y el temor de quedar expuesto como un fraude, incluso cuando existen logros objetivos. No es lo mismo que descubrir una carencia concreta.

El problema aparece cuando una dificultad parcial se interpreta como la revelación de que toda la trayectoria anterior fue una simulación. Una entrevista de una hora se convierte, retrospectivamente, en la verdad secreta de una carrera completa.

Este sentimiento es recurrente en el desarrollo de software. Un artículo de Stack Overflow sobre [el síndrome del impostor en la industria tecnológica](https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/) lo relaciona con la especialización, el aprendizaje permanente y la velocidad con la que cambian las herramientas; también advierte que no toda inseguridad debe reducirse a una falla psicológica individual.

Sin embargo, invocar el síndrome del impostor tampoco debería convertirse en una forma de evitar el diagnóstico técnico.

A veces la persona está subestimando su capacidad. A veces existe efectivamente un conocimiento que necesita recuperar. Ambas cosas pueden ser ciertas al mismo tiempo: la entrevista puede activar una interpretación devastadora sobre uno mismo y señalar una carencia concreta.

La respuesta útil no es la autodestrucción ni la negación. Es investigar qué ocurrió.

## Qué hacer después de fallar

Estudiar.

No acumular respuestas prefabricadas ni memorizar definiciones para recitarlas mecánicamente. Estudiar significa reconstruir y ordenar lo que sabemos, detectar lo que no sabemos y practicar la forma en que tendremos que demostrarlo.

### 1. Registrar la entrevista

Inmediatamente después, conviene escribir todo lo que recordemos:

- preguntas y repreguntas;
- ejercicios;
- errores;
- momentos de bloqueo;
- conceptos que reconocimos demasiado tarde;
- observaciones o pistas del entrevistador.

La memoria reorganiza rápidamente la experiencia. Lo que no se registra se convierte en una impresión vaga: «me fue mal».

### 2. Clasificar cada dificultad

Para cada punto debemos preguntarnos:

- ¿Desconocía el tema?
- ¿Lo conocía solamente de nombre?
- ¿Lo había utilizado sin comprenderlo?
- ¿Lo comprendía, pero no pude recordarlo?
- ¿Me faltó un ejemplo?
- ¿No pude comunicarlo?
- ¿El principal problema fue el formato?

Cada causa exige un entrenamiento diferente.

### 3. Reconstruir el conocimiento

Para cada concepto deberíamos poder explicar al menos cinco cosas:

1. Qué es.
2. Qué problema resuelve.
3. Cómo funciona.
4. Qué ventajas y costos presenta.
5. Cuándo no conviene utilizarlo.

Ésta es la diferencia entre recordar una definición y construir un modelo mental.

### 4. Volver al código

La teoría debe transformarse en una experiencia observable.

Si estudiamos manejo de errores, debemos provocar un error, propagarlo, tratarlo y probarlo. Si estudiamos índices, debemos comparar consultas y analizar su plan de ejecución. Si estudiamos patrones de diseño, debemos encontrar un problema que justifique aplicarlos.

El código revela todo aquello que una explicación parecía haber resuelto, pero todavía no comprendíamos.

### 5. Explicarlo en voz alta

Leer una respuesta genera una falsa sensación de dominio. Reconocer una explicación no es lo mismo que producirla.

Hay que cerrar el material y contestar primero en treinta segundos, después desarrollar un ejemplo y finalmente soportar repreguntas y alternativas.

La explicación no necesita sonar académica. Tiene que ser precisa y resistir una conversación.

### 6. Practicar el formato exacto

Una entrevista conversacional se prepara contestando preguntas y repreguntas.

El *live coding* se prepara programando con límite de tiempo mientras explicamos decisiones.

El *pair programming* se prepara resolviendo junto a otra persona, pensando en voz alta y recibiendo sugerencias.

El diseño de sistemas se prepara planteando requisitos, dibujando arquitecturas y defendiendo compromisos.

Un ejercicio domiciliario se prepara construyendo proyectos pequeños con alcance controlado, tests y documentación.

No existe una práctica genérica que prepare igualmente para todas las modalidades.

### 7. Volver al ruedo

No hace falta esperar a sentirse completamente preparado. Esa sensación probablemente nunca llegue.

El objetivo es presentarse a la siguiente entrevista con conocimientos mejor organizados, mayor práctica y una interpretación menos catastrófica del error.

## De veredicto a programa de trabajo

Una entrevista técnica no es una medición perfecta. Puede estar mal diseñada, utilizar preguntas irrelevantes o favorecer a quienes entrenaron específicamente ese formato.

Pero incluso una entrevista imperfecta puede servir.

Puede mostrar que falta teoría. Que la práctica se volvió automática. Que una tecnología figura en nuestro vocabulario, pero no en nuestro conocimiento efectivo. Que necesitamos recuperar fundamentos. O que sabemos trabajar, pero todavía no sabemos exponer lo que hacemos.

Nada de eso obliga a concluir: «Soy un impostor».

La conclusión puede ser mucho más concreta:

«Esto no pude explicarlo».  
«Esto no lo sabía».  
«Esto lo entendía peor de lo que pensaba».  
«Este formato me bloqueó».  
«Esto tengo que estudiarlo».

Entonces la mala entrevista deja de ser un veredicto y se convierte en un programa de trabajo.

Estudiar. Reordenar los conocimientos prácticos. Repasar la teoría. Programar. Explicar. Simular.

Y volver al ruedo.

## Referencias y lecturas

- Zahra Traboulsi, [«A taxonomy of technical interviews»](https://zahra.dev/blog/technical-interview-taxonomy/), 29 de julio de 2024.
- Jonathan Fernández y Raul Oliver, Thoughtworks, [«What to expect from a pair programming interview»](https://www.thoughtworks.com/en-us/insights/blog/what-expect-pair-programming-interview), 9 de junio de 2020.
- Farhana, DEV Community, [«What I learned from failing my technical interviews»](https://dev.to/farhanaxmustafa/what-i-learned-from-failing-my-technical-interviews-276a), 17 de diciembre de 2020.
- Stack Overflow, [«What we talk about when we talk about impostor syndrome»](https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/), 11 de septiembre de 2023.

<!-- ARTICLE_END -->
