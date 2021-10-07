<template>
  <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="23.653px" viewBox="0 0 60 23.653" xml:space="preserve">
    <polygon
      points="30.001,23.324 0.836,6.382 4.351,0.329 30.001,15.228 55.649,0.329 59.164,6.382 "
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'black',
      required: true,
    },
  },
});
</script>
