<section>
    <div class="img-container">
        <h1>Services</h1>
        <img src="/services.png" alt="services">
    </div>
    <div class="services">
        <div class="headings">
            <h1>Audio Services We Offer <br>(Bellingham, WA)</h1>
            <h2>Specializing in pop, r&b, and hiphop</h2>
            <p>Accepts payments via credit/debit or cash. Clients will be billed through Quickbooks.</p>
        </div>
        <div class="items">
            <div>
                <h3>Music Production</h3>
                <p>Starts at $50/song</p>
            </div>
            <div>
                <h3>
                    Mixing
                </h3>
                <p>$40 per hour</p>
            </div>
            <div>
                <h3>Vocal Recording</h3>
                <p>$40 per hour</p>
            </div>
            <div>
                <h3>DJ for Events</h3>
                <p>$100 per hour</p>
            </div>
        </div>
    </div>
</section>
<div class="contact">
    <h2>Contact Us</h2>
    <p>We'd love to be a part of your next audio production. Get in touch with us today and we will respond within 24 hours.</p>
    <p>lonelytogethermusic@gmail.com</p>
    <form method="post">
        <input type="text" name="name" placeholder="Name">
        <input type="email" name="email" placeholder="Email">
        <input type="tel" name="phone" placeholder="Phone">
        <input type="text" name="services" placeholder="Service(s) you are interested in">
        <textarea name="description" placeholder="Anything else you want us to know..."></textarea>
        <button type="submit">Submit</button>
    </form>
</div>

<style lang="sass">
    //*
    //  outline: 4px solid rgba(111,111,111,30%)
    section
      display: flex
      isolation: isolate
      width: 100%

    .services
      background: #333
      width: 50%
      //min-width: 700px
      display: grid
      place-items: center
      //flex-grow: 1

      .items
        width: 600px
        //min-width: 600px
        padding: 0
        margin: auto
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: auto
        gap: 4rem

      h1
        font-size: 3rem
        color: var(--pink)

      h2
        color: #ccc
        font-size: 2rem

      h3
        font-size: 1.5rem
        margin: 0
        color: var(--pink)

      p
        color: #ccc

    .img-container
      z-index: -1
      width: 50%
      height: 90vh
      max-height: 1200px
      min-height: 600px
      //flex-shrink: 1
      overflow: hidden
      position: relative
      //border: 1px solid red

      h1
        position: absolute
        z-index: 10
        top: 50%
        left: 50%
        padding: 1rem
        transform: translateX(-50%) translateY(-100%)
        color: var(--pink)
        font-size: 7rem
        //background: hsla(0,0%,30%,50%)
        border-radius: 20px
        //box-shadow: 1px 1px 5px #333
        text-shadow: 1px 1px 5px black


    @media screen and (max-width: 1200px)
      section
        flex-direction: column

      .img-container
        width: 100%
        height: 50vh

      img
        width: 100%
        object-fit: cover
        object-position: center

      .services
        width: 100%
        box-sizing: border-box
        padding: 3rem

    @media screen and (max-width: 750px)
      img
        height: 100%

      .services
        .headings
          width: 80vw
        .items
          width: 80vw
          grid-template-columns: 1fr

    .contact
      width: clamp(800px, 85%, 1100px)
      margin-inline: auto
      text-align: center
      background: hsla(0,0%,80%,10%)
      border-radius: 20px
      box-shadow: 1px 1px 5px hsla(0,0%,30%,50%)
      padding: 2rem
      margin-block: 2rem
      box-sizing: border-box

      h2
        font-size: 3rem
        margin: 0

      p
        font-size: 1.1rem

    @media screen and (max-width: 900px)
      .contact
        margin-top: 0
        width: 100%
        border-radius: 0

    form
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: repeat(4, 2.75rem) 7rem 2.75rem

    button
      background: #222
      color: #ccc
      border: none
      font-size: 1.5rem
      cursor: pointer
      border-radius: 3px

      &:hover
        background: black

    input, textarea
      background: none
      font-size: 1.5rem
      border: none
      border-bottom: 1px solid black
      box-sizing: border-box
      padding: 8px

      &:hover, &:focus
        border-bottom: none
        outline: 1px solid black

      &::placeholder
        color: #333

</style>