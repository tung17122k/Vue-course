<template>
  
    <Form @submit="onSubmit" class="w-full p-10 max-w-[500px] mx-auto">
      <Field>
        <div class="flex flex-col gap-2 mb-5">
        <label  htmlFor="username">Username</label>
        <input  class="p-4 rounded-md border-gray-300 border" v-model="form.firstName" placeholder="enter your username">
        
        
      </div>
      </Field>
      
    </Form>
  
    
  </template>
  <script>


  
  
  export default {
  }
  </script>