<section>
    <div class="wrapper">
        <h3>Subscribe Form</h3>
        <form action="post">
            <input type="email" placeholder="Email Address">
            <button>Submit</button>
        </form>
        <p>lonelytogethermusic@gmail.com</p>
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
        <p>Designed and Created by Tyler Teuber (the Guitarist)</p>
    </div>
</section>

<style lang="sass">
    section
      display: flex
      justify-content: center
      color: black
      position: relative
      background-image: linear-gradient(hsl(180,30%,60%), hsl(0,20%,70%))

    h3
      font-size: clamp(2rem, 3vw, 3rem)
      text-align: center

    .wrapper
      height: 400px
      width: 70%
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      margin-bottom: 40px

    form
      display: flex
      justify-content: center
      flex-direction: column
      align-items: center
      min-width: 300px
      width: 50%

    input
      background: none
      border: none
      border-bottom: 1px solid black
      font-size: clamp(1.5rem, 1vw, 2rem)
      outline: none
      width: 100%
      padding: 5px

      &::placeholder
        color: #666

      &:focus
        border: 1px solid black

      &:hover
        border: 1px solid black

    button
      background: hsla(0,0%,80%,50%)
      border: 1px solid black
      font-size: clamp(1rem, 1vw, 1.5rem)
      width: 100%
      padding: 5px
      margin: 20px

    p
      opacity: 60%
      text-align: center

    ul
      display: flex
      gap: 1rem
      padding: 0

      li
        list-style: none

      img
        width: clamp(1.8rem, 3vw, 3rem)
        filter: invert(100%)

        &:hover
          filter: invert(80%)
</style>