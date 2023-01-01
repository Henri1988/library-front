<template>
  <div :style="{'background-image':'url(https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}" >

    <div class="login-page" >

      <div class =form-group>
        <label for="usernameInput">Username: </label>
        <br>
        <input v-model="username" type="text" class="form-control" id="usernameInput" aria-describedby="emailHelp"
               placeholder="Username">
        <br>
        <br>
        <label for="passwordInput">Parool: </label>
        <br>
        <input v-model="password" type="password" class="form-control" id="passwordInput" placeholder="Password">
        <br>
        <br>
        <br>
        <button type="submit" v-on:click="logIn">Logi sisse</button>
        <br>
        <br>
        <br>
        <p id="user">Ei ole veel kasutaja?</p>
        <div class="registerButton">
          <button type="submit" v-on:click="goToRegister">Registreeru</button>
        </div>
      </div>
    </div >
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>

</template>

<script>
export default {
  name: "TestHomeView",
  data: function () {
    return {
      username: '',
      password: '',
      userId: '',
      userRoleId:'',
    }
  },
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },

    logIn: function () {
      // ALTERNATIVE
      let loginDtoObject = {
        username: this.username,
        password: this.password,
      }

      this.$http.post("/login", loginDtoObject
      ).then(response => {
        sessionStorage.setItem('userId', response.data.userId)
        sessionStorage.setItem('personName', response.data.personName)
        this.userRoleId = response.data.userRoleId
        this.$root.$emit('loggedIn')
        if (this.userRoleId === 1) {
          this.$router.push({name: 'userRoute'});
        } else {
          this.$router.push({name: 'adminRoute'});
        }
      }).catch(error => {
        alert("Sisselogimine ebaõnnestus")
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
#user {
  color: #26160d;
  font-weight: bold;

}

.login-page{
  width: 360px;
  padding: 10% 0 0%;
  margin: auto;
}

.form-group {
  position: page;
  z-index: 1;
  background: rgba(131, 77, 99, 0.58);
  max-width: 280px;
  margin: 0 auto 100px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 0.53rem;
}

.form-group label{
  font-family: "Candara", "sans-serif";
  outline: #000000;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
}

.form-group button{
  font-family: "Candara", "sans-serif";
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  border: 0;
  padding: 10px;
  cursor: pointer;
  border-radius: 0.25rem;
}

.form-group button:hover, .form-group button:active, .form-group button:focus {
  background: #a0c969;
}

.registerButton {
  color: red;

}

.btn-primary {
  margin: 5px;
}
.btn {
  margin: 20px;
}

</style>