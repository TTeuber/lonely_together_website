<section>
    <h1>Shop</h1>
    <video src="/merch.mp4" controls class="video-container"></video>
    <p>Lonely Together Collaborated with Illustrator/Graphic Artist BxPacific to bring fans the 'Coping Mechanisms' merch line inspired by the band's new EP. To place an order, click the link below or visit www.bxpacific.com/shop. Thanks for supporting local artists!</p>
    <a href="http://www.bxpacific.com/shop" target="_blank" rel="noreferrer noopener">View Merchandise</a>
</section>

<style lang="sass">
    section
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      padding: 1rem

      p
        width: 70%
        text-align: center
        margin: 2rem

      a
        text-decoration: none
        color: #ccc
        background: #333333
        padding: 1rem
        cursor: pointer
        border-radius: 10px

        &:hover
          background: black


    .video-container
      width: 70%
      aspect-ratio: 2.5
      background: black
      margin: 2rem
      box-shadow: 1px 1px 5px black
      border-radius: 10px

    h1
      font-size: 4rem
      margin: 0
      color: var(--pink)
      text-shadow: 1px 1px 2px #333

    @media screen and (max-width: 800px)
      section
        padding-inline: 0
        p
          width: 90%
      .video-container
        width: 100%
        border-radius: 0
        aspect-ratio: 2


</style>
