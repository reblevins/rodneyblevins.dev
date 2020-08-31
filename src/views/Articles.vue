<template>

<div class="articles">
    <ul class="articles" v-if="articles.length > 0">
        <router-link tag="li" :to="'/dashboard/articles/' + article.id" v-for="(article, index) in articles" :key="'article-list-item-' + index">{{ article.name }}</router-link>
        <router-link tag="li" to="/dashboard/articles/new">New Article</router-link>
    </ul>
    <ul v-else>
        <li>No articles</li>
    </ul>
</div>

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
