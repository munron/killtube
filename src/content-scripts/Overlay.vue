<template>
  <div class="overlay">
    <div class="contents">
      <div class="contents__eyecatch">
        <ChromeExImg :filename="'eyecatch.png'"/>
      </div>
      <button class="congratulations" @click="start">開始する</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChromeExImg from '../components/ChromeExImg.vue';
import useKillTube from "../hooks/useKillTube";
const { hasStart, start } = useKillTube();


</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.9;
  z-index: 20000;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

.contents {
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: 200000;
  opacity: 1.0;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.contents__eyecatch {
  height: 90%;
  display: flex;
  justify-content: center;
}

.contents__eyecatch img {
  height: 100%;
}

button {
  height: 10%;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f20000;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  color: white;
  font-weight: bold;
}
</style>