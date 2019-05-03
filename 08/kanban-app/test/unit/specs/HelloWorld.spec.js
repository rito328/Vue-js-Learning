/*
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})

 */

import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    expect(mount(HelloWorld).find('.hello h1').text())
      .to.equal('Welcome to Your Vue.js App')
  })
})
