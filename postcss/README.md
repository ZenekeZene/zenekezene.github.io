# POSTCSS
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/1200px-PostCSS_Logo.svg.png" width="50%">



## Qué es
¿Es un PRE-procesador?<!-- .element: class="fragment" -->

¿Es un POST-procesador?<!-- .element: class="fragment" -->

¡NO! Es un PROCESADOR</strong><!-- .element: class="fragment" -->


Transforma CSS con JS

Note: Andrey Sitnik, creador de Autoprefixer. Es un paquete Node creado para transformar CSS con JS (con plugins), logrando asi tiempos de buildeo mucho más rápidos que otros procesadores. Nace de la idea de agilizar al ser humano


### No hay competición
<div class="tweet" data-src="https://twitter.com/sitnikcode/status/1064508615317426178"></div>
Note: No existe la pregunta ¿SASS o PostCSS? porque son herramientas diferentes. SASS es sugar syntax para escupir CSS, PostCSS es un framework para hacer CSS tools (entre ellas, sugar syntax), la mayoría no se pueden hacer con un prepro (Autoprefixer, Stylelint, cssnano, postcss-normalize, etc). Puedes usar cualquiera de las 2, o sólo una de ella, o una combinación de ambas. PostCSS no vino a suplir a SASS.


### Antes de PostCSS
![](https://cdn-images-1.medium.com/max/800/1*6z4eb7BD8ZZ56qqHyZIO1Q.jpeg)
Note: Hasta hace poco creiamos que Pre-procesar era aquella herramienta o lenguaje NO CSS que nos daba esas cosas que CSS no podia hacer, y despues convertiamos a CSS. Lo que haciamos despues con el CSS (añadir vendor prefixes, REM to PX, etc) era Postprocesar (coger ese CSS resultante del pre y aplicarle optimizaciones y automatizaciones).


### Con PostCSS
![](https://cdn-images-1.medium.com/max/800/1*PTGZBLZ2KtdpMgDRU-JzZQ.jpeg)
Note: Llega PostCSS, podemos hacer un montón de cosas del lado derecho, PERO, tambien del izquierdo (variables, nesting, mixins, imports, etc). Preprocesamos y postprocesamos. ¿Tiene sentido seguir llamandolo Post-procesar?


<div class="tweet" data-src="https://twitter.com/HugoGiraudel/status/623417681660788736"></div>


Authoring & Optimization
- Authoring: Ayuda a escribir mejor código (Sugar Syntax)
- Optimization: Autoprefixer, REMtoPX, minifications, imports.

Ambos existen en pre's y en post's
![](https://cdn-images-1.medium.com/max/800/1*ZMX0_2_gQ0hyPy0J_0X9BA.jpeg)
Note: Ambos términos existen en SASS como en PostCSS. Este no sólo post-procesa. Y SASS no sólo preprocesa. (Optimisation y Authoring ambos)


![](https://cdn-images-1.medium.com/max/800/1*v-BSZh85N3kHdo2tbTHMug.jpeg)


<div class="tweet" data-src="https://twitter.com/PostCSS/status/626046993006239744"></div>


<div class="tweet" data-src="https://twitter.com/MoOx/status/623466638680178688"></div>



## Ventajas


### Authoring y Optimization


### Velocidad de procesamiento
```markup
PostCSS 5.0.11: 40 ms
PostCSS 5.0.10: 60ms    (1.5 times slower)
Rework:         75 ms   (1.9 times slower)
libsass:        76 ms   (1.9 times slower)
Less:           147 ms  (3.7 times slower)
Stylus:         166 ms  (4.1 times slower)
Stylecow:       258 ms  (6.4 times slower)
Ruby Sass:      1042 ms (26.0 times slower)
```


### Es SASS friendly


### Es modular, ligero
Usa lo que necesites

(con SASS compras el paquete completo)


### Bootstrap 5
(Se escribirá en POSTCSS)
Note: las librerias de CSS no estan atadas a un unico procesador. También estamos empezando a ver completas librerias construidas con PostCSS, que en el pasado podrían haberse escrito con Stylus, Sass o Less.

Por ejemplo, Cory Simmons originalmente mantenía dos versiones (Sass y Stylus) de su Lost grid system para que los usuarios de ambos sistemas puedan aprovecharlo. Posteriormente ha migrado su proyecto a PostCSS, lo que significa que cualquier puede usar Lost, incluyendo los usuarios de SASS y Stylus, pero también los de Less, incluso personas que no trabajan con ningún preprocesador.
- Sintaxis del futuro (no exactamente)
- Plugins (y propios)



## Desventajas


### Su potencial es peligroso
Note: Por ejemplo, con el plugin postcss-definde-property, podemos crear customs properties,
los cuales pueden ser confusos cuando heredan nuestro código. SASS es cambio, añade azúcar sintáctico con su @include.
SASS es conservador, monolítico, pero ahi esta su fuerte. Su arquitectura esta pensada para NO SER CSS, no pretende serlo, y establece un lenguaje común para todos los devs, con sintaxis clara. PostCSS no, es CSS-like, puedes hacer casi cualquier cosa (y que se parezca mucho a CSS), y eso a veces es peligroso. P.e: Distinguir entre CSS Standar y lo que no a veces es muy jodido.


<div class="tweet" data-src="https://twitter.com/chriseppstein/status/618515591582724096"></div>


### La modularidad

Note: Uno de sus puntos fuertes tambien es su punto flaco. Basar tu arquitectura en plugins puede
overbloatear tu sistema. Algunos plugins pueden ser de calidad y otros no, otros estar deprecated cuando CSS haga nativamente ciertas cosas (e iremos soltando los plugins uno a uno), incompatibilidad entre plugins, etc.



## Qué hace


Todo lo que ya hace SASS

Mixins, variables, nesting, extends, partials...

+


![Autoprefixer](https://postcss.org/_/web_modules/InANutshell/autoprefixer.svg)
![Autoprefixer demo](http://zenekezene.github.io/Publish/speech_capturas/autoprefixer.png)


![env-preset](https://postcss.org/_/web_modules/InANutshell/cssdb.svg)
![env-preset demo](http://zenekezene.github.io/Publish/speech_capturas/preset-env.png)


![CSS modules](https://postcss.org/_/web_modules/InANutshell/css-modules.svg)
![css-modules demo](http://zenekezene.github.io/Publish/speech_capturas/css-modules.png)


![stylelint](https://postcss.org/_/web_modules/InANutshell/stylelint.svg)
![stylelint demo](http://zenekezene.github.io/Publish/speech_capturas/stylelint.png)


![CSS Next](https://keithjgrant.com/talks/css-from-the-future/images/cssnext.png)

- [Normalizar](https://github.com/csstools/postcss-normalize)
- [Parciales](https://github.com/jonathantneal/postcss-partial-import)
- [Minificar](https://github.com/leodido/postcss-clean)
- [Inmutable CSS](https://github.com/johno/immutable-css)
- [Fallbacks](https://github.com/cuth/postcss-pxtorem)
- [Organiza MediaQueries](https://github.com/hail2u/node-css-mqpacker)
- [Position shortcut](https://github.com/seaneking/postcss-position)
- [Documentación](https://github.com/jonathantneal/mdcss)
- [Estadísticas](https://github.com/cssstats/postcss-cssstats)
- [Etc](https://www.postcss.parts)


### Y lo que a ti se te ocurra



## Cómo usarlo


- Webpack
- CSS-in-JS (Astroturf)
- npm run / CLI
- Browser (Browserify, Codepen)
- Editors & IDE integration
- Runners (Gulp, Grunt)


![Github](https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2107379463%2Ficons%2Fon_color_large.png%3Fversion%3D0?ixlib=rails-2.1.3&w=240&h=240&auto=compress&s=07c1117d9e046c1a26150728429d62db)

```bash
git clone https://github.com/ZenekeZene/testing-postcss.git
```

```bash
npm i
```

```bash
gulp
```

[Repo](https://github.com/ZenekeZene/testing-postcss.git)



## El presente


![](https://cdn.evilmartians.com/front/posts/five-years-of-postcss-state-of-the-union/postcss_downloads-a4e7df2.png)
Note: Nació hace 5 años como una herramienta para crear más herramientas CSS. Hoy en día según [npm trends](https://www.npmtrends.com/postcss-vs-webpack-vs-babel-core-vs-node-sass-vs-less) es uno de los frameworks Frontend más populares, con casi 14.000.000 de descargas en el último mes.



## Links
[PostCSS](https://postcss.org)
[Comunidad plugins](https://www.postcss.parts)
[Deconfusing Pre- and Post-processing](https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3)
[5 años de PostCSS](https://evilmartians.com/chronicles/five-years-of-postcss-state-of-the-union?ref=webdesignernews.com)
[Alternativas a PostCSS](https://www.slant.co/options/767/alternatives/~postcss-alternatives)
[CSS inmutable](https://github.com/johno/immutable-css)
[JustEAT review PostCSS](https://ashleynolan.co.uk/blog/postcss-a-review)



![](https://cdn.evilmartians.com/front/posts/five-years-of-postcss-state-of-the-union/suffer-1005089.png)