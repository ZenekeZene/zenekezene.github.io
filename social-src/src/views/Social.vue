<template>
	<ol class="social">
		<li>
			<FormContact action="https://formsubmit.co/hectorvillarm@gmail.com">
				<span class="icon-port-bubble"></span>
				<p>Escríbeme a<br/><span class="font-bold">hectorvillarm@gmail.com</span></p>
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

	.dropdown {
		&__checkbox {
			display: none;
		}

		&__checkbox:checked + label + &__content {
			height: auto;
		}

		&__checkbox:checked ~ label &__arrow  {
			transform: rotate(90deg);
		}

		&__label {
			display: flex !important;
			flex-wrap: wrap;

			p {
				margin: 0;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			height: 0;
			overflow: hidden;
			padding: 0 2.5rem;
		}

		&__arrow {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0.7rem;
			font-size: 1.5rem;
			transform: rotate(270deg);
			transition: transform 150ms ease-in;
		}
	}
</style>