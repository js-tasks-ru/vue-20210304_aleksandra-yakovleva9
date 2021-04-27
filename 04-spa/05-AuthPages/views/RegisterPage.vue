<template>
  <form class="form">
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
      <label class="checkbox"><input type="checkbox" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary" @click="submit">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <a class="link">Войдите</a>
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
      },
    };
  },
  methods: {
    submit() {

      // получаем данные формв
      const email = this.userItem.email;
      const fullname = this.userItem.fullname;
      const password = this.userItem.password;

      // обрабатываем объект
       const result = register(email, fullname, password);

       //приходит [object Promise]
       alert(result);
    },
  },
};
</script>

<style></style>
