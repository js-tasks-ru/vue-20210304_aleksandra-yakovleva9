<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="userItem.email" type="email" placeholder="demo@email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="userItem.password" type="password" placeholder="password" class="form-control" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link class="link" :to="{ name: 'register' }">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',
  data() {
    return {
      userItem: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    submit() {
      const email = this.userItem.email;
      const password = this.userItem.password;

      function getEmail(email) {
        return new Promise((resolve, reject) => {
          if (email.length > 0) {
            resolve();
          }
          reject('Требуется ввести Email');
        });
      }

      function getPassword(password) {
        return new Promise((resolve, reject) => {
          if (password !== '') {
            resolve();
          }
          reject('Требуется ввести пароль');
        });
      }

      function resultFunc() {
        try {
          getEmail(email);
          getPassword(password);
          return login(email, password).then((res) => {
            if (res.message !== undefined) {
              return alert(res.message);
            }
            return alert(res.fullname);
          });
        } catch (err) {
          return alert(err);
        }
      }
      resultFunc().then((res) => {
        return res;
      });
    },
  },
};
</script>

<style></style>
