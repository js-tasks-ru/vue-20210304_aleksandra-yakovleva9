import Vue from './vendor/vue.esm.browser.js';


const app = new Vue({
  el: '#app',
  data: {
    example:
      {
        data: {
          status: 0,
          response: [
            {
              id: 'm',
              desc: 'Ст 1',
              nodes: [
                {
                  id: 'A',
                  role: 'AB',
                  desc: 'Бака 1',
                  url: 'http://1927',
                },
                {
                  id: 'A2',
                  role: 'AB',
                  desc: 'Ба 2',
                  url: '1927',
                },
                {
                  id: 'RB',
                  role: 'RB',
                  desc: 'БО',
                  url: '1927',
                },
                {
                  id: 'M1',
                  role: 'MЧ',
                  desc: 'MЧ 1',
                  url: '1927',
                },
                {
                  id: 'M2',
                  role: 'MЧ',
                  desc: 'MЧ 2',
                  url: '1927',
                },
              ],
            },
            {
              id: 'd',
              desc: 'Ст',
              nodes: [
                {
                  id: 'A1',
                  role: 'AB',
                  desc: 'Ба 1',
                  url: '1927',
                },
                {
                  id: 'A2',
                  role: 'ABS',
                  desc: 'Ба 2',
                  url: '1927',
                },
                {
                  id: 'RB',
                  role: 'RB',
                  desc: 'РБ',
                  url: '1927',
                },
                {
                  id: 'MЧ',
                  role: 'MЧ',
                  desc: 'MЧ',
                  url: '1927',
                },
              ],
            },
          ],
        },
      },
  },
  computed: {
    array: this.arr,
  },
  methods: {
    test:function () {
      const arr = [];
      const keys = Object.keys(this.example.data.response);
      const values = Object.values(this.example.data.response);
      for (let i = 0; i < keys.length; i += 1) {
        if (values[i].id === 'm') {
          for (let node = 0; node < values[i].nodes.length; node += 1) {
            arr.push(values[i].nodes[node].id);
          }
        }
      }
      return arr;
    },
  }
})
app.$mount('#app');
