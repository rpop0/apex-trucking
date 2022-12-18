<template>
  <div class="container px-5 md:px-0 md:mx-auto apply-form mt-10">
    <div data-aos="fade-down" data-aos-offset="500" data-aos-duration="500">
      <h1 class="font-soulmaze text-2xl md:text-4xl text-center">Aplică acum</h1>
      <h1 class="text-4xl md:text-6xl font-soulmaze-outline under-title opacity-40 text-center">Aplică acum</h1>
      <p CLASS="text-gray-400 text-center">Ai deja un cont? <NuxtLink to="/login" class="text-black font-semibold">Loghează-te</NuxtLink></p>
    </div>
    <Form @submit="onSubmit">
      <div class="shadow overflow-hidden sm:rounded-md mt-10 md:w-1/2 w-auto md:mx-auto mx-0">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <Field :rules="required" type="text" name="username" id="username" class="mt-1 border-2 focus:border-green-400 w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
              <ErrorMessage name="username" class="text-red-600" />
            </div>
            <div class="col-span-6">
                <label for="email" class="block text-sm font-medium text-gray-700">Adresa E-mail</label>
                <Field :rules="[required, validateEmail]" type="text" name="email" id="email" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <ErrorMessage name="email" class="text-red-600"/>
            </div>
            <div class="col-span-6">
              <label for="email" class="block text-sm font-medium text-gray-700">Repetă E-mail</label>
              <Field rules="confirmed:email" type="text" name="reemail" id="reemail" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
              <ErrorMessage name="reemail" class="text-red-600"/>
            </div>
            <div class="col-span-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Parola</label>
                <Field :rules="[required, validatePassword]" type="password" name="password" id="password" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <ErrorMessage name="password" class="text-red-600"/>
            </div>
            <div class="col-span-6">
                <label for="repassword" class="block text-sm font-medium text-gray-700">Repetă Parola</label>
                <Field rules="confirmed:password"  type="password"  name="repassword" id="repassword" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <ErrorMessage  name="repassword" class="text-red-600"/>
            </div>
            <div class="col-span-6">
                <label for="age" class="block text-sm font-medium text-gray-700">Varstă</label>
                <Field :rules="[required, validateAge]" type="number" name="age" id="age" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <ErrorMessage  name="age" class="text-red-600"/>

            </div>
            <div class="col-span-6">

                <label for="truckersmp_id" class="block text-sm font-medium text-gray-700">TruckersMP ID</label>
                <Field type="number" :rules="[validateTmp, required]"  name="truckersmp_id" id="truckersmp_id" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
              <ErrorMessage  name="truckersmp_id" class="text-red-600"/>


            </div>
            <div class="col-span-6">
                <label for="question1" class="block text-sm font-medium text-gray-700">O scurta prezentare a ta. <span class="text-gray-400">(Minim: 100 caractere, curent: {{question1.length}})</span></label>
                <Field :rules="[required, validatePresentation]" v-model="question1" as="textarea" name="question1" id="question1" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <ErrorMessage  name="question1" class="text-red-600"/>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" class="btn py-2 px-4 disabled:bg-gray-900 rounded-md bg-apex-green hover:bg-apex-purple transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 font-medium">Trimite Aplicația</button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: "ApplyForm",
  inheritAttrs: false,
  customOptions: {},
  components: {
    Form,
    Field,
    ErrorMessage
  },
}
</script>

<script lang="ts" setup>


import {defineRule} from "vee-validate";
import {ref} from 'vue';

const question1 = ref('');


function onSubmit(values: object) {
  console.log(typeof values);
}

function required(value: any) {
  if (value == null) {
    return '* Acest câmp este obligatoriu.';
  }
  return true
}

function validateEmail(value: string) {
  if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/.test(value)) {
    return '* Acest e-mail trebuie să fie unul valid.';
  }
  return true;
}

function validatePassword(value: string) {
  if(value.length < 14) {
    return '* Parola trebuie să conțină cel puțin 14 caractere.';
  }

  if(!/[~`!@#$%^&*()\-_=+{}\[\];:'",<.>\/?\\|]/.test(value)){
    return '* Parola trebuie să conțina cel puțin un simbol special.'
  }

  if(value.length > 1024){
    return '* Parola trebuie să conțina cel mult 1024 de caractere.';
  }

  return true;
}

defineRule('confirmed', (value: string, [target]: any, ctx: any) => {

  if (!value) {
    return '* Acest câmp este obligatoriu.';
  }

  if(value !== ctx.form[target]) {

    switch (target){
      case "email":
        return '* Adresele de email nu corespund.';
      case "password":
        return '* Parolele nu corespund.';
      default:
        return '* Câmpurile nu corespund.';
    }
  }
  return true;
});

function validateAge(value: number){
  if(value < 16){
    return '* Trebuie să ai cel puțin 16 ani.';
  }
  return true;
}

function validateTmp(value: number){
  if(value < 1){
    return '* ID Invalid.';
  }
  return true;
}

function validatePresentation(value: string){
  if(value.length < 100){
    return '* Prezetnarea trebuie să conțină cel puțin 100 de caractere.';
  }
  return true
}

</script>

<style scoped>

</style>
