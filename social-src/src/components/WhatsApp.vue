<template>
    <a class="link--as-button" :href="apilink">
        <span class="icon-port-whatsapp"></span>
        <slot></slot>
    </a>
</template>
<script>
import platform from '../scripts/isMobile.js';

export default {
    name: 'WhatsApp',
    data() {
        return {
            phone: '+34685735968',
            apilink: '',
            text: ''
        }
    },
    watch: {
        text(val) {
            this.apilink = 'http://';
            this.apilink += platform.isMobile() ? 'api' : 'web';
            this.apilink += '.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURI(this.text);
        }
    },
    created: function() {
        this.apilink = 'http://';
        this.apilink += platform.isMobile() ? 'api' : 'web';
        this.apilink += '.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURI("Hola, Héctor.");
    },
}
</script>