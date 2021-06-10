<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="userItem.email" type="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="userItem.fullname" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="userItem.password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="userItem.checkPassword" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox">
        <input v-model="userItem.accepted" type="checkbox" /> Я согласен с условиями <span></span
      ></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link class="link" :to="{ name: 'login' }">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',

  data() {
    return {
      userItem: {
        email: '',
        password: '',
        checkPassword: '',
        fullname: '',
        accepted: false,
      },
    };
  },

  methods: {
    submit() {
      const email = this.userItem.email;
      const fullname = this.userItem.fullname;
      const password = this.userItem.password;
      const checkPassword = this.userItem.checkPassword;
      const accepted = this.userItem.accepted;

      function validForm(email, fullname, password, checkPassword, accepted) {
        if (email === '') {
          alert('Требуется ввести Email');
          return false;
        }

        if (fullname === '') {
          alert('Требуется ввести полное имя');
          return false;
        }
        if (password === '') {
          alert('Требуется ввести пароль');
          return false;
        }
        if (checkPassword !== password) {
          alert('Пароли не совпадают');
          return false;
        }
        if (accepted === false) {
          alert('Требуется согласиться с условиями');
          return false;
        }
        return true;
      }

      if (validForm(email, fullname, password, checkPassword, accepted)) {
        register(email, fullname, password).then((res) => {
          if (res.message !== undefined) {
            return alert(res.message);
          }
          alert(res.id);
          this.$router.push('login');
        });
      }
    },
  },
};
</script>

<style></style>
