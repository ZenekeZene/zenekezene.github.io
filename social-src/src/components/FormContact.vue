<template>
	<form :action="action" method="POST">
		<input class="dropdown__checkbox" type="checkbox" id="dropdown" :checked="isMini">
		<label class="link--as-button dropdown__label" for="dropdown" @click="handContact">
			<span class="icon-port-bubble"></span>
			<p class="hide"><slot></slot></p>
			<span class="show font-bold"><a href="mailto:hectorvillarm@gmail.com?subject=Hola%20H%C3%A9ctor&body=Hola%20H%C3%A9ctor%2C%0D%0A%0D%0A%0D%0A%0D%0A%C2%A1Gracias!" target="_top">hectorvillarm@gmail.com</a></span>
			<span class="icon-port-arrow-left dropdown__arrow"></span>
		</label>
		<div class="dropdown__content" id="dropdown">
			<input type="hidden" name="_subject" value="Nuevo email!">
			<input type="hidden" name="_replyto">
			<input type="hidden" name="_next" value="http://hectorvillar.com/social">
			<input
				name="email"
				type="text"
				placeholder="Escribe tu email"
				class="email"
			>
			<textarea
				name="message"
				placeholder="Escribe tu mensaje"
				rows="2"
				class="message"
			></textarea>
			<button>Enviar</button>
		</div>
	</form>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'FormContact',
	computed: {
		...mapState(['isMini'])
	},
	props: {
		action: {
			type: String,
			default: ''
		}
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
	input[type="text"].email {
		max-width: 22rem;
		margin: 0;
		padding-left: 0;
	}

	textarea.message {
		padding-left: 0;
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

		&__checkbox:checked ~ label .show  {
			visibility: visible;
		}

		&__checkbox:checked ~ label .hide  {
			display: none;
		}

		&__label {
			display: flex !important;
			flex-wrap: wrap;

			p {
				margin: 0;
			}

			.hide {
				display: inline;
			}

			.show {
				visibility: hidden;
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
			top: 0.5rem;
			right: 0.5rem;
			margin: 0;
			padding: 0!important;
			font-size: 1.5rem;
			transform: rotate(270deg);
			transition: transform 150ms ease-in;
		}
	}
</style>