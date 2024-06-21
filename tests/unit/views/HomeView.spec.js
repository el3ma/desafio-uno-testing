// import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import { shallowMount } from "@vue/test-utils";

describe("HomeView", () => {
  test("Validación de match con el snapshot", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="home"><img alt="Vue logo" src="">
        <postsview></postsview>
      </div>
    `);
  });
});

// describe('HomeView', () => {
//     test('Probando la existencia del componente o vista HomeView ', async () => {
//         const router = createRouter({
//             history: createWebHistory(),
//             routes: [{
//                 path: '/home',
//                 name: 'HomeViewVue',
//                 component: HomeView
//             }],
//         })
//         router.push('/home')
//         await router.isReady()

//         const wrapper = mount(HomeView, {
//             global: {
//                 plugins: [router]
//             }
//         })
//         expect(wrapper.findComponent(HomeView).exists()).toBe(true)
//     })
//  })
