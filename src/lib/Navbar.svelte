<script lang="ts">
    import {getContext, onMount} from "svelte";

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


</script>

<nav style="--color: {color}; --nav-height: {navHeight}; --logo-size: {logoSize}; --opacity: {navOpacity}">
    <div class="nav-background" style="--nav-height: {navHeight};"></div>
    <ul style>
        <li>Home</li>
        <li>Listen</li>
        <li>Press</li>
    </ul>
    <div class="logo-container">
<!--        <h1>Lonely Together</h1>-->
        <img src="/navtitle.png" alt="Lonely Together Logo" class="nav-logo">
    </div>
    <ul>
        <li>About</li>
        <li>Services</li>
        <li>Socials</li>
    </ul>
</nav>

<style lang="sass">
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
      opacity: var(--opacity)

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
      backdrop-filter: hue-rotate(180deg)
      opacity: var(--opacity)
      color: black

    .logo-container
      flex-grow: 1
      display: flex
      justify-content: center
      align-items: center
      height: 100%
      padding: 0
</style>