<script setup>
const props = defineProps({
  cardDate: {
    type: String,
    required: true,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  cardBody: {
    type: String,
    required: true,
  },
  cardSize: {
    type: String,
    default: "250px",
  },
});
</script>

<template>
  <div class="card" :style="{ maxWidth: cardSize, width: cardSize }">
    <div class="img"></div>
    <div class="card-body">
      <p>{{ cardBody }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 16px 16px 70px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  height: 300px;
  width: 200px;
  overflow: hidden;
  background-color: whitesmoke;
}

.img {
  height: 100%;
  width: 100%;
  background-color: aquamarine;
}

.card-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card-date {
  font-size: 14px;
  color: #666;
}

.card-title {
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}

.card-body {
  margin-top: 12px;
  font-family: "Courier New", Courier, monospace;
}
</style>
