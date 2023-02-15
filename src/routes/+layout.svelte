<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Navbar/>

<slot></slot>

<Footer/>

<style lang="sass">
    :global(html)
      --pink: hsl(0, 30%, 80%)
      --blue: hsl(180, 30%, 60%)
      --green: hsl(120, 20%, 60%)
      --purple: hsl(280, 30%, 55%)
      background: var(--blue)
      color: black
      scroll-behavior: smooth
      font-family: sans-serif

    :global(body)
      margin: 0
      inset: 0
      scroll-behavior: smooth

    div
      height: 10rem
      width: 100vw
      background: var(--pink)
</style>
