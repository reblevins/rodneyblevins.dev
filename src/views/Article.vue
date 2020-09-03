<template>

<div class="article" v-if="articleNotFound">
	<h2>Article not found</h2>
	<router-link to="/dashboard/articles">Back to Articles</router-link>
</div>

<div class="main article" v-else>
    <router-link to="/dashboard/articles">Back to Articles</router-link>
    <h2>Article</h2>
    <label>Name
        <input type="text" v-model="article.name">
    </label>
    <label>Content
    </label>
    <div rows="8" cols="80" contenteditable="true" @input="handleInput" v-html="content"></div>
    <label class="checkbox" for="featured">
        <input type="checkbox" v-model="article.featured"> Featured
    </label>
    <label class="checkbox" for="published">
        <input type="checkbox" v-model="article.published"> Published
    </label>
	<div class="controls">
		<button class="primary" @click="createArticle" v-if="this.id == 'new'">Create Article</button>
	    <button class="primary" @click="updateArticle" v-else>Save Article</button>
		<button class="danger" @click="confirmDelete = true" v-if="id != 'new' && !confirmDelete">Delete Article</button>
		<template v-else-if="id != 'new'">
			<button class="cancel" @click="confirmDelete = false">Cancel</button>
			<button class="danger" @click="deleteArticle">Confirm</button>
		</template>
	</div>
    <loading v-if="loading"></loading>
</div>

</template>

<script>
import { API } from 'aws-amplify';
import { getArticle } from '../graphql/queries';
import { createArticle, updateArticle, deleteArticle } from '../graphql/mutations';
import { onCreateArticle, onUpdateArticle, onDeleteArticle } from '../graphql/subscriptions';

export default {
    name: "Article",
    props: [ 'id' ],
    data() {
        return {
			loading: true,
			articleNotFound: false,
            content: '',
            article: {
                name: '',
                content: '',
                featured: false,
                published: false,
                createdAt: null,
                updatedAt: null
            },
			confirmDelete: false,
            createSubscription: null,
            deleteSubscription: null,
            updateSubscription: null,
        }
    },
    created() {
        if (this.id != 'new') {
            this.getArticle()
        } else {
			this.loading = false
            this.subscribeToCreate()
        }
        this.subscribeToUpdate()
        this.subscribeToDelete()
    },
    beforeDestroy() {
        if (this.createSubscription)
            this.createSubscription.unsubscribe()
        if (this.deleteSubscription)
            this.deleteSubscription.unsubscribe()
        if (this.updateSubscription)
            this.updateSubscription.unsubscribe()
    },
    watch: {
        id(newVal, oldVal) {
            if (newVal != oldVal) this.getArticle()
        }
    },
    methods: {
        async getArticle() {
			let id = this.id
            const article = await API.graphql({
				query: getArticle,
				variables: { id: id }
			})
			this.loading = false
			if (!article.data.getArticle) {
				this.articleNotFound = true
			} else {
                this.articleNotFound = false
				this.article = article.data.getArticle
                this.content = this.article.content
			}
        },
        async createArticle() {
            this.loading = true
            const { name, content, featured, published } = this.article;
            if (!name) return;
            const article = { name, content, featured, published };
            await API.graphql({
                query: createArticle,
                variables: {input: article},
            });
            this.article = {
                name: '',
                content: '',
                featured: false,
                published: false
            }
			this.$router.push("/dashboard/articles/" + article.id)
        },
		async updateArticle() {
            this.loading = true
			const { name, content, featured, published } = this.article;
			if (!name) return;
			await API.graphql({
				query: updateArticle,
				variables: { input: this.article }
			})
		},
		async deleteArticle() {
            this.loading = true
			const deletedArticle = await API.graphql({
				query: deleteArticle,
				variables: { input: { id: this.id } }
			})
			// this.$router.push("/dashboard/articles/")
		},
        handleInput(event) {
            console.log(event);
            this.article.content = event.target.innerHTML
        },
        subscribeToCreate() {
            this.createSubscription = API.graphql({ query: onCreateArticle })
            .subscribe({
                next: (eventData) => {
                    let article = eventData.value.data.onCreateArticle;
                    this.$router.push("/dashboard/articles/" + article.id)
                }
            });
            this.loading = false
        },
		subscribeToUpdate() {
			this.updateSubscription = API.graphql({ query: onUpdateArticle })
            .subscribe({
                next: (eventData) => {
					console.log(eventData);
                    this.loading = false
                    // let article = eventData.value.data.onCreateArticle;
                }
            });
		},
		subscribeToDelete() {
			this.deleteSubscription = API.graphql({ query: onDeleteArticle })
            .subscribe({
                next: (eventData) => {
					console.log(eventData);
					this.$router.push("/dashboard/articles/")
                    // let article = eventData.value.data.onCreateArticle;
                }
            });
		}
    }
}
</script>

<style>

</style>
