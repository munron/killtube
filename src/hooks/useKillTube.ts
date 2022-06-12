import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import useStorage from "./useStorage";
const { setSyncStorage, getSyncStorage, addStorangeChangeEventListener } = useStorage();

export default function useKillTube() {
  const hasStart = ref<Boolean>(false)
  
  const start = async() => {
    if (window.confirm("Youtubeにアクセスできなくなります。本当に開始しますか？")){
      await setSyncStorage({'hasStart':true});
    }
  } 

  onBeforeMount(async() => {
    console.log("on before mount");
    hasStart.value = await getSyncStorage('hasStart') ?? false;
    addStorangeChangeEventListener('hasStart', (oldValue, newValue) => {
      console.log('storage changed', newValue)
      if (newValue != undefined) hasStart.value = newValue
    })
  });


  onBeforeUnmount(() => {
    
  });

  return {
    start,
    hasStart
  }
}