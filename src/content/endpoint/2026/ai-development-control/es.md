---
id: "ai-development-control"
number: "08"
datePublished: "2026-08-10"
tags: ["AI","Software Development","Code Review","Testing","Software Architecture"]
language: "es"
slug: "desafios-uso-ia-conservar-control"
kicker: "IA y práctica del desarrollador"
cardCopete: "La IA puede producir código más rápido de lo que alcanzamos a comprenderlo. El desafío no es competir con esa velocidad, sino conservar el control sobre las decisiones, las pruebas y el sistema."
title: "Desafíos ante el uso de la IA: conservar el control"
copete: "La IA propone soluciones, escribe código y acelera tareas que antes consumían horas. Pero cuanto más fácil resulta producir una implementación, más importante se vuelve saber qué estamos aceptando, cómo encaja en el sistema y con qué evidencia podemos confiar en ella."
bajada: "La pérdida de control no consiste simplemente en dejar de escribir cada línea a mano. Aparece cuando el código existe antes que nuestra comprensión: incorporamos herramientas que no evaluamos, aceptamos decisiones que no sabemos explicar, delegamos también las pruebas o terminamos construyendo más de lo que el requisito pedía."
disclosure: "Artículo escrito originalmente en español."
---

## Una respuesta que me quedó corta

Hoy me preguntaron, durante una entrevista laboral, qué desafíos encuentro en mi práctica como desarrollador ante el uso de la IA.

Lo primero que pensé fue bastante claro:

**La pérdida de control.**

Pero mientras respondía me di cuenta de que la frase era imprecisa. ¿Qué control estamos perdiendo exactamente?

Después de la entrevista me propuse profundizar un poco en esa pregunta.

El problema no es simplemente que una IA escriba código por nosotros. Los desarrolladores llevamos décadas delegando trabajo en compiladores, frameworks, librerías, ORMs, IDEs, generadores de código y plataformas cloud.

La diferencia es que ahora una herramienta puede proponernos una solución completa —y hacerlo en segundos.

Cuando escribo una porción de código, aun imperfecta, normalmente puedo reconstruir por qué tomé sus decisiones principales. Cuando la IA produce veinte, cincuenta o doscientas líneas casi instantáneamente, esa relación puede invertirse: **el código existe antes de que yo termine de comprenderlo**.

Creo que ahí comienza la verdadera pérdida de control.

## La IA propone; el humano dispone

Una regla sencilla resume buena parte del problema:

**La IA propone, pero el desarrollador dispone.**

Una solución técnicamente válida no necesariamente es la solución correcta para un sistema determinado.

La IA puede sugerir una nueva librería, un framework, un patrón, una base de datos, una capa de caché, una abstracción o un servicio adicional porque resuelve elegantemente el problema que tiene delante.

Pero antes de aceptar la propuesta todavía hay preguntas humanas:

¿Esa herramienta debería estar en este sistema?

¿Ya existe otro mecanismo para resolver el mismo problema?

¿Es compatible con las versiones y restricciones reales del proyecto?

¿El equipo podrá mantenerla?

¿Estamos resolviendo una necesidad o agregando sofisticación?

La documentación de GitHub sobre [revisión de código generado por IA](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) dedica precisamente una parte del proceso a verificar intención, calidad y dependencias. No porque una dependencia propuesta por IA sea necesariamente incorrecta, sino porque una sugerencia plausible no conoce por sí sola toda la historia técnica y organizacional del sistema.

La IA puede proponer herramientas. **No puede hacerse responsable de las consecuencias de incorporarlas.**

## No alcanza con que funcione

La siguiente pregunta ya no puede ser solamente:

**¿Funciona?**

También tiene que ser:

**¿Entiendo por qué funciona?**

Si no puedo explicar qué hace el código generado, por qué se agregó una dependencia, qué responsabilidad tiene una clase, cómo se propaga una excepción, dónde vive el estado o cómo se comunican dos componentes, entonces no controlo realmente ese código.

Simplemente lo tengo.

Esto conecta con algo que ya había explorado en [“Ingeniería aumentada por IA: productividad del desarrollador sin renunciar al criterio”](/es/endpoint/ingenieria-aumentada-por-ia/): generar código es apenas una parte del trabajo de ingeniería. Integrarlo, comprenderlo, revisarlo y responder por sus consecuencias siguen siendo tareas distintas.

Paradójicamente, cuanto más fácil se vuelve escribir software, más importante se vuelve comprenderlo.

## Más que nunca: tests

Y después están los tests.

Más que nunca: **tests**.

Preferentemente tests que comprenda, que diseñe y que, al menos en los puntos críticos, pueda escribir o revisar yo mismo.

Tal vez sean mi último bastión como *picacódigo*.

Hay un riesgo conceptual cuando la misma IA escribe la implementación y luego produce las pruebas que supuestamente deben validarla: ambas pueden compartir el mismo supuesto equivocado. Un test verde no prueba demasiado si la prueba nació de la misma mala interpretación que el código.

Un test no es solamente un mecanismo para ejecutar código y obtener un resultado.

También es una declaración acerca de **qué considero que el sistema debería hacer**.

La IA puede ayudar a encontrar casos límite, producir datos, sugerir tests repetitivos y señalar rutas no cubiertas. Pero el criterio de corrección debe venir de otro lugar: requisitos, reglas de negocio, contratos, comportamiento existente y juicio técnico.

El [Secure Software Development Framework de NIST](https://csrc.nist.gov/pubs/sp/800/218/final) no fue escrito específicamente para asistentes de código, pero resulta una referencia útil porque sitúa la verificación, la revisión y la reducción de vulnerabilidades dentro del proceso de desarrollo, no como una propiedad que pueda darse por supuesta al generar una implementación.

La evidencia empírica también aconseja prudencia. Un estudio de Perry, Srivastava, Kumar y Boneh, publicado en CCS 2023, encontró que en las tareas de seguridad evaluadas los participantes que utilizaron el asistente estudiado escribieron código menos seguro y, al mismo tiempo, tendieron a confiar más en la seguridad del resultado. Es un estudio sobre un modelo y un conjunto de tareas concretos, no una ley universal sobre todos los asistentes actuales, pero muestra por qué la validación independiente importa.

## Conocer el sistema, no sólo el código

La consecuencia que más me interesa es otra: con IA necesitamos interiorizarnos en el sistema **más**, no menos.

Su arquitectura.

Sus componentes.

Sus dependencias.

Sus flujos de datos.

Sus límites.

Sus reglas de negocio.

Cómo se comunican sus servicios.

Dónde vive el estado.

Dónde puede fallar.

Qué supuestos sostienen lo que ya existe.

Cuando una IA puede generar casi instantáneamente una clase, un controller, un endpoint o una migración, saber escribir esas piezas conserva valor, pero deja de ser el centro exclusivo de la tarea.

Saber **dónde pertenecen** pasa a ser todavía más importante.

La unidad de comprensión del desarrollador se desplaza hacia arriba: de la línea de código al sistema.

El informe [DORA 2025 sobre desarrollo de software asistido por IA](https://dora.dev/research/2025/dora-report/) resulta interesante en este punto: describe a la IA principalmente como un amplificador. Equipos y sistemas con buenos fundamentos pueden convertir la aceleración local en mejores resultados; bases débiles pueden ver amplificados sus problemas. La herramienta no reemplaza el sistema de trabajo dentro del cual se la utiliza.

## Cumplir el requisito: ni más ni menos

Finalmente aparece una responsabilidad bastante menos espectacular: comprobar que la solución haga exactamente lo que se pidió.

**Ni más. Ni menos.**

La IA tiene tendencia a ser servicial. A veces, demasiado servicial.

Pedimos un endpoint y puede proponer una abstracción adicional. Pedimos una validación y aparecen un servicio, un DTO, un mapper, una dependencia y una nueva clase de configuración.

Cada agregado puede parecer razonable de manera aislada.

En conjunto, pueden producir complejidad que nadie pidió.

Controlar también significa saber rechazar código que no tiene una razón suficiente para existir.

Los requisitos funcionan entonces como un límite: qué debe hacer el sistema, qué no debe hacer, qué restricciones debe respetar y qué condiciones permiten considerar terminada la tarea.

La solución correcta no es la más impresionante. Es la que satisface los requisitos con la menor complejidad razonable y sigue siendo comprensible, verificable y mantenible.

## Entonces, ¿qué control podemos perder?

Después de pensarlo, mi respuesta a aquella pregunta de entrevista sería hoy un poco más precisa.

La IA no hace inevitable que los desarrolladores perdamos el control.

Hace que perderlo sea **extraordinariamente fácil**.

Podemos producir código más rápido de lo que podemos leerlo. Podemos aceptar una biblioteca antes de investigar si la necesitamos. Podemos delegar una decisión arquitectónica sin advertirlo. Podemos pedir tests para una implementación cuyo comportamiento todavía no definimos con claridad. Podemos confundir cantidad de código con progreso.

El desafío no es competir con la IA para ver quién escribe más rápido.

Es conservar el control sobre las decisiones que rodean aquello que la IA produce:

qué herramientas entran al sistema;

qué arquitectura estamos construyendo;

qué hace realmente el código;

qué evidencia demuestra que funciona;

y si el resultado cumple, sin más y sin menos, con lo que se pidió.

La IA puede acelerar enormemente el desarrollo.

Pero velocidad sin comprensión no es control.

Y cada vez que escribir código se vuelve más barato, **comprender qué estamos construyendo se vuelve más valioso**.

## Referencias y lecturas

- GitHub Docs, [“Review AI-generated code”](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code). Guía práctica para verificar funcionalidad, intención, calidad, dependencias y problemas específicos del código generado por IA.
- DORA, [“State of AI-assisted Software Development 2025”](https://dora.dev/research/2025/dora-report/). Investigación sobre cómo la IA amplifica capacidades y problemas existentes dentro de los sistemas de desarrollo.
- NIST, [“Secure Software Development Framework (SSDF) Version 1.1”](https://csrc.nist.gov/pubs/sp/800/218/final). Marco general de prácticas de desarrollo seguro, verificación y reducción de vulnerabilidades.
- Neil Perry, Megha Srivastava, Deepak Kumar y Dan Boneh, [“Do Users Write More Insecure Code with AI Assistants?”](https://par.nsf.gov/biblio/10472235-do-users-write-more-insecure-code-ai-assistants), CCS 2023. Estudio experimental sobre interacción entre desarrolladores, asistentes de código y seguridad.
- Srivathsan G. Morkonda, Mahmoud Selim y Hala Assal, [“Security of LLM-generated Code: A Comparative Analysis”](https://arxiv.org/abs/2605.23091), 2026. Preprint comparativo reciente sobre vulnerabilidades en código generado por varios LLM.
