<template>
  <ul>
    <!-- <li v-for="store in storedResources :key="storedResources.id">{{title}}</li> -->
    
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'You need to learn to google',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>
