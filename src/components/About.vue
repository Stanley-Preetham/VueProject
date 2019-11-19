<template>
    <div class="about">
        <h1>Hello {{their_name}}, This is an about page</h1>
        <p>Lorem Ipsum Text</p>

    </div>
</template>

<script>
export default {
    data()
    {
        return {
            their_name:this.$route.params.name
        }
    }
}
</script>