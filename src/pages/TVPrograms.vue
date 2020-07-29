<template>
    <div class="page-tv-programs">
        <Header/>
        <NavigationBar class="header__nav"/>
        <div class="page-tv-programs__wrap">
            Телепрограммы
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TVPrograms',
  components: {}
}
</script>

<style lang="sass">
    .page-tv-programs
        margin: 0 auto
        width: 1180px
        &__wrap
            margin-top: 32px
</style>
