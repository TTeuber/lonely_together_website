<script lang="ts">
    import {onMount} from "svelte";
    import Videos from "../lib/Videos.svelte";
    import Music from "$lib/Music.svelte";
    import Contact from "$lib/Contact.svelte";

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let el: Element;
    let height;
    onMount(() => {
        el = document.querySelector(".target");
        window.addEventListener("scroll", () => {
            height = window.scrollY
        })
    })

    export type YouTubeContent = {
        src: string,
        title: string
    }

    const embedLinks: YouTubeContent[] = [
        {src: "https://www.youtube.com/embed/2TyWwbvKyLo", title: "The Otherside"},
        {src: "https://www.youtube.com/embed/DNkuxnXFKgo", title: "Haunted"},
        {src: "https://www.youtube.com/embed/zDNKJ3npFqM", title: "Can't Believe It"}
    ]

    let container: HTMLElement;



</script>
<div>
    <div class="logo"></div>
    <Music></Music>
    <div class="blueroom">
        <div class="background"></div>
        <div class="img-container"></div>
    </div>
    <Videos embedLinks={embedLinks}></Videos>
    <Contact></Contact>
</div>

<style lang="sass">
    .logo
      width: 100vw
      height: 80vw
      background-image: url("/biglogo.jpg")
      background-size: cover
      background-position: center

    @media screen and (min-width: 640px)
      .logo
        height: 50vw

    @media screen and (min-width: 1200px)
      .logo
        height: 40vw
        background-position-y: -150px

    .blueroom
      width: 100%
      overflow: hidden
      display: flex
      justify-content: center
      position: relative
      height: 50vw
      //background-image: linear-gradient(hsl(100, 30%, 70%), hsl(280, 30%, 70%))

      .background
        position: absolute
        height: 100%
        width: 100%
        background-image: url("/blueroom.JPG")
        background-size: cover
        background-position: center
        filter: blur(10px)

      .img-container
        width: 100%
        overflow: hidden
        z-index: 10
        background-image: url("/blueroom.JPG")
        object-fit: cover
        background-size: cover
        background-position: center

        img
          width: 100%

    @media screen and (min-width: 640px)
      .blueroom
        height: 30vw

        .img-container
          width: 60%
</style>