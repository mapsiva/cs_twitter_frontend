<template>
  <div class="ui segment">
    <h2 class="ui medium dividing header">Who to follow</h2>
    <i class="refresh link icon" @click="fetchWhoToFollow"></i>

    <div class="ui divided link items">
      <div class="item" v-for="user in usersToFollow" :key="user.id">
        <div class="ui avatar image">
          <img src="https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm" />
        </div>
        <div class="content">
          <router-link class="ui small header" :to="`/${user.username}`">
            {{ user.name }} <small>{{ `@${user.username}` }}</small>
          </router-link>

          <div class="meta">
            <button
              class="ui compact button mini primary"
              @click="followUser(user.id)"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhoToFollow",
  data() {
    return {
      usersToFollow: "",
    };
  },
  created() {
    this.fetchWhoToFollow();
  },
  methods: {
    fetchWhoToFollow() {
      this.$http.get("/users/users_to_follow").then((response) => {
        this.usersToFollow = response.data.data;
      });
    },
    followUser(userId) {
      this.$http.post("/users/follow", { user_id: userId }).then(() => {
        this.usersToFollow = this.usersToFollow.filter((u) => {
          return u.id !== userId;
        });
      });
    },
  },
};
</script>