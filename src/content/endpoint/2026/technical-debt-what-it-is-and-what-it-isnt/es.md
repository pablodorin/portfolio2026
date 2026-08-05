---
id: "technical-debt-what-it-is-and-what-it-isnt"
number: "06"
datePublished: "2026-08-05"
tags: ["Software Engineering","Technical Debt","Maintainability","Architecture","AI-Augmented Development"]
language: "es"
slug: "deuda-tecnica-que-es-y-que-no-es"
kicker: "Ingeniería de software y mantenibilidad"
cardCopete: "La deuda técnica suele usarse como sinónimo de código antiguo, imperfecto o desagradable. Esa imprecisión vuelve el concepto menos útil precisamente cuando los equipos más lo necesitan."
title: "Deuda técnica: qué es y qué no es"
copete: "La deuda técnica no es cada error, dependencia obsoleta o implementación poco elegante. Existe cuando una condición técnica hace que el trabajo futuro resulte más costoso de lo que debería, mientras se posterga una forma creíble de reducir ese costo."
bajada: "La metáfora de la deuda puede ayudar a los equipos a decidir cuándo la velocidad justifica un costo futuro, cuándo una refactorización devolverá su inversión y qué problemas pueden permanecer sin cambios. Usada sin cuidado, sin embargo, se convierte en un juicio moral sobre el código. Este artículo separa la deuda de la imperfección ordinaria y analiza por qué el código generado por IA vuelve esa distinción cada vez más importante."
disclosure: "Artículo escrito originalmente en inglés. Las versiones en español y francés fueron traducidas con asistencia de IA y están pendientes de la revisión lingüística final del autor."
---

## Una metáfora útil que se convirtió en una acusación vaga

Pocas expresiones del desarrollo de software se usan con tanta frecuencia y se definen con tanta imprecisión como la *deuda técnica*.

Un módulo difícil recibe el nombre de deuda. Una aplicación antigua recibe el nombre de deuda. La falta de documentación, un defecto, una biblioteca desactualizada y un diseño que no le agrada a un nuevo arquitecto pueden recibir la misma etiqueta. Con el tiempo, deuda técnica pasa a significar poco más que “algo técnico que preferiríamos cambiar”.

Eso no es lo que volvió útil a la metáfora.

Ward Cunningham introdujo la analogía de la deuda al describir el desarrollo incremental del sistema WyCash en 1992. Su argumento no era que toda implementación imperfecta representara un fracaso profesional. El código inicial podía ayudar a un equipo a aprender y entregar antes. El peligro aparecía cuando esa primera comprensión nunca se consolidaba y cada cambio posterior debía adaptarse a ella.

La comparación financiera ofreció a los equipos una forma de hablar sobre el tiempo. Una solución puede aportar valor ahora y crear un costo posterior. Ese costo puede ser aceptable, del mismo modo que endeudarse puede ser razonable, pero no desaparece porque la decisión original haya estado justificada.

Por lo tanto, deuda técnica no es sinónimo de mal código. Es una manera de describir la relación entre una condición técnica, su beneficio a corto plazo y su costo futuro continuo.

## Principal, interés y riesgo

La metáfora se vuelve más clara cuando se separan sus tres componentes.

El **principal** es el trabajo necesario para eliminar o reducir de manera sustancial la deuda. Puede implicar rediseñar un módulo, reemplazar una integración temporal, consolidar lógica duplicada, agregar un límite de pruebas ausente o migrar desde una dependencia restrictiva.

El **interés** es el costo adicional que se paga mientras la condición permanece. Cada funcionalidad lleva más tiempo. Cada corrección debe repetirse en varios lugares. Los desarrolladores necesitan más tiempo para comprender el flujo. Las pruebas se vuelven más difíciles, los despliegues requieren mayor cautela y el conocimiento se concentra en las pocas personas que saben dónde están las trampas.

El **riesgo** es la parte incierta del costo. La solución provisoria puede sobrevivir silenciosamente o fallar durante el lanzamiento más importante del año. Una arquitectura fuertemente acoplada puede permanecer estable hasta que una nueva regulación exija modificar un componente de manera independiente. Los problemas de seguridad, confiabilidad y operación suelen volver irregular al interés: pequeño durante meses y repentinamente enorme.

Imaginemos que un servicio de procesamiento de pedidos necesita una nueva regla de validación. La solución más rápida consiste en copiar la regla en tres endpoints. Funciona, la versión se publica y el negocio recibe valor. Seis meses después, la regla cambia. El equipo debe encontrar las tres copias, actualizarlas de forma coherente y probar cada recorrido. Ese esfuerzo repetido es interés. Consolidar la regla detrás de una política explícita, con las pruebas correspondientes, es el pago del principal.

Si ningún cambio futuro vuelve a tocar esos endpoints, la deuda puede producir muy poco interés. Por eso la deuda técnica no puede medirse solamente observando el código. Su costo depende del futuro del producto.

## Lo que la deuda técnica no es

La manera más sencilla de preservar el significado de deuda técnica es identificar qué cosas no califican automáticamente.

**Código antiguo o legacy**

La antigüedad no crea deuda por sí sola. Un componente de veinte años que cumple una función estable, cambia rara vez y no genera una carga operativa puede tener pocas razones económicas para ser reescrito. Un servicio de seis semanas que demora cada despliegue ya puede cargar una deuda considerable.

*Legacy* describe una herencia: software recibido de un período, equipo o contexto tecnológico anterior. Puede contener deuda, pero ambos conceptos no son equivalentes.

**Un bug**

Un bug es un comportamiento incorrecto observable. La deuda técnica es una condición que aumenta el costo o el riesgo de mantener y evolucionar el sistema. La deuda puede causar defectos y una corrección apresurada puede crear deuda, pero el defecto y la deuda no son el mismo objeto.

Corregir un cálculo impositivo equivocado elimina un bug. Rediseñar la lógica impositiva duplicada que produce reiteradamente cálculos inconsistentes puede pagar deuda.

**Código complicado**

Algunos dominios son realmente complicados. Las reglas bancarias, los productos de seguros, las redes logísticas y los sistemas de identidad contienen distinciones que una sintaxis elegante no puede eliminar. La complejidad que pertenece al problema no es automáticamente deuda.

La pregunta relevante es si la implementación introduce una dificultad *evitable* que excede la complejidad del dominio. Simplificar código eliminando distinciones necesarias del negocio puede reducir su complejidad aparente y, al mismo tiempo, volver el software menos correcto.

**Funcionalidad faltante**

Una funcionalidad que todavía no se construyó pertenece principalmente al backlog del producto. Se convierte en una cuestión de deuda técnica solamente cuando una decisión técnica existente vuelve innecesariamente difícil esa funcionalidad futura o cuando un trabajo de ingeniería omitido deliberadamente crea costos continuos de mantenimiento.

**Código que a alguien no le gusta**

Las preferencias de estilo, los patrones poco familiares y el desacuerdo arquitectónico no son suficientes. Un equipo debería poder explicar el costo futuro, el interés probable y el pago posible. Sin esa explicación, “deuda técnica” puede convertirse en un arma retórica utilizada para dar a un gusto personal la apariencia de una necesidad económica.

## La deuda no requiere negligencia

La deuda técnica suele discutirse como evidencia de que alguien trabajó sin cuidado. Esa interpretación es demasiado simple.

Un equipo puede aceptar deuda conscientemente para cumplir un plazo regulatorio, probar un mercado, restaurar un servicio crítico o aprender qué necesitan realmente los clientes. Construir un adaptador temporal puede ser más responsable que demorar un lanzamiento completo mientras se diseña una integración permanente para requisitos que podrían cambiar el mes siguiente.

La deuda también puede ser involuntaria. Los ingenieros pueden comprender inicialmente de manera incorrecta el dominio y descubrir un modelo mejor solamente después de que el software haya sido utilizado. El cuadrante de deuda técnica de Martin Fowler distingue la deuda deliberada de la involuntaria y las decisiones prudentes de las imprudentes. La distinción importa porque no toda deuda tiene el mismo origen, pero incluso la deuda prudente puede acumular interés.

Parte de la deuda también surge del cambio. Un diseño que coincidía con la organización y la carga de trabajo cinco años atrás puede volverse restrictivo después de adquisiciones, nuevas regulaciones o un aumento de cien veces en el tráfico. La decisión original no necesita haber sido incorrecta para que el sistema actual imponga un nuevo costo.

La pregunta correcta no es “¿Quién creó este mal código?”. Es “¿Qué costo impone hoy esta condición, qué cambios futuros son probables y qué deberíamos hacer al respecto?”.

## La deuda técnica es una decisión económica

No toda deuda debería pagarse inmediatamente.

Supongamos que un módulo requiere dos semanas de refactorización, pero el producto será retirado en tres meses y no se esperan cambios importantes. El pago puede ser técnicamente satisfactorio y económicamente irracional. Por el contrario, un componente problemático que recibirá diez funcionalidades nuevas puede justificar una refactorización antes de comenzar la siguiente.

Una evaluación útil comienza con cinco preguntas:

1. ¿Qué trabajo futuro vuelve más lento, riesgoso o costoso esta condición?

2. ¿Con qué frecuencia es probable que ocurra ese trabajo?

3. ¿Cuál es el interés esperado si nada cambia?

4. ¿Cuánto costaría reducir o eliminar la condición?

5. ¿Qué riesgo de producto, operativo o empresarial existe mientras esperamos?

Estas preguntas convierten una acusación en una decisión. También muestran por qué contar *code smells* no equivale a medir deuda. El análisis estático puede identificar duplicación, acoplamiento, complejidad o faltas de pruebas, pero no puede saber por sí solo qué partes del sistema necesitará modificar el negocio.

La deuda debe priorizarse por interés y riesgo, no por fealdad.

## La IA abarata la producción, no elimina el mantenimiento

La IA generativa cambia la economía de la creación de software. Un desarrollador puede solicitar un endpoint, una migración, una suite de pruebas o una integración y recibir una implementación plausible en segundos. Eso puede producir valor real, pero también puede separar el costo de escribir código del costo de hacerse responsable de él.

Un modelo de IA puede generar otra abstracción en lugar de encontrar la existente. Puede reproducir lógica de negocio en un servicio nuevo, incorporar una dependencia para un problema pequeño, crear pruebas que confirman sus propias suposiciones o implementar un cambio coherente de manera local que entra en conflicto con la arquitectura del sistema completo. Cada resultado individual puede parecer razonable. El sistema acumulado puede volverse más difícil de comprender.

El problema no es que el código generado por IA sea automáticamente deuda. El código escrito por personas tampoco es automáticamente sólido. La deuda aparece cuando el código generado crea costos futuros evitables y se acepta más rápido de lo que el equipo puede comprenderlo, integrarlo y validarlo.

Esto produce un nuevo desequilibrio: la generación de código se acelera, mientras la revisión, la comprensión arquitectónica y la responsabilidad siguen siendo limitadas. Si los equipos miden la productividad por la cantidad de código producido o de tickets cerrados, pueden interpretar la creación de interés futuro como eficiencia presente.

La IA también puede ayudar a pagar deuda. Puede mapear dependencias, explicar módulos desconocidos, proponer refactorizaciones focalizadas, generar pruebas de caracterización y comparar implementaciones repetidas. Pero no puede determinar de manera independiente qué deuda importa más. Esa decisión depende de los cambios esperados en el producto, el conocimiento de la organización, la tolerancia al riesgo y el costo de equivocarse.

El recurso escaso ya no es la capacidad de producir una implementación posible. Es la capacidad de decidir si esa implementación merece convertirse en parte del sistema.

## Gestionar la deuda sin perseguir la perfección

Una base de código saludable no es una base de código sin deuda. Es aquella en la que la deuda importante es visible, su interés se comprende y su pago compite honestamente con otros trabajos.

Cuando la deuda se acepta de manera deliberada, el equipo debería registrar algo más que una promesa vaga de “limpiarlo después”. Debería identificar el atajo, la razón por la que se tomó, el límite al que afecta y el evento que debería iniciar una reconsideración. Ese disparador puede ser un nuevo cliente, un umbral de tráfico, una segunda implementación de la misma regla o el próximo cambio planificado en el componente.

El pago no siempre requiere una reescritura. Puede significar agregar un punto de prueba antes de cambiar un módulo, consolidar una regla duplicada, aislar una dependencia externa o documentar una decisión que, de otro modo, existe solamente en la memoria de una persona. Los pagos pequeños pueden reducir el interés sin crear el riesgo de una gran transformación.

El objetivo no es la pureza técnica. El software existe para sostener un propósito y los recursos de ingeniería son finitos. El objetivo es evitar que la velocidad de corto plazo se convierta en un impuesto permanente que nadie eligió y nadie puede explicar.

## La deuda no es una categoría moral

La deuda técnica no es prueba de incompetencia. No es cada imperfección de un sistema y no es un argumento para que la refactorización siempre tenga prioridad sobre la entrega.

Es una relación temporal y económica: una condición técnica fue creada o conservada bajo restricciones anteriores o con una comprensión limitada, mientras su existencia continuada ahora crea un costo futuro evitable. El principal es el trabajo necesario para cambiarla. El interés es el esfuerzo adicional que se paga mientras permanece. El riesgo es lo que puede suceder antes del pago.

Utilizada con precisión, la metáfora ayuda a desarrolladores, gerentes y partes interesadas del negocio a discutir compromisos en un lenguaje común. Utilizada sin cuidado, simplemente cambia el nombre de todo aquello que no les gusta a los ingenieros.

El objetivo no es eliminar toda la deuda. Es saber qué se pidió prestado, comprender cuánto está costando y decidir deliberadamente si conviene pagarlo, continuar manteniéndolo o eliminar la parte del sistema que vuelve relevante esa deuda.

## Referencias

- Ward Cunningham, [“The WyCash Portfolio Management System”](https://c2.com/doc/oopsla92.html), OOPSLA 1992. El artículo original en el que Cunningham introdujo la metáfora de la deuda en el contexto del desarrollo incremental y la consolidación.

- Martin Fowler, [“Technical Debt”](https://martinfowler.com/bliki/TechnicalDebt.html), 2019. Una explicación práctica del principal, el interés y la decisión económica de eliminar deficiencias internas.

- Martin Fowler, [“Technical Debt Quadrant”](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), 2009. Una clasificación de la deuda deliberada e involuntaria, prudente e imprudente.
