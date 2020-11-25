<template>
  <div class="about-wrapper">
    <div class="slider">
      <div class="about-mvA"></div>
      <div class="about-mvB"></div>
      <div class="about-mvC"></div>
    </div>
    <section class="about-main">
      <h1 class="about-main-title">共に作り、共に食べる</h1>
      <h3 class="about-main-subtitle top-sub">EATOPの目的</h3>
      <div class="text-box top">
        <p>ライフスタイルの急激な変化で、かつての、「誰かとご飯を食べる」という＜共食＞の機会は次第になくなり、一人でご飯を食べる＜孤食＞が広まりつつあります。
        </p>
        <p>本来食事の場は、感情にあふれ、たくさんの会話が交わされる、互いに学び合える場所でした。そうした場所が失われそうな今だからこそ、もう一度、コミュニケーションとしての＜共食＞を大切にしたい。
          そんな思いで、2018年6月から、この活動は始まりました。
        </p>
        <p>この活動で目指しているのは、「共に作り、共に食べる」ができる、環境作りでは、このEATOPの活動では、誰と誰が「共に作り、食べる」のか。
        </p>
      </div>
      <h3 class="about-main-subtitle bot-sub">登場人物は3人です</h3>
      <div class="text-box bottom">
        <p>1人目は、この土地の食の魅力を知らない大学生<br>
          <br>2人目は、学生との繋がりがなかなか生まれない地域の方<br>
          <br>3人目は、九州大学、日本に来てくれた留学生<br>
          <br>この三者が、「食べる」というコミュニケーションを通して紡ぎ出す物語を楽しみに、EATOPは活動しています。
        </p>
        <p>「糸島」は豊かな食の宝庫。この場所にあるものの「価値」を存分に生かして。普段あまり交わらないもの同士。
        </p>
        <p>美味しい食事を、皆で美しく作って、食べる。</p>
      </div>
      <div class="top-img"></div>
      <div class="bot-img"></div>
    </section>
    <section class="members">
      <div class="rep-container">
        <div class="img-container">
          <img src="../assets/images/about/tanaka.png" alt="田中 稀ひろ" class="rep img">
        </div>
        <div class="rep profile">
          <div class="profile-text-wrapper">
            <div class="rep profile-info">
              <h3>EATOP 代表</h3>
              <h2>田中 稀ひろ</h2>
              <p>九州大学 共創学部3年
                <br>2020年4月より代表を務める</p>
            </div>
            <div class="rep profile-comment">
              <p>アットホームで居心地のいい空間作りのできるEATOPの仲間と活動を誇りに思っています。
                今年は新型コロナウイルス感染症拡大の影響で思うように活動ができていない面も多いですが、今後もEATOPの活動を広げていくために代表を務め上げたいです！
              </p>
            </div>
          </div>
          <div class="box-border"></div>
        </div>
      </div>
      <div class="founder-container">
        <div class="img-container">
          <img src="../assets/images/about/sasazu.png" alt="笹津 敏靖" class="founder img">
        </div>
        <div class="founder profile">
          <div class="profile-text-wrapper">
            <div class="founder profile-info">
              <h3>創設者</h3>
              <h2>笹津 敏靖</h2>
              <p>九州大学 21世紀プログラム学科4年
                <br>2018年6月 EATOPを創設</p>
            </div>
            <div class="founder profile-comment">
              <p>「ただいま」って言える場所は、必ずしも実家じゃなくてもいいんじゃないかなと。
                大勢で囲って食べることができる食卓こそ、万国共通の最高の「帰る場所」だと思うんですよね。
              </p>
            </div>
          </div>
          <div class="box-border"></div>
        </div>
      </div>
    </section>
    <section class="reviews">
      <h2></h2>
      <div class="review-wrapper">
        <div class="review">
          
        </div>
        <div class="review">

        </div>
        <div class="review">

        </div>
      </div>
    </section>
    <section class="supporter">

    </section>
  </div>
</template>

<script>
// import Balloon from '@/components/Balloon'

export default {
  // components: {
  //   Balloon
  // }
}
</script>

<style scoped lang="sass">
@import '../assets/sass/styles.sass';
@import '../assets/css/styles.css';

.slider
  overflow: hidden
  position: relative
  height: 500px
  width: 100%

  div
    opacity: 0
    animation: slideAnime 15s ease infinite

  div:nth-of-type(1)
    animation-delay: 0s
  div:nth-of-type(2)
    animation-delay: 5s
  div:nth-of-type(3)
    animation-delay: 10s

@keyframes slideAnime
  0%
    opacity: .5
  5%
    opacity: 1
  29%
    opacity: 1
  33%
    opacity: 0
  98%
    opacity: 0
  100%
    opacity: .5

.about

  &-mvA
    position: absolute
    left: 5%
    height: 100%
    width: 90%
    background-image: url(../assets/images/about/slider1.png)
    background-repeat: no-repeat
    background-position: center center
    background-size: cover
    box-shadow: inset 0 0 5px 5px $beige

  &-mvB
    @extend .about-mvA
    background-image: url(../assets/images/about/slider2.png)

  &-mvC
    @extend .about-mvA
    background-image: url(../assets/images/about/slider3.png)

  &-main
    margin: 40px auto 70px
    width: 80vw
    max-width: 1000px

    &-title
      font-size: 30px
      letter-spacing: 5px
      padding-bottom: 10px

      &::before
        content: '「'

      &::after
        content: '」'

    &-subtitle
      font-size: 24px
      margin: 25px 0

    .text-box
      padding: 15px 20px
      text-align: left
      width: 100%

      p
        padding: 10px 0
        font-size: 18px
        color: $gray

.top-img
  background-image: url(../assets/images/about/top.jpg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat

.bot-img
  @extend .top-img
  background-image: url(../assets/images/about/bottom.jpg)
        
.members
  padding: 0 30px
  margin: 0 auto
  text-align: left
  max-width: 1000px

  p
    font-size: 1.8vw

  .profile-comment
    margin-top: 5px
    padding: 15px 0 20px
    border-top: 1px solid $gray

  .profile
    background: white
    position: relative
    margin: 0 auto
    border-radius: 5px
    width: 100%
    text-align: left

    &-info
      p
        padding-top: 5px

    &-text-wrapper
      position: absolute
      top: 10%
      left: 10%
      padding: 0 20px 20px 0

    .box-border
      position: absolute
      width: 100%
      height: 100%
      top: 10px
      left: 15px
      border: 2px solid $gray

  .profile-info,
  .profile-comment
    position: relative

  .rep

    &.img
      max-height: 100%
      max-width: 100%
  
    &.profile
      min-height: 320px
      max-height: 500px
    
    // .box-border
    //   transform: rotate(2deg)

  .founder-container
    margin: 80px 0

  .founder

    &.img
      max-height: 120%
      max-width: 120%

    &.profile
      min-height: 270px
      max-height: 320px

    // .box-border
    //   transform: rotate(-2deg)

@media (max-width: $breakpoint-md)
  .members
    p
      font-size: 15px
  
@media (min-width: $breakpoint-lg)
  .members
    max-width: 1000px

    p
      font-size: 19px

  .slider
    height: 600px

</style>