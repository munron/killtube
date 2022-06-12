<template>
  <div class="popupview">
    <ChromeExImg :filename="'eyecatch.png'"/>
    <button v-if="!hasStart" @click="start">開始する</button>
    <div v-if="hasStart" class="congratulations">おめでとうございます！アンインストールしない限り二度とYouTubeを見ることはできません</div>
  </div>
</template>

<script setup lang="ts">
import ChromeExImg from '../components/ChromeExImg.vue';
import useKillTube from "../hooks/useKillTube"
const { hasStart, start } = useKillTube()
</script>

<style scoped>
.popupview {
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
}
.popupview img {
  width: 100%;
}

button {
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

.congratulations {
  width: 95%;
  padding : 5px;
  background-color: green;
  font-weight: bold;
  color: white;
}
</style>