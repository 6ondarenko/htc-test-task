<template>
    <header class="header">
        <HeaderToolbar/>
        <HeaderNavigationBar class="header__nav"/>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass">
    .header
        margin: 0 auto
        width: 1180px
        height: 40px
        margin-top: 32px
        &__nav
            margin-top: 48px
</style>
