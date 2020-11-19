<template>
  <div id="wrapper">
    <transition name="fade">
      <div id="about-mv"></div>
    </transition>
    <section id="introduction">
      <br><br>
      <h1 id="about-title">共に作り、共に食べる</h1>
      <div id="description">
        <h3>EATOPの目的</h3>
        <p>ライフスタイルの急激な変化で<br>かつての「誰かとご飯を食べる」という＜共食＞の概念はくずれ、
        <br>一人でご飯を食べる＜孤食＞が広まりつつあります。
        <br>本来食事の場は、たくさんの会話が交わされる、
        <br>感情にあふれた、互いに学び合える場所でした。
        <br>そうした場所が失われそうな今だからこそ、
        <br>もう一度<span class="highlight">コミュニケーションとしての＜共食＞</span>を大切にしたい。
        <br>そんな思いで、2018年6月から、この活動は始まりました。<br>
        <br>この活動で目指しているのは、「共に作り、共に食べる」ができる、環境作り。<br>では、このEATOPの活動で、誰と誰が「共に作り、食べる」環境を作るのか。</p>
        <br>
        <h3>登場人物は3人です。</h3>
        <p>1人目は、この土地の「食の魅力」をしらない大学生。<br>2人目は、学生とは、繋がりがなかなか生まれない地域の方。<br>3人目は、九州大学（日本）に来てくれた留学生。<br>この三者が、
        <br>「食べる」というコミュニケーションを通して紡ぎ出す物語を楽しみに
        <br>EATOPは活動しています。</p>
        <br>
        <p>「糸島」は豊かな食の宝庫。<br>この場所にあるものの「価値」を存分に生かして。<br>普段あまり交わらないもの同士。<br><span class="highlight">美味しい食事を、みんなで美しく作って、食べる。</span></p>
      </div>
    </section>
    <section id="members">
      <div id="tanaka">
        <div id="tanaka-left">
          <div id="tanaka-profile">
            <h3>代表</h3>
            <h2>田中  稀ひろ</h2>
            <h4 class="spacing">TANAKA KIHIRO</h4>
            <h4>九州大学 共創学部3年 2代目代表</h4>
          </div>
          <div id="tanaka-balloon">
            <p>アットホームで居心地のいい空間作りのできる
            <br>EATOPの仲間と活動を誇りに思っています。
            <br>今年は新型コロナウイルス感染症拡大の影響で
            <br>思うように活動ができていない面も多いですが
            <br>今後もこの活動を広げていくために代表を務め上げたいです！</p>
          </div>
        </div>
        <div id="tanaka-right">
          <img src="../assets/images/about/tanaka.png" alt="田中 稀ひろ" id="tanaka-img">
        </div>
      </div>
      <div id="sasazu">
        <div id="sasazu-left">
          <img src="../assets/images/about/sasazu.png" alt="笹津 敏靖" id="sasazu-img">
        </div>
        <div id="sasazu-right">
          <div id="sasazu-profile">
            <h3>創設者</h3>
            <h2>笹津  敏靖</h2>
            <h4 class="spacing">SASAZU TOSHINOBU</h4>
            <h4>九州大学 21世紀プログラム学科4年 2018年6月にEATOPを創設</h4>
          </div>
          <div id="sasazu-balloon">
            <p>「ただいま」って言える場所は
            <br>必ずしも実家じゃなくてもいいんじゃないかなと。
            <br>大勢で囲って食べることができる食卓こそ
            <br>万国共通の最高の「帰る場所」だと思うんですよね。</p>
          </div>
        </div>
      </div>
    </section>
    <h2 id="section-title">イベント参加者の声</h2>
    <section id="voice">
      <div class="participant">
        <img src="../assets/images/top/participants/farmer.png" alt="地域の方々">
        <div id="text-box">
          <h2 id="farmer">地域の方々</h2>
          <p>日本の学生や海外からの留学生に農作業体験をしてもらい、お礼に料理を振る舞っています。作業も楽になるし、若者との接点もできて、いいことばかりです。</p>
        </div>
      </div>
      <div class="participant">
        <img src="../assets/images/top/participants/student.png" alt="地域の方々">
        <div id="text-box">
          <h2 id="student">大学生</h2>
          <p>大人数でご飯を囲むので、餃子や鍋など、一人暮らしだとなかなか食べることがない料理を食べる機会ができます！なにより、みんなで食べるご飯は美味しい！</p>
        </div>
      </div>
      <div class="participant">
        <img src="../assets/images/top/participants/foreignStudent.png" alt="地域の方々">
        <div id="text-box">
          <h2 id="foreignstudent">留学生</h2>
          <p>イベントの中で日本人と、日本の食文化のことだけでなく、自分の国の料理についても話せる。食文化以外の色々な体験ができるのも嬉しい！</p>
        </div>
      </div>
    </section>
    <h1 id="title">サポーター</h1>
    <section id="partners">
      <div class="partner">
        <img src="" alt="">
        <p>COMING SOON!!</p>
      </div>
      <div class="partner">
        <img src="" alt="">
        <p>COMING SOON!!</p>
      </div>
      <div class="partner">
        <img src="" alt="">
        <p>COMING SOON!!</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#tanaka-img,
#sasazu-img {
  width: 100%;
}

#tanaka-right,
#sasazu-left {
  width: 35%;
}

#tanaka-right {
  float: right;
}

#sasazu-right {
  float: right;
}

#tanaka-left,
#sasazu-right {
  width: 65%;
  background: #fff;
}

.highlight {
  background: linear-gradient(transparent 70%,#FFC1AE 90%)
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.8s;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  margin: 0;
}

body {
  text-align: center;
}

#about-mv {
  margin: 0 auto;
  height: 500px;
  width: 90%;
  background-image: url(../assets/images/about/slider1.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

@media (min-width: 1400px) {
    #about-mv {
        height: 650px;
    }
}

#introduction {
  margin: 40px 0 70px;
}

#about-title {
  font-size: 30px;
  margin-bottom: 30px;
  letter-spacing: 5px;
  text-align: center;
}

#about-title::before {
  content: '「'
}

#about-title::after {
  content: '」'
}

#description {
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}

#description h3 {
  color: #55a740;
}

@media (min-width: 1000px) {
  #members,
  #partners,
  #voice {
    width: 1000px;
    margin: 0 auto;
  }
}

#title {
  font-size: 30px;
  margin: 50px 0;
  letter-spacing: 5px;
  text-align: center;
}

#section-title {
  text-align: center;
  width: 250px;
  margin: 50px auto;
  position: relative;
}

#voice {
  display: flex;
  justify-content: space-around;
}

#text-box {
  text-align: center;
  background: #fff;
  border-radius: 15px;
}

.participant {
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 50px;
}

.participant > img {
  width: 80%;
  margin-bottom: 20px;
}

#text-box > h2 {
  padding: 5px 0;
  font-size: 20px;
  color: #fff;
  border-radius: 15px 15px 0 0;
}

#farmer {
  background: #c1e396;
}

#student {
  background: #ffc1ae;
}

#foreignstudent {
  background: #b5d2ff;
}

#text-box > p {
  font-size: 15px;
  opacity: .9;
  padding: 15px;
}

#partners {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

</style>
