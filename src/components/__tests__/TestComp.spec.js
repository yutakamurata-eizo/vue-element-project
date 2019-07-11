import TestComp from '@/components/TestComp.vue'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

const localVue = createLocalVue()

describe('TestComp.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null
    wrapper = mount(TestComp, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
  })

  // デフォルト表示テスト
  test('Default Output Test', () => {
    expect(wrapper.find('p').text()).toBe('Count: 0')
  })

  // ボタンクリック後表示テスト
  test('number input ⇒ Output Test', () => {
    wrapper.find('input').setValue('10')
    wrapper.find('button').trigger('click')
    expect(wrapper.find('p').text()).toBe('Count: 10')
  })

  // RouterLinkテスト
  test('router link home', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})
