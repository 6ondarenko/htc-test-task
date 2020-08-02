<template>
    <header class="header">
        <HeaderToolbar/>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass">
    .header
        box-sizing: border-box
        background-color: #fff
        margin: 0 auto
        padding-top: 32px
        width: 1180px
        &__nav
            padding-top: 48px

    @media (max-width: 480px)
        .header
            position: fixed
            z-index: 1
            box-sizing: border-box
            margin: 0
            padding: 14px 10px 10px
            border-bottom: 1px solid #f2f2f2
            top: 0
            right: 0
            left: 0
            width: 100%
</style>
