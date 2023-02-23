<template>
  <div>
    <HeaderComp />
    <UsersComp :user="user"/>
  </div>
</template>

<script>
import HeaderComp from '../components/Header/HeaderComp.vue'
import UsersComp from '../components/UsersComp.vue';

export default {
  data() {
    return {
      user: [],
    }
  },
  components: {
    HeaderComp,
    UsersComp
  },
}
</script>

