<template>
    <section>
      <span
        v-if="isExpanded && currentSlide === 1 && isMini"
        class="close icon-port-cross"
        @click="handCloseExpanded"
      ></span>
      <div ref="work" class="work" :style="lightBoxStyle">
        <div v-if="lightBoxItem" v-html="lightBoxItem.content"></div>
      </div>
    </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'LightBox',
    computed: {
        ...mapState(['isExpanded', 'currentSlide', 'isMini']),
        work() {
            return this.$refs.work;
        },
        structure() {
            return this.$parent.$refs.structure.$el;
        }
    },
    data() {
        return {
            lightBoxItem: null,
            lightBoxStyle: {}
        };
    },
    mounted() {
        this.$root.$on('launch:ligth-box', ($event) => this.launchLightBox($event));
    },
    methods: {
        ...mapMutations(['setIsExpanded']),
        launchLightBox($event) {
            const item = $event.item;
            this.lightBoxItem = $event.data;
            const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = item;
            this.lightBoxStyle = {
                top: `calc(${this.structure.offsetHeight +  offsetTop}px + 0.5rem)`,
                left: `calc(${offsetLeft}px + 1.2rem)`,
                width: `${offsetWidth}px`,
                height: `${offsetHeight}px`,
            }
            setTimeout(() => {
                this.work.classList.add('--expanded');
            }, 100);
        },
        handCloseExpanded() {
            this.lightBoxItem = null;
            this.lightBoxStyle = null;
            this.setIsExpanded({ isExpanded: false });
            this.work.classList.remove('--expanded');
        }
    }
}
</script>
<style lang="scss">
.close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 4;
    padding: 1rem;
    color: white;

    &:before {
      position: relative;
      z-index: 1;
    }

    &:after {
      content: '';
      $size: 6rem;
      position: absolute;
      top: -0.5rem;
      right: -0.3rem;
      display: block;
      width: $size;
      height: $size;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, black 100%);
      pointer-events: none;
    }

    @media (min-width: 414px) {
        top: 2.3rem;
        right: 0.7rem;
        
        &:after {
            top: 0.1rem;
            right: 0;
            border-radius: 0 1rem;
        }
    }
}
</style>