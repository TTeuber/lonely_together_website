<script lang="ts">
    import {getContext, onMount, setContext} from "svelte";
    import MobileNavMenu from "$lib/MobileNavMenu.svelte";
    import {writable} from "svelte/store";

    let colors = getContext("mainColors");
    let color = getContext("mainColor");

    let height = 0;

    onMount(() => {
        window.addEventListener("scroll", () => {
            height = window.scrollY;
        })
    })

    let navHeight;
    let navOpacity;
    let logoSize;

    const getNavHeight = (height) => {
        if (height <= 0) {
            return 10 + "rem"
        }
        else if (height < 180) {
            return ((100-(height/3))/10) + "rem"
        }
        else return "4rem"
    }

    const getNavOpacity = (height) => {
        if (height <= 0) {
            return "100%"
        }
        else if (height < 180) {
            return 100 - (height/6) + "%"
        }
        else return "50%"
    }

    const getLogoSize = (height) => {
        if (height <= 0) {
            return "5rem"
        }
        else if (height < 180) {
            return (5 - (height/180)*3) + "rem"
        }
        else {
            return "2rem"
        }
    }

    $: navHeight = getNavHeight(height);
    $: navOpacity = getNavOpacity(height);
    $: logoSize = getLogoSize(height);

    let showMobNav = writable(false);

</script>

<div class="buffer" style="--height: {navHeight}"></div>
<nav style="--color: {color}; --nav-height: {navHeight}; --logo-size: {logoSize}; --opacity: {navOpacity}">
    <div class="nav-background" style="--nav-height: {navHeight};"></div>
        <div class="hamburger" on:click={() => {showMobNav.update(n => !n); console.log("test")}}>
            {#if !$showMobNav}
                <img src="/svgs/hamburger.svg" alt="hamburger menu">
            {:else}
                <img src="/svgs/x.svg" alt="x">
            {/if}
        </div>
        <ul class="pages">
            <li><a href="/#music">Music</a></li>
            <li><a href="/#videos">Videos</a></li>
            <li class="top-shop"><a href="/lt/shop">Shop</a></li>
            <li class="more">
                More
                <div>
                    <ul>
                        <li class="drop-shop"><a href="/lt/shop" >Shop</a></li>
<!--                        <li><a href="/lt/press">Press</a></li>-->
                        <li><a href="/lt/services">Services</a></li>
                        <li><a href="/lt/about">About</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    <div class="logo-container">
        <a href="/" style="display: contents">
            <img src="/navtitle.png" alt="Lonely Together Logo" class="nav-logo">
        </a>
    </div>
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
</nav>
{#if $showMobNav}
    <MobileNavMenu showMobNav={showMobNav}/>
{/if}

<style lang="sass">
    .hamburger
      display: none
      position: absolute
      left: 20px
      cursor: pointer
      img
        width: 40px
    a
      text-decoration: none
      height: 100%
      display: flex
      align-items: center
      color: black

    .buffer
      width: 100%
      position: static
      height: var(--height)

    nav
      color: #222
      margin: 0
      top: 0
      display: flex
      align-items: center
      justify-content: space-around
      position: fixed
      width: 100vw
      height: var(--nav-height)
      padding: 0
      z-index: 50

    .mob-nav
      position: fixed
      inset: 0
      background: linear-gradient(var(--pink), var(--blue))
      z-index: 50
      display: none

      ul
        display: flex
        flex-direction: column

    .drop-shop
      display: none

    @media screen and (max-width: 900px)
      .top-shop
        display: none

      .drop-shop
        display: inline


    @media screen and (max-width: 800px)
      .buffer
        height: 4rem

      nav
        height: 4rem


    .nav-logo
      height: 80%
      filter: hue-rotate(30deg)

    .nav-background
      background-image: linear-gradient(to bottom, var(--pink), var(--blue-80))
      backdrop-filter: blur(5px)
      position: absolute
      width: 100%
      height: var(--nav-height)
      z-index: -1
      left: 0
      top: 0

    @media screen and (max-width: 800px)
      .nav-background
        height: 4rem

    ul
      display: flex
      justify-content: space-between
      list-style: none
      width: 20rem
      height: 100%
      margin: 0
      padding: 0
      flex-grow: 1

    li
      font-size: 1.5rem
      margin-left: 0
      height: 100%
      flex-grow: 1
      display: flex
      align-items: center
      justify-content: center

    li:hover
      cursor: pointer

      a
        color: #666

    .logo-container
      flex-grow: 1
      display: flex
      justify-content: center
      align-items: center
      height: 100%
      padding: 0

    @media screen and (max-width: 800px)
      .logo-container
        flex-grow: 0.6

    .socials
      img
        filter: invert(100%)
        width: 2rem


      li:hover
        img
          opacity: 70%

    .more
      position: relative
      div
        position: absolute
        background: linear-gradient(var(--blue-80), var(--blue-50))
        backdrop-filter: blur(5px)
        top: 100%
        transform: translateY(-300%)
        transition: transform ease-out 300ms
        z-index: -10

        ul
          width: 100%
          display: flex
          flex-direction: column
          align-items: start
          gap: 1rem
          //margin-block: 1rem
          padding: 1rem

      &:hover
        div
          transform: translateY(0%)

          a
            color: black
        ul

          li
            color: black

            a:hover
              color: #666

   @media screen and (max-width: 700px)
     .hamburger
       display: inline
     .pages
       display: none
     .socials
        display: none

</style>