<template>
  <div id="app">
    <Header :attending="attending" />
    <EventsList v-on:addToCalender="addToAttending" v-on:removeFromCalender="removeFromAttending"  :events="events" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import EventsList from './components/EventsList.vue';

export default {
  name: 'App',
  components: {
    EventsList, Header
  },
  data() {
    return {
      events: [
        { id: 1, name: 'Not a sunrise', date: '2021/11/15', time: '14:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
        { id: 2, name: 'ocean decipherment', date: '2021/11/15', time: '15:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
        { id: 3, name: 'universe trillion', date: '2021/11/15', time: '11:45', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
        { id: 4, name: 'two ghostly white figures', date: '2021/11/15', time: '10:30', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
        { id: 5, name: 'sky calls to us', date: '2021/11/15', time: '18:15', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
      ],

      attending:[]
    };
  },

  methods: {
addToAttending(event){
  console.log("from attending in app", event);
  this.attending.push(event);
  console.log("attending :", this.attending);
},
removeFromAttending(event){
  console.log("from attending in app", event);
  this.attending = this.attending.filter(item => item.id != event.id);
  console.log("attending :", this.attending);
}
  }
  
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20%;
  display: grid;
  place-items: center;
  
}
</style>
