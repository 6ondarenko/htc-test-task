<template>
    <div class="header-searchform">
        <div class="header-searchform__input">
            <TextField single-line placeholder="Поиск..."/>
        </div>
        <Button
            class="button--accent-flat"
            text
        >Найти</Button>
    </div>
</template>

<script>
export default {
  name: 'HeaderSearchform'
}
</script>

<style lang="sass">
    .header-searchform
        display: flex
        align-items: center
        justify-content: flex-start
    .header-searchform
        &__input
            width: 320px
</style>
