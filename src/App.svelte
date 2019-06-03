<script>
  export let timetable;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello { timetable.map((station => station.name)) }!</h1>
