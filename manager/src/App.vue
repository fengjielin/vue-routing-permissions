<template>
  <div id="app">
    <MHeader />
    <SideBar />
    <PageBoard />
  </div>
</template>

<<script>
import MHeader from '@/components/MHeader';
import SideBar from '@/components/SideBar';
import PageBoard from '@/components/PageBoard';


export default {
  name: 'App',
  components: {
    MHeader,
    SideBar,
    PageBoard
  },
  async mounted() {
    
  },
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}

a {
  text-decoration: none;
  color: #000;
}

#app {
  height: 100%;
}
</style>
