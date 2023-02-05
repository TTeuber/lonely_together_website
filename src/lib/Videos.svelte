<script lang="ts">
    import type {YouTubeContent} from "../routes/+page.svelte";
    import {afterUpdate, onMount} from "svelte";
    export let embedLinks: YouTubeContent[];

    let slider: HTMLElement;

    let num = 0;

    onMount(() => {
        slider.addEventListener("scroll", () => {
            num = Math.floor((slider.scrollLeft / slider.scrollWidth) * embedLinks.length + 0.5);
        })
    })

    let index = 1;

</script>

<section>
    <div class="main">
        <h2>Videos</h2>
        <div class="slider-container">
            <button class="left" on:click={() => slider.scrollBy(-slider.scrollWidth / embedLinks.length, 0)} disabled={num === 0}>{"<"}</button>
            <div class="slider" bind:this={slider}>
                {#each embedLinks as link}
                    <div class="music">
                        <div class="frame">
                            <iframe width="560" height="315" src={link.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="title">
                            <h3>{link.title}</h3>
                        </div>
                    </div>
                {/each}
            </div>
            <button class="right" on:click={() => slider.scrollBy(slider.scrollWidth / embedLinks.length, 0)} disabled={num === embedLinks.length - 1}>{">"}</button>
        </div>
    </div>
    <div class="slider-markers">
        {#each embedLinks as link, index}
            <div class="markers" data-index={index === num} on:click={() => {
                slider.scrollTo((slider.scrollWidth / embedLinks.length) * index, 0)
            }}></div>
        {/each}
    </div>
</section>

<style lang="sass">
    section
      //background: hsl(180, 20%, 70%)
      //background-image: linear-gradient(hsl(180, 20%, 70%), hsl(0, 20%, 70%))
      background-image: linear-gradient(to top, hsl(120, 20%, 60%), hsl(280, 30%, 60%))
      //border: 10px solid
      //border-image: linear-gradient(hsl(180, 20%, 70%), hsl(0, 20%, 70%))
      color: black
      margin: 0
      padding:
        top: 20px
        bottom: 20px

    .main
      display: flex
      flex-direction: column

    .title
      display: flex
      justify-content: center
      align-items: center

    h2
      text-align: center
      font-size: 3rem
      margin: 1rem
      display: block

    .slider-container
      display: flex
      position: relative

    button
      border: none
      background: none
      cursor: pointer
      position: absolute
      color: white
      font-size: 4rem
      bottom: 50%
      padding: 10px
      z-index: 10
      display: none

      &:disabled
        color: #666
        cursor: initial

      &.left
        left: 5%

      &.right
        right: 5%

    .slider
      width: 100%
      white-space: nowrap
      overflow: scroll
      scroll-snap-type: x mandatory
      transition-property: all
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
      transition-duration: 150ms
      scroll-behavior: smooth

      &::-webkit-scrollbar
        display: none


    .music
      width: 100%
      margin: 10px
      display: inline-flex
      flex-direction: column
      scroll-snap-align: center

    .frame
      width: 100%
      aspect-ratio: 16/9

    iframe
      width: 100%
      height: auto
      aspect-ratio: 16/9
      box-shadow: 3px 3px 8px hsla(0,0,20%,60%)

    h3
      text-align: center
      font-size: 2rem

    .slider-markers
      display: flex
      justify-content: center
      gap: 1rem

    .markers
      border: 1px solid black
      height: 8px
      width: 8px
      border-radius: 50%
      cursor: pointer

    [data-index="true"]
      background: black

    @media screen and (min-width: 700px)
      button
        display: inline

    @media screen and (min-width: 900px)
      .main
        flex-direction: row
        justify-content: center
        position: relative
        margin-top: 40px

      .slider-container
        justify-content: center
        align-items: center
        width: 80%

      .music
        flex-direction: column

      button
        position: static
        color: black

      .title
        flex-shrink: 1
        padding: 15px

      .frame
        width: 100%

      iframe
        border-radius: 15px


      h2
        text-orientation: sideways
        writing-mode: vertical-rl
        position: absolute
        left: 2%
        top: 25%
        bottom: 25%


    @media screen and (min-width: 1250px)
      .main
        margin-block: 60px

      .title
        width: 50%

      .music
        flex-direction: row

</style>