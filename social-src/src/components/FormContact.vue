<template>
	<form :action="action" method="POST">
		<input class="dropdown__checkbox" type="checkbox" id="dropdown" :checked="isMini">
		<label class="link--as-button dropdown__label" for="dropdown" @click="handContact">
			<slot></slot>
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
	.email {
		margin: 0;
		padding-left: 0;
	}

	.message {
		padding-left: 0;
	}
</style>