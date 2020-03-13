<template>
  <div class="home">
  	<h1>Form Validation</h1>
     <div>
      <div class="grid__column grid__unit--md-5">
 <form @submit.prevent="submit"  method="post">
  <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <label class="form__label">Name</label>
    <input class="form__input" v-model.trim="$v.name.$model"/>
  </div>
  <div class="error" v-if="!$v.name.required">Name is required</div>
  <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

  <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
    <label class="form__label">Password</label>
    <input class="form__input" v-model.trim="$v.password.$model"/>
  </div>
  <div class="error" v-if="!$v.password.required">Password is required.</div>
  <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
  <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
    <label class="form__label">Repeat password</label>
    <input class="form__input" v-model.trim="$v.repeatPassword.$model"/>
  </div>
  <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>

  <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
  <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
  <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
  <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
</form>
</div>
  
</div>
  </div>
</template>

<script type="text/javascript">
import { required,sameAs,minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      age: 0,
      submitStatus: null,
      password:'',
      repeatPassword:'',
      hasDescription: false,
      description:''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log(this.name);
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style scoped>

.grid__unit--md-5 {
    width: 20%;
    margin-left: 40%;
}
.form-group {
    margin-bottom: 2rem;
}

.form__label, .form__label--inline {
    font-size: 0.8125rem;
    color: #4b6372;
    margin-bottom: 0.3125rem;
    margin-left: 0.875rem;
    display: block;
    font-family: "Lato", sans-serif;
}

.form-group .form__input, .form-group .form__textarea {
    margin-bottom: 0;
}
.form__input, .form__textarea {
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
    color: #374853;
    line-height: 2.375rem;
    min-height: 2.375rem;
    position: relative;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    background: #fff;
    padding: 0 0.8125rem;
    width: 100%;
    transition: border .1s ease;
    box-sizing: border-box;
}
.button {
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
    color: #fff;
    min-height: 2.5rem;
    line-height: 1.4;
    padding: 0.5rem 1.875rem 0.625rem;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    background: #41B883;
    border: none;
    border-radius: 5px;
    z-index: 1;
    overflow: hidden;
    outline: none;
    vertical-align: middle;
    transition: 0.1s background ease, 0.1s border-color ease, 0.1s color ease;
    border-bottom: 3px solid #266d4d;
    text-decoration: none;
}
  </style>