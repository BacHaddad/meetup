<template>
  <div id="app">
    <Header v-on:toggleAttending="showAttending" :attending="attending" />
    <transition name="slide-fade">
      <EventsList v-show="!toggleAttending" v-on:addToCalender="addToAttending" v-on:removeFromCalender="removeFromAttending" v-on:send-review="updateEventReview" :events="events" />
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
        { id: 1, name: 'Not a Sunrise', date: '2021/11/15', time: '14:00', going: false, review: '' },
        { id: 2, name: 'Ocean Decipherment', date: '2021/11/15', time: '15:00', going: false, review: '' },
        { id: 3, name: 'Universe Trillion', date: '2021/11/15', time: '11:45', going: false, review: '' },
        { id: 4, name: 'Two Ghostly White Figures', date: '2021/11/15', time: '10:30', going: false, review: '' },
        { id: 5, name: 'Sky Calls US', date: '2021/11/15', time: '18:15', going: false, review: '' },
        { id: 6, name: 'Fintech Europe', date: '2021/11/15', time: '10:30', going: false, review: '' },
        { id: 7, name: 'Coders without Borders', date: '2021/11/15', time: '18:15', going: false, review: '' },
      ],

      attending: [],
      toggleAttending: false,
    };
  },

  methods: {
    addToAttending(event) {
      this.attending.push(event);
      localStorage.setItem('events-attending', JSON.stringify(this.attending));
    },

    updateEventReview(payLoad) {
      console.log('event review:', payLoad.review, payLoad.id);
      const newReview = this.events.find(evt => evt.id === payLoad.id);
      newReview.review = payLoad.review;

      localStorage.setItem('events-reviewed', JSON.stringify(this.events));

      console.log('reviewed events', this.events);
    },

    removeFromAttending(event) {
      this.attending = this.attending.filter(item => item.id != event.id);
      localStorage.setItem('events-attending', JSON.stringify(this.attending));
    },

    showAttending() {
      this.toggleAttending = !this.toggleAttending;
    },
  },

  mounted() {
    const storage = JSON.parse(localStorage.getItem('events-attending'));
    const reviewStorage = JSON.parse(localStorage.getItem('events-reviewed'));

    if (storage !== null) {
      this.attending = storage;
      this.attending.forEach(evt => {
        const id = evt.id;
        const goingTo = this.events.find(evt => evt.id === id);
        goingTo.going = true;
      });
    }
    if (reviewStorage !== null) {
      this.events = reviewStorage;
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
