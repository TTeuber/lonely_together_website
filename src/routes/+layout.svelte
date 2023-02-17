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
      --blue-80: hsla(180, 30%, 60%, 80%)
      --blue-50: hsla(180, 30%, 60%, 50%)
      --green: hsl(120, 20%, 60%)
      --purple: hsl(280, 30%, 55%)
      background: var(--blue)
      color: black
      scroll-behavior: smooth
      font-family: 'Courgette', sans-serif

    :global(body)
      margin: 0
      inset: 0
      scroll-behavior: smooth

    :global(a, li, p, button, input, text-area, text-area::placeholder)
      font-family: 'Comfortaa', sans-serif

    div
      height: 10rem
      width: 100vw
      background: var(--pink)
</style>
