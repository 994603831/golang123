import '~/styles/main.scss';
import '~/styles/search/search.scss';
import '~/js/common/default.js';
import Vue from 'vue';
import Article from '~/js/pages/search/Article.vue';

new Vue({
    render: h => h(Article),
}).$mount('#search-view');
