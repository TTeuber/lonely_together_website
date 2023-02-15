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
    <div class="buffer" id="videos"></div>
    <div class="main">
        <h2>Videos</h2>
        <div class="slider-container">
            <button class="left" on:click={() => slider.scrollBy(-slider.scrollWidth / embedLinks.length, 0)} disabled={num === 0}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20">
                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                </svg>
            </button>
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
            <button class="right" on:click={() => slider.scrollBy(slider.scrollWidth / embedLinks.length, 0)} disabled={num === embedLinks.length - 1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 20 20">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>
            </button>
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
      position: relative
      //background: hsl(180, 20%, 70%)
      //background-image: linear-gradient(hsl(180, 20%, 70%), hsl(0, 20%, 70%))
      background-image: linear-gradient(to top, var(--green), var(--purple))
      //border: 10px solid
      //border-image: linear-gradient(hsl(180, 20%, 70%), hsl(0, 20%, 70%))
      color: black
      margin: 0
      padding:
        top: 20px
        bottom: 20px

    .buffer
      position: absolute
      top: -3rem

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
      font-size: 4rem
      bottom: 50%
      padding: 10px
      z-index: 10
      display: none

      svg
        width: 4rem
        cursor: pointer
        fill: white

      &:disabled svg
        opacity: 30%
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
      box-shadow: 3px 3px 8px hsla(0,0%,20%,60%)

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

        svg
          fill: black

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