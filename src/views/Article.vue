<template>

<div class="article">
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
    <button @click="createArticle">Create Article</button>
</div>

</template>

<script>
import { API } from 'aws-amplify';
import { getArticle } from '../graphql/queries';
import { createArticle } from '../graphql/mutations';
import { onCreateArticle } from '../graphql/subscriptions';

export default {
    name: "Article",
    props: [ 'id' ],
    data() {
        return {
            article: {
                name: '',
                content: '',
                featured: false,
                published: false,
                createdAt: null,
                updatedAt: null
            }
        }
    },
    created() {
        if (this.id != 'new') {
            this.getArticle()
        } else {
            this.subscribe()
        }
    },
    methods: {
        async getArticle() {
            const article = await API.graphql({
                
            })
            console.log(article);
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
        },
        subscribe() {
            API.graphql({ query: onCreateArticle })
            .subscribe({
                next: (eventData) => {
                    let article = eventData.value.data.onCreateArticle;
                    this.$router.push("/dashboard/articles/" + article.id)
                }
            });
        }
    }
}
</script>

<style>

</style>
