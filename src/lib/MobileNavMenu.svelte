<script lang="ts">
    import {getContext} from "svelte";
    import type {Writable} from "svelte/store";

    export let showMobNav: Writable<boolean>;
</script>

<div class="background">
    <div class="buffer"></div>
    <div class="x" on:click={() => showMobNav.set(false)}>
        <img src="/svgs/x.svg" alt="x">
    </div>
    <div class="nav-container">
        <img src="/navtitle.png" alt="lonely together">
    </div>
    <div class="container">
        <ul class="pages">
<!--            <li>{$showMobNav}</li>-->
            <li><a href="/" on:click={() => showMobNav.set(false)}>Home</a></li>
            <li><a href="/#music" on:click={() => showMobNav.set(false)}>Music</a></li>
            <li><a href="/#videos" on:click={() => showMobNav.set(false)}>Videos</a></li>
            <li><a href="/lt/shop" on:click={() => showMobNav.set(false)}>Shop</a></li>
            <li><a href="/lt/about" on:click={() => showMobNav.set(false)}>About</a></li>
            <li><a href="/lt/services" on:click={() => showMobNav.set(false)}>Services</a></li>
        </ul>
        <ul class="socials">
            <li><a href="https://open.spotify.com/artist/4u5WYjo12NK2Qt9pv2LtEV?si=cBk-JBK-R4CXL51lOwTfzg"><img src="/socials/spotify.png" alt="spotify"></a></li>
            <li><a href="https://music.apple.com/us/artist/lonely-together/1399414250"><img src="/socials/apple.png" alt="apple"></a></li>
            <li><a href="https://www.youtube.com/channel/UCCeGeB45MdDlU7y1CO1KJGg"><img src="/socials/youtube.png" alt="youtube"></a></li>
            <!--        <li><a href="https://www.tiktok.com/@lonelytogethermusic?is_from_webapp=1&sender_device=pc"><img src="/socials/tiktok.png" alt="tiktok"></a></li>-->
            <li><a href="https://www.instagram.com/lonelytogethermusic/"><img src="/socials/instagram.png" alt="instagram"></a></li>
            <li><a href="https://twitter.com/lonely2gether_"><img src="/socials/twitter.png" alt="twitter"></a></li>
            <li><a href="https://www.facebook.com/Lonely-Together-941835562667436/"><img src="/socials/facebook.png" alt="facebook"></a></li>
            <!--        <li><a href="https://soundcloud.com/lonelytogethermusic"><img src="/socials/soundcloud.png" alt="soundcloud"></a></li>-->
        </ul>
    </div>
</div>

<style lang="sass">
    .nav-container
      width: 50%
      margin: auto

      img
        width: 100%
        filter: hue-rotate(100deg)

    .x
      position: absolute
      top: 20px
      left: 20px
      width: 12vw
    a
      color: #ccc
      text-decoration: none
      text-shadow: 1px 1px 1px #333
    li
      list-style: none
    .buffer
      height: 4rem
      width: 100%
    .background
      background: linear-gradient(var(--blue), var(--purple), var(--green))
      position: fixed
      inset: 0
      height: 100vh
      z-index: 55

      .pages
        text-align: center
        font-size: 7vh

      .socials
        display: flex
        justify-content: center

        img
          filter: invert(100%)
          width: 12vw

</style>