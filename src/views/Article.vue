<template>

<div class="article loading" v-if="loading"><h2>Loading...</h2></div>

<div class="article" v-else-if="!articleNotFound">
    <h2>Article</h2>
    <label>Name
        <input type="text" v-model="article.name">
    </label>
    <label>Content
        <textarea name="content" rows="8" cols="80" v-model="article.content"></textarea>
    </label>
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
</div>

<div class="article" v-else>
	<h2>Article not found</h2>
	<router-link to="/dashboard/articles">Back to Articles</router-link>
</div>

</template>

<script>
import { API, graphqlOperation } from 'aws-amplify';
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
            article: {
                name: '',
                content: '',
                featured: false,
                published: false,
                createdAt: null,
                updatedAt: null
            },
			confirmDelete: false
        }
    },
    created() {
        if (this.id != 'new') {
            this.getArticle()
        } else {
			this.loading = false
            this.subscribe()
			this.subscribeToUpdate()
			this.subscribeToDelete()
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
				this.article = article.data.getArticle
	            console.log(article);
			}
        },
        async createArticle() {
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
			const { name, content, featured, published } = this.article;
			if (!name) return;
			await API.graphql({
				query: updateArticle,
				variables: { input: this.article }
			})
		},
		async deleteArticle() {
			const deletedArticle = await API.graphql({
				query: deleteArticle,
				variables: { input: { id: this.id } }
			})
			this.$router.push("/dashboard/articles/")
		},
        subscribe() {
            API.graphql({ query: onCreateArticle })
            .subscribe({
                next: (eventData) => {
                    let article = eventData.value.data.onCreateArticle;
                }
            });
        },
		subscribeToUpdate() {
			API.graphql({ query: onUpdateArticle })
            .subscribe({
                next: (eventData) => {
					console.log(eventData);
                    let article = eventData.value.data.onCreateArticle;
                }
            });
		},
		subscribeToDelete() {
			API.graphql({ query: onDeleteArticle })
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
