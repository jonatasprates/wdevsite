<template>
    <main>
        <div class="text-top">
            Vídeos novos toda <strong>quinta</strong> às <strong>20h</strong>
        </div>

        <a href="https://youtube.com.br/wdevoficial" target="_blank">
            <img id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Inscreva-se">
        </a>

        <div class="text-bottom">
            youtube.com.br/wdevoficial 
        </div>
    </main>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home'
}
</script>

<style scoped>

main {
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}

.text-top {
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 20px;
}

.text-bottom {
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px;
}

#subscribe {
    width: 340px;
}

@media (min-width:700px){
    #subscribe {
        width: 370px;
    }
}

</style>