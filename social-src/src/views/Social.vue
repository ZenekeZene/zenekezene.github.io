<template>
	<ol class="social">
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-bubble"></span>Hey, hola, ¡hablémos!
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-github"></span>Aquí subo mi deuda técnica
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-twitter"></span>Aquí troleo a famosos
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-linkedin"></span>Aquí le doy like a mi jefe
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-instagram"></span>Aquí subo dibujitos
			</a>
		</li>
	</ol>
</template>
<script>
export default {
	name: 'Social'
}
</script>
<style lang="scss">
	.social {
		margin: 0;
		text-align: left;
		list-style: none;

		li {
			a {
				padding: 0.5rem;
			}

			[class^='icon-port'] {
				padding-right: 1rem;
			}
		}
	}
</style>