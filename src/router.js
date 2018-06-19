import Vue from 'vue';
import Router from 'vue-router';
import Create from './views/Create.vue';
import Play from './views/Play.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'create',
            component: Create
        },
        {
            path: '/:word',
            name: 'play',
            component: Play,
            props: true
        }
    ],
    mode: 'history'
});
