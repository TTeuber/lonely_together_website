<script lang="ts">
    import type {YouTubeContent} from "../routes/+page.svelte";
    import {onMount} from "svelte";

    type musicContent = {
        src: string,
        title: string;
        link?: string
    }

    let musicLinks: musicContent[] = [
        {src: "/albums/copingmechanisms.png", title: "Coping Mechanisms", link: "https://fanlink.to/copingmechanisms"},
        {src: "/albums/inmyhead.png", title: "In My Head", link: "https://fanlink.to/inmyheadlt"},
        {src: "/albums/otherside.png", title: "The Otherside", link: "https://www.fanlink.to/TheOthersideLT"}
    ]
    let slider: HTMLElement;

    let num = 0;

    onMount(() => {
        slider.addEventListener("scroll", () => {
            num = Math.floor((slider.scrollLeft / slider.scrollWidth) * musicLinks.length + 0.5);
        })
    })


</script>

<section>
    <div class="buffer" id="music"></div>
    <div class="main">
        <h2>Music</h2>
        <div class="slider-container">
            <button class="left" on:click={() => slider.scrollBy(-slider.scrollWidth / musicLinks.length, 0)} disabled={num === 0}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 2 20 20">
                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                </svg>
            </button>
            <div class="slider" bind:this={slider}>
                {#each musicLinks as link}
                    <div class="music">
                        <div class="frame">
                            <a href={link.link} style="display: contents" target="_blank" rel="noreferrer noopener">
                                <img src={link.src} alt={link.title} class="album-cover">
                            </a>
                        </div>
                        <div class="title">
                            <a href={link.link} style="display: contents; color: black" target="_blank" rel="noreferrer noopener">
                                <h3>{link.title}</h3>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
            <button class="right" on:click={() => slider.scrollBy(slider.scrollWidth / musicLinks.length, 0)} disabled={num === musicLinks.length - 1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 2 20 20" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
    <div class="slider-markers">
        {#each musicLinks as link, index}
            <div class="markers" data-index={index === num} on:click={() => {
                slider.scrollTo((slider.scrollWidth / musicLinks.length) * index, 0)
            }}></div>
        {/each}
    </div>
</section>

<style lang="sass">
    section
      position: relative
      //background: hsl(180, 20%, 70%)
      //background-image: linear-gradient(hsl(180, 20%, 70%), hsl(0, 20%, 70%))
      background-image: linear-gradient(to bottom, hsl(0, 30%, 70%), hsl(280, 30%, 55%))
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
      color: white
      font-size: 4rem
      bottom: 50%
      padding: 0
      z-index: 10
      display: none

      svg
        width: 4rem
        cursor: pointer

      &:disabled svg
        //fill: #666
        opacity: 40%
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
      //aspect-ratio: 1

    .album-cover
      width: 100%
      height: auto
      aspect-ratio: 1
      box-shadow: 3px 3px 8px hsla(0,0%,20%,50%)

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

    @media screen and (min-width: 640px)
      button
        display: inline
      .main
        //flex-direction: row
        justify-content: center
        position: relative

      .slider-container
        justify-content: center
        align-items: center
        //width: 80%

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
        display: flex
        justify-content: center
        align-items: center

        .album-cover
          width: 80%
          border-radius: 15px




    @media screen and (min-width: 900px)
      .main
        flex-direction: row
      .slider-container
        width: 80%
      h2
        text-orientation: sideways
        writing-mode: vertical-rl
        position: absolute
        left: 2%
        top: 25%
        bottom: 25%


    @media screen and (min-width: 1000px)
      .main
        margin-block: 60px
      .title
        width: 50%
      .music
        flex-direction: row
      .frame
        width: 50%
        img
          width: 100%

    a:hover
      color: #555
</style>