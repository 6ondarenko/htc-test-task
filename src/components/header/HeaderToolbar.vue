<template>
    <div class="header-toolbar">
        <HeaderLogo />
        <HeaderSearchForm />
        <HeaderLogin />
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
</style>
