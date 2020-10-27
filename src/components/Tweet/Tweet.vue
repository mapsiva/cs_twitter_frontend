<template>
  <div class="event">
    <div class="label">
      <img src="https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm" />
    </div>
    <div class="content">
      <div class="summary">
        <router-link :to="`/${tweet.user.username}`">
          {{ tweet.user.name }}
          <small>{{ `@${tweet.user.username}` }}</small>
        </router-link>
        <div class="date">
          {{ tweet.created_at | timeAgo }}
          <small v-if="canDeleteTweet">
            <a @click="deleteTweet(tweet.id)">Delete Tweet</a>
          </small>
        </div>
      </div>
      <router-link :to="`/${tweet.user.username}/status/${tweet.id}`">
        <div class="extra text">
          {{ tweet.tweet }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  components: {},
  props: {
    tweet: {
      type: Object,
      required: true,
    },
    authUser: {
      type: Object,
      required: true,
    },
  },
  computed: {
    canDeleteTweet() {
      return this.tweet.user_id === this.authUser.id;
    },
  },
  methods: {
    deleteTweet(tweetId) {
      const deleteConfirmed = confirm("Are you sure?");

      if (deleteConfirmed) {
        this.$http.delete(`/tweets/destroy/${tweetId}`).then((response) => {
          console.log(response);
          this.$emit("delete", tweetId);
        });
      }
    },
  },
};
</script>