<template>
	<header class="header">
		<p class="header__datetime">{{ time }}</p>
		<p class="header__icons">
			<span class="icon-port-signal"></span>
			<span class="icon-port-wifi"></span>
			<span class="icon-port-battery"></span>
		</p>
	</header>	
</template>
<script>
export default {
	name: 'Header',
	computed: {
		time() {
			const time = new Date();
			return ("0" + time.getHours()).slice(-2)   + ":" + ("0" + time.getMinutes()).slice(-2);
		}
	}
}
</script>
<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2rem 1rem 0.3rem;
		color: white;
		font-size: 0.7rem;

		&__datetime {
			margin: 0;
			padding: 0 0.5rem;
		}

		&__icons {
			margin: 0;

			span {
				padding: 0.2rem;
			}
		}
	}
</style>