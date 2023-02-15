<section>
    <div class="img-container">
        <img src="/about.png" alt="lonely together">
    </div>
    <div class="content">
        <h1>
            Bringing the Lonely Together through music
        </h1>
        <h2>
            About 5,000 Monthly Listeners on Spotify | 100,000+ Streams on Spotify | 1,400 Followers on IG & 2,000 on Tik-Tok.
        </h2>
        <h2>
            Featured on KING 5 Evening Magazine, KUBE 93.3, Respect My Region, The Seattleite & more.
        </h2>
        <p>
            Lonely Together is a Pop/R&B duo based in Bellingham, Washington, that reaches listeners with their catchy melodies, genre-blending sound & all-inclusive message. Recommended for fans of artists like Trevor Daniel, Justin Bieber, and Blackbear. SAFE TRVLS, is the lead vocalist & producer/engineer of the duo, and Rosie is a Keyboardist, songwriter & vocalist. When performing live, they have an electric guitar player to accompany them.
        </p>
        <p>
            Lonely Together produces, writes, records, and engineers almost all of their own music and are influenced by many different genres, but tend to favor R&B, Hip-hop, and pop. SAFE TRVLS is the lead vocalist/songwriter, producer & engineer, who likes harder trap & alternative R&B soundscapes. Rosie is the main keyboardist, producer and vocalist, whose influences lean towards electro-pop and alternative/classic rock.
        </p>
    </div>
</section>

<style lang="sass">
    *
      //outline: 1px solid white
    section
      isolation: isolate
      position: relative
      padding: 5.5rem
    .content
      width: 900px
      max-width: 90%
      margin: auto
      padding: 2rem
      background: rgba(0,0,0,50%)
      border-radius: 20px
      box-shadow: 1px 1px 4px 3px rgba(111,111,111,30%)

    .img-container
      left: 0
      top: 0
      width: 100%
      height: 1000px
      position: absolute
      z-index: -1
      overflow: hidden

    img
      object-fit: cover
      object-position: center
      width: 100%
      height: 100%

    @media screen and (max-width: 1000px)
      section
        padding: 0
      .content
        box-sizing: border-box
        width: 100vw
        max-width: 100vw
        margin: 0
        border-radius: 0

      .img-container
        position: static
        height: 500px

    h1
      margin: 0
      font-size: 3rem
      color: var(--blue)

    h2
      color: var(--pink)
      font-size: 2rem

    p
      margin-bottom: 0
      color: white
      font-size: 1.2rem
</style>
