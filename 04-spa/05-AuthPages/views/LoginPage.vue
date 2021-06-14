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

      function validForm(email, password) {
        if (email === '') {
          alert('Требуется ввести Email');
          return false;
        }
        if (email !== '' && password === '') {
          alert('Требуется ввести пароль');
          return false;
        }
        return true;
      }

      if (validForm(email, password)) {
        login(email, password).then((res) => {
          if (res.message !== undefined) {
            alert(res.message);
            return false;
          }
          alert(res.fullname);
          if(this.$route.query.from === undefined) {
            this.$router.push('/');
            return false;
          }
          this.$router.push(this.$route.query.from);
        });
      }
    },
  },
};
</script>

<style></style>
