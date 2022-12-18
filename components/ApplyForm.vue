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
              <Field rules="required|validateUsername" type="text" name="username" id="username" class="mt-1 border-2 focus:border-green-400 w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
              <ErrorMessage name="username" class="text-red-600" />
            </div>
            <div class="col-span-6">
                <label for="email" class="block text-sm font-medium text-gray-700">Adresa E-mail</label>
                <Field type="text" name="email" id="email" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <ErrorMessage name="email" class="text-red-600"/>
            </div>
            <div class="col-span-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Parola</label>
                <Field type="password" name="password" id="password" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <span class="text-red-600">1</span>
            </div>
            <div class="col-span-6">
                <label for="repassword" class="block text-sm font-medium text-gray-700">Repetă Parola</label>
                <Field type="password"  name="repassword" id="repassword" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <span class="text-red-600">1</span>
            </div>
            <div class="col-span-6">
                <label for="age" class="block text-sm font-medium text-gray-700">Varstă</label>
                <Field  type="number" name="age" id="age" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <span class="text-red-600">1</span>

            </div>
            <div class="col-span-6">

                <label for="truckersmp_id" class="block text-sm font-medium text-gray-700">TruckersMP ID</label>
                <Field type="text"  name="truckersmp_id" id="truckersmp_id" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                <span class="text-red-600">1</span>

            </div>
            <div class="col-span-6">
                <label for="question1" class="block text-sm font-medium text-gray-700">O scurta prezentare a ta. (Hobby-uri, etc) <span class="text-gray-400">(Minim: 100 caractere)</span></label>
                <Field as="textarea" name="question1" id="question1" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" class="btn py-2 px-4 disabled:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 font-medium">Trimite Aplicația</button>
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


function onSubmit(values: object) {
  console.log(typeof values);
}

defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return '* Acest câmp este obligatoriu.';
  }

  return true;
});


defineRule('validateUsername', (value: string) => {
  console.log(value);

  return true;
})


</script>

<style scoped>

</style>
