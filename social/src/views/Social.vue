<template>
	<ol class="social">
		<li>
			<span class="icon-port-github"></span>
			Github
		</li>
		<li>
			<span class="icon-port-twitter"></span>
			Twitter
		</li>
		<li>
			<span class="icon-port-linkedin"></span>
			Linkedin
		</li>
		<li>
			<span class="icon-port-instagram"></span>
			Instagram
		</li>
		<li>
			<span class="icon-port-earth"></span>
			Web
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

		li {
			padding: 1rem;

			[class^='icon-port'] {
				padding-right: 1rem;
			}
		}
	}
</style>