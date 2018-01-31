import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Face from '../components/Face'
import RangeSlider3 from '../components/RangeSlider3'
import RangeSlider2 from '../components/RangeSlider2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/face',
      name: 'Face',
      component: Face
    },
    {
      path: '/three',
      name: 'Three Way Slider',
      component: RangeSlider3
    },
    {
      path: '/two',
      name: 'Two Way Slider',
      component: RangeSlider2
    },
    {
      path: '/',
      name: 'right nauw',
      component: Hello
    }
  ]
})
