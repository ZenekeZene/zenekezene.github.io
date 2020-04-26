<template>
	<ol class="experience">
		<li>
			<h4 class="title">Init</h4>
			<p class="role" mb-0>Frontend developer<span>(2017 - Hoy)</span></p>
			<p>Desarrollo de apps híbridas de salud, con Ionic, Angular8, Vue, Nuxt.
				Manager de equipo de UX / Front.
			</p>
		</li>
		<li>
			<h4 class="title">Suggiero</h4>
			<p class="role" mb-0>Frontend / UI<span>(2015 - 2017)</span></p>
			<p>Diseño UX / UI y desarrollo Front de plataformas web enfocadas en apuestas deportivas.
				JS, Gulp, Webpack, SASS.</p>
		</li>
		<li>
			<h4 class="title">Diario de un videojuego</h4>
			<p class="role" mb-0>Game developer<span>(2014 - 2015)</span></p>
			<p>Fundador y redactor principal de Diario de un Videojuego
			(htttp://diariodeunvideojuego.es).
			Sigue todo el proceso de creación de un videojuego 2D para
			Android/IOs, desde los primeros bocetos hasta el producto final.</p>
		</li>
		<li>
			<h4 class="title">Seotec</h4>
			<p class="role" mb-0>Full Stack<span>(2012 - 2014)</span></p>
			<p>Desarrollo Front-End y Back-End, HTML5, CSS3, MySQL, PHP, Yii,
			Javascript, Backbone, JQuery, Illustrator, Photoshop. Desarrollo
			de aplicaciones móviles basados en tecnologías web con Phonegap, JS y HTML5.</p>
		</li>
	</ol>
</template>
<style lang="scss">
.experience {
	list-style: none;

	li {
		position: relative;

		&:first-child h4 {
			margin-top: 1rem;
		}

		&:before {
			content: '';
			position: absolute;
			top: 0.5rem;
			left: 0.363rem;
			display: inline-block;
			width: 1px;
			height: calc(100% + 2.7rem);
			border-left: 1px solid rgba(0, 0, 0, 0.21);
		}

		&:last-child {
			margin-bottom: 3rem;

			&:before {
				display: none;
			}
		}
	}

	.title {
		display: flex;
		align-items: center;
		margin-bottom: 0.2rem;
		text-align: left;

		&:before {
			content: '';
			$size: 6px;
			display: inline-block;
			width: $size;
			height: $size;
			margin-right: 1rem;
			margin-left: 0.2rem;
			background-color: var(--background-color-app);
			border-radius: 50%;
		}
	}

	.role {
		display: flex;
		align-items: baseline;
		padding-right: 1rem;
		padding-left: 1.65rem;

		span {
			margin-left: 0.5rem;
			font-size: 0.937em;
			font-weight: 400;
		}
	}

	.title,
	.role {
		font-weight: 700;
		
		& + p {
			padding-right: 1rem;
			padding-left: 1.7rem;
		}
	}
}
</style>