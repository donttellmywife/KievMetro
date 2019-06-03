import App from './App.svelte'
import timetable from './data.js'

const app = new App({
  target: document.body,
  props: {
    timetable,
  },
})

export default app
