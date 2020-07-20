<template>
    <div class="header-searchform">
        <div class="header-searchform__input">
            <input type="text" class="input input--single-line" placeholder="Поиск..." />
        </div>
        <button class="header-searchform__btn button button--text">Найти</button>
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
    .button
        border: none
        border-radius: 4px
        cursor: pointer
        outline: none
        padding: 10px 32px
        font-family: Rubik, default sans-serif
        font-weight: 500
        font-size: 16px
        &--text
            border: none
            background: none
    .header-searchform
        &__input
            width: 320px
        &__btn
            color: #E5261E
    .input
        font-family: Rubik, default sans-serif
        box-sizing: border-box
        font-weight: normal
        font-size: 16px
        padding: 6px 0
        &--single-line
            width: 100%
            outline: none
            border: none
            border-bottom: 1px solid #333333
</style>
