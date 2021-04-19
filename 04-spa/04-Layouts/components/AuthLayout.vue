<template>
  <main class="main">
    <div class="page page_onboarding">
      <div class="container">
        <h1 class="page__title text-center">{{ title }}</h1>
        <form class="form">
          <div class="form-group">
            <label class="form-label">Email</label>
            <div class="input-group">
              <input type="email" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Имя</label>
            <div class="input-group">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Пароль</label>
            <div class="input-group">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Повтор пароля</label>
            <div class="input-group">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="checkbox"><input type="checkbox" /> Я согласен с условиями <span></span></label>
          </div>
          <div class="form__buttons">
            <button type="submit" class="button button_primary">Зарегистрироваться</button>
          </div>
          <div class="form__append">Уже есть аккаунт? <a href="login.html" class="link">Войдите</a></div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'AuthLayout',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
</style>
