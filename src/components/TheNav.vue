<template>
  <div>
    <div v-if="isMobile">
      <div
        @click="toggleNav()"
        class="ham noselect"
        :class="[isExpanded ? 'expanded' : '']"
      >
        <div class="ham-line"></div>
      </div>
      <transition name="slide">
        <div v-if="isExpanded && isMobile" class="nav radius shadow">
          <div @click="collapse()" v-for="link in links" :key="link.name">
            <router-link :to="link.href">{{ link.name }}</router-link>
          </div>
        </div>
      </transition>
    </div>
    <div v-else class="nav radius">
      <router-link v-for="link in links" :key="link.name" :to="link.href">{{
        link.name
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TheNav extends Vue {
  links: { name: string; href: string }[] = [
    { name: "HOME", href: "/" },
    { name: "AGENTS", href: "/agents" },
    { name: "MAPS", href: "/maps" },
    { name: "WEAPONS", href: "/weapons" },
    { name: "ABOUT", href: "/about" },
  ];

  windowWidth!: number;
  isMobile = false;
  isExpanded = false;

  created(): void {
    window.addEventListener("resize", this.checkWindowWidth);
    this.checkWindowWidth();
  }

  toggleMobile(): void {
    this.isMobile = !this.isMobile;
  }

  toggleNav(): void {
    this.isExpanded = !this.isExpanded;
  }

  mobileOn(): void {
    this.isMobile = true;
  }

  mobileOff(): void {
    this.isMobile = false;
    this.isExpanded = false;
  }

  collapse(): void {
    this.isExpanded = false;
  }

  checkWindowWidth(): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 768) {
      this.mobileOn();
      return;
    }
    this.mobileOff();
    return;
  }
}
</script>

<style scoped>
.ham {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

.ham:hover {
  cursor: pointer;
}

.ham-line,
.ham-line::before,
.ham-line::after {
  height: 0.3rem;
  background: var(--prim-text);
  border-radius: 5px;
  transition: all 0.2s ease;
}

.ham-line::before,
.ham-line::after {
  content: "";
  position: absolute;
  right: 0;
}

.ham-line {
  width: 1.8rem;
  position: relative;
}

.ham-line::before {
  width: 1rem;
  transform: translateY(0.6rem);
}

.ham-line::after {
  width: 1.4rem;
  transform: translateY(-0.6rem);
}

.expanded .ham-line {
  background: transparent;
}

.expanded .ham-line::before {
  width: 1.8rem;
  transform: rotate(45deg);
}

.expanded .ham-line::after {
  width: 1.8rem;
  transform: rotate(-45deg);
}

.nav {
  display: flex;
  flex-direction: column;
  text-align: end;
  position: absolute;
  right: 1rem;
  line-height: 2.5rem;
  margin-top: 0.3rem;
  padding: 1.5rem 2.5rem;
  background: var(--prim-text);
  z-index: 3;
}

.nav a {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--sec-text);
}

.nav a:hover {
  color: var(--secondary);
}

.nav a.router-link-exact-active {
  color: var(--primary);
}

.slide-enter-active {
  transition: all 0.1s ease-in;
}

.slide-leave-active {
  transition: all 0.1s ease-out;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}

@media screen and (min-width: 768px) {
  .nav {
    flex-direction: row;
    text-align: center;
    position: static;
    right: 0;
    margin-top: 0;
    padding: 0;
    background: none;
    border-radius: 0;
  }

  .nav a {
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--sec-text);
  }

  .nav a:not(:last-child) {
    margin-right: 2rem;
  }

  .nav a:hover {
    color: var(--prim-text);
  }

  .nav a.router-link-exact-active {
    color: var(--prim-text);
  }
}
</style>
