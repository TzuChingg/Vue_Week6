<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
  components: {
    NavbarComponent
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <navbar-component></navbar-component>
        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
