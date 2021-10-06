<template>
  <section class="main-calender">
    <article v-for="(event, index) in attending" :key="index" class="info">
        <h2>{{ event.name }}</h2>
        <small> {{event.date}} </small>
        <small> {{event.time}} </small>
    </article>
   
      <!-- <Event v-on:addToCalender="sendToCalender" v-on:removeFromCalender="deleteFromCalender" v-for="(event, index) in attending" :key="index" :event="event" /> -->

  </section>
</template>

<script>
// import Event from '@/components/Event';

export default {
  name: 'Attending',
  // components: { Event },
  props: {
    attending: Array,
  },
  methods: {
    // sendToCalender(event) {
    //   console.log("log event from  eventsList", event);
    //   this.$emit('addToCalender', event);
    // },
    // deleteFromCalender(event) {
    //   console.log("log event from  eventsList", event);
    //   this.$emit('removeFromCalender', event);
    // }
  },
};
</script>

<style scoped>
.main-calender {
  background-color: #fff;
    min-width: 15rem;
    position: absolute;
  right: 5%;
  top: 10%;
  display: flex;
  flex-wrap: wrap;
  
}

.info {
  border: solid thin #000;
  border-radius: 3rem;
  padding: 2rem;
  margin: 1.5rem;
}

</style>
