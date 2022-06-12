// const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));
import useStorage from "../hooks/useStorage"
const { getSyncStorage, addStorangeChangeEventListener} = useStorage();
import { createApp } from "vue";
import Overlay from "./Overlay.vue";

const insertOverlay = () => {
  const el = document.querySelector('body');
  console.log(el);
  if (el) {
    console.log(el);
    el.insertAdjacentHTML(
      'beforebegin',
      '<div id="app"></div>',
    );
    const app = createApp(Overlay);
    app.mount('#app');
  }
} 


let hasStart = await getSyncStorage<boolean>('hasStart') ?? false;

// 更新
addStorangeChangeEventListener('hasStart', (oldValue, newValue) => {
  if(newValue !== undefined) {
    hasStart = newValue;
  }
})

// youtubeを開いたらgithubにリダイレクト
if(hasStart && /youtube.com/.test(location.href)) {
  window.open('https://github.com/', '_self');
}

// 
window.onload = () => {
  const observer = new MutationObserver(function () {
    // youtubeを開いたら消す
    if(hasStart && /youtube.com/.test(location.href)) {
      console.log(hasStart)
      window.open('https://github.com/', '_self');
    }
  })
  observer.observe(document, { childList: true, subtree: true });

  if (!hasStart) insertOverlay();
}

