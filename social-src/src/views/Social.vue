<template>
	<ol class="social">
		<li>
			<input class="dropdown__checkbox" type="checkbox" id="dropdown" :checked="isMini">
			<label class="link--as-button" for="dropdown" @click="handContact">
				<span class="icon-port-bubble"></span>Mándame un email a <span class="font-bold"><a href="mailto:hectorvillarm@gmail.com" target="_top">hectorvillarm@gmail.com</a></span>
				<span class="icon-port-arrow-left dropdown__arrow"></span>
			</label>
			<div class="dropdown__content" id="dropdown">
				<input type="text" placeholder="Escribe tu email">
				<textarea placeholder="Escribe tu mensaje" rows="2"></textarea>
				<button>Enviar</button>
			</div>
		</li>
		<li>
			<a href="#" class="link--as-button">
				<span class="icon-port-whatsapp"></span>Puedes envíarme un Whatsapp
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
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'Social',
	computed: {
		...mapState(['isMini'])
	},
	methods: {
		...mapMutations(['setIsMini']),
		handContact() {
			if (!this.isMini) {
				setTimeout(() => {
					this.$root.$emit('update:swiper');
					this.setIsMini({ isMini: true });
				}, 100);
			}
		}
	},
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
				padding-right: 1rem;
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

		&__content {
			display: flex;
			flex-direction: column;
			height: 0;
			overflow: hidden;
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