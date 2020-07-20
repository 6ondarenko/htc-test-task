<template>
    <router-link tag="div" class="header-logo" to="/">
        <div class="header-logo__img">
            <div class="header-logo__triangle"></div>
        </div>
        <div class="header-logo__txt">Видеосервис</div>
    </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style lang="sass" scoped>
    .header-logo
        cursor: pointer
        display: flex
        align-items: center
        justify-content: flex-start
        &__txt
            font-weight: 500
            font-size: 20px
            margin-left: 12px
        &__img
            position: relative
            width: 36px
            height: 36px
            background-color: #E5261E
            border-radius: 50%
        &__triangle
            position: absolute
            top: 3px
            left: 10px
            right: 0
            bottom: 0
            width: 0
            height: 0
            border-top: 15px solid transparent
            border-left: 25px solid #fff
            border-bottom: 15px solid transparent
</style>
