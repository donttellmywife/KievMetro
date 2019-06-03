import App from './App.svelte'
import timetable from './data.json'

const app = new App({
  target: document.body,
  props: {
    timetable,
  },
})

export default app
