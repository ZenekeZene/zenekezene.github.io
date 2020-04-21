<template>
	<ol class="social">
		<li>
			<FormContact action="https://formsubmit.co/hectorvillarm@gmail.com">
				<span>Email</span>
			</FormContact>
		</li>
		<li>
			<WhatsApp>Whatsapp</WhatsApp>
		</li>
		<li>
			<a href="https://twitter.com/zenekezene" class="link--as-button">
				<span class="icon-port-twitter"></span>Twitter
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/hectorvillarm/" class="link--as-button">
				<span class="icon-port-linkedin"></span>Linkedin
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/zenekezene/" class="link--as-button">
				<span class="icon-port-instagram"></span>Instagram
			</a>
		</li>
	</ol>
</template>
<script>
import WhatsApp from '../components/WhatsApp.vue';
import FormContact from '../components/FormContact.vue';

export default {
	name: 'Social',
	components: {
		WhatsApp,
		FormContact
	}
}
</script>
<style lang="scss">
	.social {
		margin: 0;
		text-align: left;
		list-style: none;

		li {
			label,
			a {
				padding: 0.5rem;
				cursor: pointer;
			}

			[class^='icon-port'] {
				padding-right: 0.8rem;
			}
		}
	}
</style>