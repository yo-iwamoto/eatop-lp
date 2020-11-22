<template>
  <div class="about-wrapper">
    <transition name="fade">
      <div class="about-mv"></div>
    </transition>
    <section class="about-main">
      <h1 class="about-main-title">共に作り、共に食べる</h1>
      <h3 class="about-main-subtitle">EATOPの目的</h3>
      <div class="text-box top">
        <p>ライフスタイルの急激な変化で
          <br>かつての、「誰かとご飯を食べる」という＜共食＞の機会は次第になくなり
          <br>一人でご飯を食べる＜孤食＞が広まりつつあります
        </p>
        <p>本来食事の場は、感情にあふれ、
          <br>たくさんの会話が交わされる、互いに学び合える場所でした
          <br>そうした場所が失われそうな今だからこそ、
          <br>もう一度、コミュニケーションとしての＜共食＞を大切にしたい
          <br>そんな思いで、2018年6月から、この活動は始まりました
        </p>
        <p>この活動で目指しているのは、「共に作り、共に食べる」ができる、環境作り
          <br>では、このEATOPの活動では、誰と誰が「共に作り、食べる」のか
        </p>
      </div>
      <h3 class="about-main-subtitle">登場人物は3人です</h3>
      <div class="text-box bottom">
        <p>1人目は、この土地の食の魅力を知らない大学生
          <br>2人目は、学生との繋がりがなかなか生まれない地域の方
          <br>3人目は、九州大学、日本に来てくれた留学生
          <br>この三者が、「食べる」というコミュニケーションを通して
          <br>紡ぎ出す物語を楽しみに、EATOPは活動しています
        </p>
        <p>「糸島」は豊かな食の宝庫
          <br>この場所にあるものの「価値」を存分に生かして
          <br>普段あまり交わらないもの同士
          <br>美味しい食事を、みんなで美しく作って、食べる
        </p>
      </div>
    </section>
    <section class="members">
      <div class="rep-container">
        <img src="../assets/images/about/tanaka.png" alt="田中 稀ひろ" class="rep img">
        <div class="rep profile">
          <div class="rep profile-info">
            <h3>EATOP 代表</h3>
            <h2>田中 稀ひろ</h2>
            <p>TANAKA KIHIRO</p>
            <p>●九州大学 共創学部3年
              <br>●2020年4月より代表を務める</p>
          </div>
          <div class="rep profile-comment">
            <p>アットホームで居心地のいい空間作りのできる
              <br>EATOPの仲間と活動を誇りに思っています
              <br>今年は新型コロナウイルス感染症拡大の影響で
              <br>思うように活動ができていない面も多いですが
              <br>今後もこの活動を広げていくために代表を務め上げたいです！
            </p>
          </div>
        </div>
      </div>
      <div class="founder-container">
        <img src="../assets/images/about/sasazu.png" alt="笹津 敏靖" class="founder img">
        <div class="founder profile">
          <div class="founder profile-info">
            <h3>創設者</h3>
            <h2>笹津 敏靖</h2>
            <p>SASAZU TOSHINOBU</p>
            <p>●九州大学 21世紀プログラム学科4年
              <br>●2018年6月 EATOPを創設</p>
          </div>
          <div class="founder profile-comment">
            <p>「ただいま」って言える場所は
              <br>必ずしも実家じゃなくてもいいんじゃないかなと
              <br>大勢で囲って食べることができる食卓こそ
              <br>万国共通の最高の「帰る場所」だと思うんですよね
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="reviews">
      <h2>イベント参加者の声</h2>
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

.highlight
  background: linear-gradient(transparent 70%,#FFC1AE 90%)

.about

  &-mv
    margin: 0 auto
    height: 500px
    width: 90%
    background: url(../assets/images/about/slider1.png)
    background-repeat: no-repeat
    background-position: center center
    background-size: cover
    box-shadow: inset 0 0 5px 5px $beige

  &-main
    margin: 40px auto 70px
    width: 80vw
    max-width: 1000px
    min-width: 700px

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

      p
        padding: 10px 0
        font-size: 18px
        color: $gray

      &.top
        margin-right: auto
        width: 670px

      &.bottom
        margin-left: auto
        width: 530px
        
.members
  padding: 0 30px
  margin: 0 auto
  text-align: left
  max-width: 800px


  .profile-comment
    padding: 20px 0

  .rep
    
    
    &.img
  
    &.profile
    

  .founder-container
    margin: 50px 0

  .founder

    &.img

    &.profile

@media (min-width: $breakpoint-lg)
  .members
    max-width: 1000px

    .img
      width: 300px
</style>