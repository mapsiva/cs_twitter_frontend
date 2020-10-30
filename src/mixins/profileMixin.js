

export default {
    created() {
        this.$_profileMixin_fetchUser(this.$route.params.username)
        this.$_profileMixin_fetchAuthenticatedUser()

    },
    methods: {
        $_profileMixin_fetchUser(username) {
            if (username) {
                this.$http.get(`/${username}`).then(response => {
                    this.user = response.data.data
                })
            } else {
                this.$http
                    .get('account/me')
                    .then(response => {
                        this.user = response.data.data
                    })
            }
        },
        $_profileMixin_fetchAuthenticatedUser() {
            this.$http
                .get('account/me')
                .then(response => {
                    this.authUser = response.data.data
                })
        }
    }
}