<script lang="ts">
    import {beforeUpdate, getContext, onMount} from "svelte";

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


    let isMobile = false
    onMount(() => {
      isMobile = (window.innerWidth <= 640 || window.innerHeight <= 640);
    })


</script>

<div class="buffer" style="--height: {navHeight}"></div>
<nav style="--color: {color}; --nav-height: {navHeight}; --logo-size: {logoSize}; --opacity: {navOpacity}">
    <div class="nav-background" style="--nav-height: {navHeight};"></div>
    <ul style>
        {#if isMobile}
            <li>
                hamburger
            </li>
        {:else}
            <li><a href="/#music">Music</a></li>
            <li><a href="/#videos">Videos</a></li>
            <li><a href="/lt/shop">Shop</a></li>
            <li class="more">
                More
                <div>
                    <ul>
                        <li><a href="/lt/press">Press</a></li>
                        <li><a href="/lt/services">Services</a></li>
                        <li><a href="/lt/about">About</a></li>
                    </ul>
                </div>
            </li>
<!--            <li>Press</li>-->
<!--            <li>Services</li>-->
<!--            <li><a href="/about">About</a></li>-->
        {/if}
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
<div class="mob-nav">
    <ul>
        <li><a href="#music"><p>Music</p></a></li>
        <li>Press</li>
        <li>Services</li>
        <li>Shop</li>
        <li><a href="/about">About</a></li>
    </ul>
</div>

<style lang="sass">
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
      background-image: linear-gradient(pink, darken(cyan, 20%))
      z-index: 50
      display: none

      ul
        display: flex
        flex-direction: column

    @media screen and (max-width: 800px)
      .buffer
        height: 4rem

      nav
        height: 4rem

    .nav-logo
      height: 80%

    .nav-background
      //background: var(--color)
      background-image: linear-gradient(to bottom, var(--color), hsl(180, 30%, 60%))
      position: absolute
      width: 100%
      height: var(--nav-height)
      z-index: -1
      left: 0
      top: 0
      //opacity: var(--opacity)

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
      //background: hsl(180, 20%, 60%)
      //backdrop-filter: hue-rotate(180deg)
      //opacity: var(--opacity)

      a
        color: #666

    .logo-container
      flex-grow: 1
      display: flex
      justify-content: center
      align-items: center
      height: 100%
      padding: 0

    .socials
      img
        filter: invert(100%)
        width: 2rem

      //@media screen and (max-width: 1000px)
      //  img
      //    width: 2rem

      li:hover
        img
          //filter: invert(70%)
          opacity: 70%

    .more
      div
        position: absolute
        width: 100vw
        height: var(--nav-height)
        max-height: 4rem
        //background: linear-gradient(to top, var(--color), hsl(180,30%, 60%))
        background: hsla(180,30%,80%,50%)
        top: 100%
        left: 0
        //display: none
        transform: translateY(-100%)
        transition: transform ease-out 200ms
        z-index: -10

      &:hover
        div
          //display: flex
          transform: translateY(0%)

          a
            color: black
        ul

          li
            color: black

            &:hover
              color: #666


</style>