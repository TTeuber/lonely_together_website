<section>
    <div class="wrapper">
        <h2>Contact Us</h2>
        <form action="post">
            <input type="text" placeholder="Name" class="name">
            <input type="email" placeholder="Email" class="email" required>
            <input type="text" placeholder="Subject" class="subject">
            <textarea placeholder="Type your message here..."></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>

<style lang="sass">
    section
      background-image: linear-gradient(var(--green), var(--blue))
      color: black
      padding: 1rem
      display: flex
      justify-content: center

    .wrapper
      width: 60%
      background: hsla(0,0%,90%,10%)
      padding: 5rem
      border-radius: 30px
      box-shadow: 1px 1px 5px hsla(0,0%,30%,50%)

    @media screen and (max-width: 900px)
      section
        padding: 0
      .wrapper
        width: 100%
        border-radius: 0
        padding: 0

        h2
          padding: 1rem
        form
          padding: 1rem

    h2
      font-size: 2rem
      margin: 0 0 3rem
      padding-inline: 0.2rem

    form
      display: grid
      grid-template-columns: repeat(2, minmax(0, 1fr))
      grid-template-rows: repeat(2, minmax(0, 1fr)) 3fr 1fr
      gap: 1rem

    @media screen and (max-width: 800px)
      form
        grid-template-columns: 100%
        grid-template-rows: repeat(3, minmax(0, 1fr)) 3fr 1fr

    input
      background: none
      border: none
      border-bottom: 1px solid black
      height: 3rem
      font-size: 2rem
      padding-inline: 5px

      &::placeholder
        color: #666


    .subject
      grid-column: span 2 / span 2

    textarea
      grid-column: span 2 / span 2
      background: none
      border: none
      border-bottom: 1px solid black
      font-size: 2rem
      padding-inline: 5px

      &::placeholder
        color: #666



    button
      border: 1px solid black
      background: black
      color: #ccc
      grid-column: span 2 / span 2
      font-size: 2rem
      cursor: pointer

      &:hover
        background: hsla(0,0%,20%,80%)

    @media screen and (max-width: 800px)
      .subject, textarea, button
        grid-column: span 1 / span 1

      input, textarea
        font-size: 1.5rem

    input, textarea
      box-sizing: border-box
      outline: none

    input:hover, textarea:hover
      border: 1px solid black

    input:focus, textarea:focus
      border: 1px solid black

</style>