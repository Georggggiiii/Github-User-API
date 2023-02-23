<template>
 <div class="user-card">
   <div class="form-input">
    <input type="text" placeholder="Search Github Username" v-model="searchRepo" @keyup.enter="search"  />
   </div>
   <div class="flex">
    <div v-if="user" class="user-profile"> 
      <img :src="users.avatar_url" alt="">
      <p class="color-white">{{ users.login }}</p>
      <p class="color-white">{{ users.bio }}</p>
     </div>
     <div class="user-data">
        <div class="follow">
          <p class="color-white">Followers: {{ users.followers }}</p>
          <p class="color-white">Following: {{ users.following }}</p>
        </div>
      <div v-if="repositories" class="data-container">
        <p class="public-repos color-white">Public Repositories:</p>
         <div class="repo-container">
          <div v-for="repo in repositories" :key="repo.id">
            <a :href="repo.html_url" target="blank"><span class="color-white">{{ repo.name }}</span></a>
          </div>
         </div>
      </div>
      <div v-if="repositories.length === 0">
        <p class="color-white">No repositories found</p>
        </div>
     </div> 
   </div>
 </div>
</template>

<script>
 import api from '@/api';

export default {
  props: {
    user: {
      required:true,
    }
  },
  data() {
    return {
      searchRepo: "",
      users: [],
      repositories: [],
    };
  },
  methods: {
    async search() {
      try {
        const response = await api.getUserData(this.searchRepo);
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await api.getUserRepo(this.searchRepo);
        this.repositories = response.data;
      } catch (error) {
        console.error(error);
      }
      this.searchRepo = "";
    },
  }
};

</script>

<style scoped>
.user-card {
  width: 850px;
    min-height: 500px;
    height: 500px;
    background: #2c2f33;
    border-radius: 3.125rem;
    padding: 0 20px;
    margin: 0 auto;
}
.form-input {
border: 3px solid #1fa19d;
border-radius: 50px;
width:70%;
margin:0 auto;
transform:translateY(10px);
}
.form-input input {
  width:100%;
  border-radius: 50px;
  padding:10px 16px;
  outline: none;
  border:none;
}
.flex {
  display:flex;
  margin-top:100px;
  justify-content: space-between;
  width:700px;
  margin-left:50px;
}
.user-profile img {
    height: 200px;
    width: 200px;
    border: 5px solid #1fa19d;
    border-radius: 50%;
    cursor: pointer;
}
.follow {
  display:flex;
  justify-content: space-between;
}
.user-data {
  width:400px;
}
.public-repos {
  margin-top:20px;
}
.color-white {
  color:white
}
.repo-container {
 margin-top:10px;
 display:flex;
 flex-wrap:wrap;
}
.repo-container span {
  line-height: 30px;
    margin-right: 5px;
    color: #fff;
    padding: 4px;
    background: #1fa19d;
    border-radius: 50px;
}
@media screen and (max-width: 768px) {
  .user-card { 
    width:100%;
    min-height:650px;
  }
  .flex {
    display:grid;
    width:70%;
    position:relative;
    bottom:50px;
    right:30px;
  }
  .user-data {
    width:100%;
  }
  .follow {
    width:200px;
  }
}

</style>