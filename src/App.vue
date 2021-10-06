<template>
  <div id="app">
    <Header v-on:toggleAttending="showAttending" :attending="attending" />
    <transition name="slide-fade">
      <EventsList v-show="!toggleAttending" v-on:addToCalender="addToAttending" v-on:removeFromCalender="removeFromAttending" :events="events" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <Attending v-show="toggleAttending" :attending="attending" />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import EventsList from './components/EventsList.vue';
import Attending from './components/Attending.vue';

export default {
  name: 'App',
  components: {
    EventsList,
    Header,
    Attending,
  },
  data() {
    return {
      events: [
        { id: 1, name: 'Not a sunrise', date: '2021/11/15', time: '14:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
        { id: 2, name: 'ocean decipherment', date: '2021/11/15', time: '15:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
        { id: 3, name: 'universe trillion', date: '2021/11/15', time: '11:45', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
        { id: 4, name: 'two ghostly white figures', date: '2021/11/15', time: '10:30', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
        { id: 5, name: 'sky calls to us', date: '2021/11/15', time: '18:15', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
        { id: 6, name: 'two ghostly white figures', date: '2021/11/15', time: '10:30', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
        { id: 7, name: 'sky calls to us', date: '2021/11/15', time: '18:15', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events', going: false, review:"" },
      ],

      attending: [],
      toggleAttending: false,
    };
  },

  methods: {
    addToAttending(event) {
      this.attending.push(event);
      console.log('attending :', this.attending);
      localStorage.setItem('events-attending', JSON.stringify(this.attending));
    },
    removeFromAttending(event) {
      console.log('from attending in app', event);
      this.attending = this.attending.filter(item => item.id != event.id);
      console.log('attending :', this.attending);
      localStorage.setItem('events-attending', JSON.stringify(this.attending));
    },

    showAttending() {
      this.toggleAttending = !this.toggleAttending;
    },
  },

  mounted() {
    const storage = JSON.parse(localStorage.getItem('events-attending'));
    console.log(storage);


    if (storage !== null) {
      this.attending = storage;
      this.attending.forEach(evt => {
        const id = evt.id;
      const goingTo =  this.events.find(evt => evt.id === id )
      goingTo.going = true
      console.log(  "going to" , goingTo);
} ) 
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 12vh;
  margin-bottom: 12vh;
  display: grid;
  place-items: center;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
