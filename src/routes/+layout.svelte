<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import {setContext} from "svelte";

    let mainHue = "333";
    let mainSat = "20%";
    let mainLum = "20%";
    let mainColor = "hsl(0, 50%, 85%)"
    setContext("mainColors", {hue: mainHue, sat: mainSat, lum: mainLum});
    setContext("mainColor", mainColor);
</script>

<Navbar/>

<div style="--color: mainColor"></div>

<slot></slot>

<style lang="sass">
    :global(html)
      background: #333
      color: #999
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
