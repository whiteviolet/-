<template>
    <div>
        新闻的id：{{this.$route.params.id}}
    </div>
</template>

<script>


    export default {
        name: '',
        created(){
            console.log(this.$route.params.id)
        }


    }
</script>

<style scoped>

</style>
