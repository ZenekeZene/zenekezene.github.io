<template>
	<ol class="social">
		<li>
			<input class="dropdown__checkbox" type="checkbox" id="dropdown" :checked="isMini">
			<label class="link--as-button dropdown__label" for="dropdown" @click="handContact">
				<span class="icon-port-bubble"></span><p>Escríbeme a<br/><span class="font-bold">hectorvillarm@gmail.com</span></p>
				<span class="icon-port-arrow-left dropdown__arrow"></span>
			</label>
			<div class="dropdown__content" id="dropdown">
				<input type="text" placeholder="Escribe tu email" style="margin: 0; padding-left: 0;">
				<textarea placeholder="Escribe tu mensaje" rows="2" style="padding-left: 0;"></textarea>
				<button>Enviar</button>
			</div>
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
import { mapState, mapMutations } from 'vuex'
import WhatsApp from '../components/WhatsApp.vue';

export default {
	name: 'Social',
	components: {
		WhatsApp
	},
	computed: {
		...mapState(['isMini'])
	},
	methods: {
		...mapMutations(['setIsMini']),
		handContact() {
			setTimeout(() => {
				if (!this.isMini) {
					this.setIsMini({ isMini: true });
				}
				this.$root.$emit('update:swiper');
			}, 100);
		}
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
			transform: rotate(270deg);
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
			transform: rotate(90deg);
		}
	}
</style>