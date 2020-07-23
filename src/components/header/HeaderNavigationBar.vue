<template>
    <nav class="header-nav">
        <ul class="header-nav__wrap">
            <li class="header-nav__item">
                <router-link tag="a" class="header-nav__link" :exact="true" active-class="header-nav__link--active" to="/">Фильмы</router-link>
            </li>
            <li class="header-nav__item">
                <router-link tag="a" class="header-nav__link" :exact="true" active-class="header-nav__link--active" to="/tv">Телеканалы</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'HeaderNavigationBar'
}
</script>

<style lang="sass">
    .header-nav
        display: flex
        align-items: flex-start
        justify-content: center
        &__wrap
            display: flex
            margin: 0
            padding: 0
        &__item
            margin: 0 12px
            display: block
            list-style: none
        &__link
            display: block
            padding: 10px 0
            text-decoration: none
            font-weight: 500
            font-size: 28px
            color: $color-dark-grey
            &--active
                border-bottom: 2px solid #E5261E
                color: #E5261E
</style>
