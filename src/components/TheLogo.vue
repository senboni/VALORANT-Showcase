<template>
  <router-link to="/" class="logo-wrapper">
    <img alt="valorant logo" src="../assets/val-logo.png" />
    <div class="showcase">SHOWCASE</div>
  </router-link>
</template>

<style scoped>
.showcase {
  font-size: 2.25rem;
  font-weight: 600;
}

.logo-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--prim-text);
}

.logo-wrapper img {
  height: 1.4em;
  transform: translateY(1px);
  margin-right: 0.25rem;
}
</style>
