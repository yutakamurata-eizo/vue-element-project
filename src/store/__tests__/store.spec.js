import Vuex from 'vuex'
import store from '@/store.js'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('mutations', () => {
  test('commit increment mutations ⇒ count+1', () => {
    expect(store.getters['count']).toBe(0)
    store.commit('increment', { cnt: 1 })
    expect(store.getters['count']).toBe(1)
  })
})

describe('actions', () => {
  test('dispatch increment actions ⇒ commit increment mutations', () => {
    expect(store.getters['count']).toBe(1)
    store.dispatch('increment', { cnt: 2 })
    expect(store.getters['count']).toBe(3)
  })
})
