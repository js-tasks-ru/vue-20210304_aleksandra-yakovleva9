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

  beforeRouteEnter(to, from, next) {
    if (from.name === 'register' && to.name === 'login' && window.alert(!this.userItem.id)) {
      console.log('переход не получился');
      next(false);
    }
    next();
    console.log('переход получился');
  },

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

      this.$router.push('login');

      function getEmail(email) {
        return new Promise((resolve, reject) => {
          if (email.length > 0) {
            resolve();
          }
          reject('Требуется ввести Email');
        });
      }

      function getFullname(fullname) {
        return new Promise((resolve, reject) => {
          if (fullname.length > 0) {
            resolve();
          }
          reject('Требуется ввести полное имя');
        });
      }

      function getPassword(password) {
        return new Promise((resolve, reject) => {
          if (password.length > 0) {
            resolve();
          }
          reject('Требуется ввести пароль');
        });
      }

      function getCheckPassword(password, checkPassword) {
        return new Promise((resolve, reject) => {
          if (password === checkPassword) {
            resolve();
          }
          reject('Пароли не совпадают');
        });
      }

      function getAccepted(accepted) {
        return new Promise((resolve, reject) => {
          if (accepted) {
            resolve();
          }
          reject('Требуется согласиться с условиями');
        });
      }

      async function resultFunc() {
        try {
          await getEmail(email);
          await getFullname(fullname);
          await getPassword(password);
          await getCheckPassword(password, checkPassword);
          await getAccepted(accepted);

          return register(email, fullname, password).then((res) => {
            if (res.message !== undefined) {
              // this.$router.push('login');
              return alert(res.message);
            }

            return alert(res.id);
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
