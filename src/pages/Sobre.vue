<template>
    <main>

        <section class="container">
            <h1>Sobre</h1>
            <div class="about" v-html="about"></div>
        </section>

</main>
</template>
<script>
import api from '@/services/api.js';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Sobre',
    data() {
        return {
            about: ''
        }
    },
    mounted() {
        api.get('/about.json').then(response => {
            console.log(response.data)
            this.about = response.data.about;
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
</script>

<style scoped>

   main {
        align-items: center;
    }

    .about {
        margin-bottom: 40px;
        color: var(--color-text-dark);
    }
</style>