<template>
  <section>
    <h2>{{ event.name }}</h2>

    <div class="button-container">
      <p>
        date: <small>{{ event.date }}</small>
      </p>
      <p>
        time: <small>{{ event.time }}</small>
      </p>
      <button class="going" v-if="going" @click="removeFromCalender()">-</button>
      <button class="not-going" v-else @click="addToCalender()">+</button>
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
    return {
      going: false,
    };
  },
  methods: {
    addToCalender() {
      this.going = !this.going;
      this.$emit('addToCalender', this.event);
    },
    removeFromCalender() {
      this.going = !this.going;
      this.$emit('removeFromCalender', this.event);
    },
  },
};
</script>

<style scoped>
section {
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 2rem;
  margin: 0.5rem;
  padding: 1rem;
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

.button-container {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.not-going {
  border: none;
  box-shadow: 0 1px 1px rgba(204, 197, 185, 0.5);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1%;
  font-size: 1rem;
  margin: 0.5rem;
  background-color: #f0cf0f;
}
button {
  color: #fff;
  font-weight: bold;
  padding: 1rem;
}

.going {
  border: none;
  box-shadow: 0 1px 1px rgba(204, 197, 185, 0.5);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1%;
  font-size: 1rem;
  margin: 0.5rem;
  background-color: #324b22;
}

small {
  color: #5a5a5a;
}
</style>
