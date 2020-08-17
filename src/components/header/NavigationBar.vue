<template>
  <nav class="header-nav">
    <ul class="header-nav__wrap">
      <li class="header-nav__item">
        <router-link
          tag="a"
          class="header-nav__link"
          :exact="true"
          active-class="header-nav__link--active"
          to="/"
          title="Фильмы"
        >
          Фильмы
        </router-link>
      </li>
      <li class="header-nav__item">
        <router-link
          tag="a"
          class="header-nav__link"
          :exact="true"
          active-class="header-nav__link--active"
          to="/channels"
          title="Телеканалы"
          >Телеканалы
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavigationBar'
};
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
    white-space: nowrap
  &__link
    display: block
    padding: 10px 0
    text-decoration: none
    font-weight: 500
    font-size: 28px
    color: $color-dark-grey
    border-bottom: 2px solid transparent
    &--active
      border-bottom: 2px solid #E5261E
      color: #E5261E
  &__link:active
    border-bottom: 2px solid
    border-bottom-color: inherit
@media (hover: hover)
  .header-nav__link:hover
    border-bottom: 2px solid
    border-bottom-color: inherit
@media (max-width: 480px)
  .header-nav
    &__item
      max-width: 120px
    &__link
      overflow: hidden
      text-overflow: ellipsis
</style>
