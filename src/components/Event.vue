<template>
  <section class="container" style="background-image: ">
    <div class="event-info">
      <h2>{{ event.name }}</h2>
      <p>
        date: <small>{{ event.date }}</small>
      </p>
      <p>
        time: <small>{{ event.time }}</small>
      </p>
    </div>
    <div class="btn">
      <button v-if="event.going" class="going" @click="removeFromCalender()">going</button>
      <button v-else class="not-going" @click="addToCalender()">add</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Event',
  props: {
    event: Object,
  },

  data() {
    return {};
  },
  methods: {
    addToCalender() {
      this.event.going = !this.event.going;
      this.$emit('addToCalender', this.event);
    },
    removeFromCalender() {
      this.event.going = !this.event.going;
      this.$emit('removeFromCalender', this.event);
    },
  },
};
</script>

<style scoped>
section {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 2rem;
  margin: 0.5rem;
  padding: 1rem;
  word-break: break-word;
  background-color: #fff;
}

p {
  font-weight: 500;
  font-size: 20px;
  margin: 1rem;
  text-align: left;
}

section:hover {
  box-shadow: 0 8px 8px -4px #f0cf0f;
}

.container {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.not-going {
  border: none;
  box-shadow: 0 1px 1px rgba(204, 197, 185, 0.5);
  color: #324b22;
  border-radius: 1%;
  font-size: 1rem;
  margin: 0.5rem;
  background-color: #f0cf0f;
}

.going {
  border: none;
  box-shadow: 0 1px 1px rgba(204, 197, 185, 0.5);
  color: #f0cf0f;
  border-radius: 1%;
  font-size: 1rem;
  margin: 0.5rem;
  background-color: #324b22;
  padding: 1rem;
}


small {
  color: #5a5a5a;
}
</style>
