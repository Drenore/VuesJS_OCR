<script>
export default {
  name: 'BaseButton',
  
  
}
</script>

<template>

     <!-- eslint-disable-next-line vue/no-deprecated-dollar-listeners-api -->
     <button v-on="$listeners">
    <slot></slot>
  </button>


</template>

<style scoped>
button{
    background-color: black ;
    color: white;
    width: 100px;
    height:50px;
    border-radius: 5%;
}
    </style>