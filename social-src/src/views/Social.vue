<template>
	<ol class="social">
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-github"></span>Github
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-twitter"></span>Twitter
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-linkedin"></span>Linkedin
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-instagram"></span>Instagram
			</a>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-earth"></span>Web
			</a>
		</li>
		<span class="contact icon-port-bubbles"></span>
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