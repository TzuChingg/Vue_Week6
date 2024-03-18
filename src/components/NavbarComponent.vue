<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ 'active ': this.$route.name === 'home' }">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link"
              :class="{ 'active': this.$route.name === 'products' }">商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" :class="{ 'active': this.$route.name === 'cart' }">購物車</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style></style>