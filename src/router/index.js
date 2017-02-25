import Vue from 'vue';
import Router from 'vue-router';
import Day from 'components/Day';
import Result from 'components/Result';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Day',
      component: Day,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
  ],
  mode: 'history',
});
