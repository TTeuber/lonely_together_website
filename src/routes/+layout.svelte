<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import {setContext} from "svelte";
    import Footer from "$lib/Footer.svelte";

    let mainHue = "333";
    let mainSat = "20%";
    let mainLum = "20%";
    let mainColor = "hsl(0, 50%, 85%)"
    setContext("mainColors", {hue: mainHue, sat: mainSat, lum: mainLum});
    setContext("mainColor", mainColor);
</script>

<Navbar/>

<!--<div style="&#45;&#45;color: mainColor"></div>-->

<slot></slot>

<Footer/>

<style lang="sass">
    :global(html)
      background: hsl(180, 30%, 60%)
      color: black
      scroll-behavior: smooth
      font-family: sans-serif

    @media(prefers-color-scheme: light)
      :global(html)
        background: #999
        color: #333

    :global(body)
      margin: 0
      inset: 0
      scroll-behavior: smooth

    div
      height: 10rem
      width: 100vw
      background: var(--color)

</style>
