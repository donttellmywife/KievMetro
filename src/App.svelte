<script>
  export let timetable;
</script>

<h1>{ timetable.map((station => station.name)) }!</h1>

<style>
  h1 {
    color: purple;
  }
</style>
