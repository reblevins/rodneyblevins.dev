<template>

<section class="articles">
    <ul class="articles-list">
        <router-link class="link" tag="li" :to="'/dashboard/articles/' + article.id" v-for="(article, index) in articles" :key="'article-list-item-' + index" v-if="articles.length > 0">{{ article.name }}</router-link>
		<li v-else>No articles</li>
        <router-link class="link" tag="li" to="/dashboard/articles/new">New Article</router-link>
    </ul>
</section>

</template>

<script>
import { API } from 'aws-amplify';
import { listArticles } from '../graphql/queries';

export default {
    name: 'Articles',
    data() {
        return {
            articles: []
        }
    },
    async created() {
        this.getArticles();
        // this.subscribe();
    },
    methods: {
        async getArticles() {
            const articles = await API.graphql({
                query: listArticles
            });
            console.log(articles);
            this.articles = articles.data.listArticles.items;
        },
    }
}
</script>

<style>

</style>
