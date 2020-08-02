<template>
    <div class="header-toolbar">
        <HeaderLogo class="header-toolbar__logo" />
        <HeaderSearchForm class="header-toolbar__search-form" />
        <HeaderLogin class="header-toolbar__login" />
    </div>
</template>

<script>
export default {
  name: 'HeaderToolbar'
}
</script>

<style lang="sass">
    .header-toolbar
        display: flex
        align-items: flex-start
        justify-content: space-between

        @media (max-width: 768px)
            .header-toolbar
                display: block
</style>
