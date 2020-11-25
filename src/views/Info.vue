<template>
  <div class="info-wrapper">
    <div class="info-title">
      <h1>新型コロナウイルス感染症への対応について</h1>
      <h2>2020/11/25更新</h2>
    </div>
    <div class="info-main">
      <div class="section a">
        <h3>● EATOPの今後の活動について</h3>
        <p>現在、新型コロナウイルス感染症の影響により、まだまだ色々なことが思うようにいかない状況が続いています。
          今まで誰かとご飯を食べていたのに、その誰かに急に会えなくなり、一人で食事を取ることが多くなった方もいるかもしれません。
          もちろん、一人で食べる方が気楽でいいという方も多いかもしれません。
          ただ、一人でご飯を食べるたびに、「寂しいな」と感じてしまう人が、きっといます。
          今はEATOPのイベントはご用意できていませんが、2021年よりまたイベントを再開していく予定です。
          寂しくなったら、是非、一緒にご飯を食べませんか？
          十分に感染対策を講じた上で、お待ちしています。
        </p>
      </div>
      <div class="section b">
        <h3>● イベントに参加される方へ</h3>
        <p>新型コロナウイルスの感染予防・対策につきましては、みなさま一人一人の協力が必要です。
          イベントに参加する際には、以下をよくご覧になって、安全性に十分配慮していただいた上でお越しください。
          感染防止のため、次の事項について、ご協力をよろしくお願いいたします。
        </p>
        <ul>
          <li>１．会場についたら、すぐに手洗い・うがいをしてください。</li>
          <li>２．タオルの共有を避け、使い捨てペーパーや自分のハンカチ等を使ってください。</li>
          <li>３．体調に注意し、体調がすぐれない場合は参加を中止してください。</li>
        </ul>
        <p>安心・安全にイベントをお楽しみいただけるよう、ご協力よろしくお願いいたします！</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/sass/styles.sass';

.info

  &-wrapper
    padding: 20px 40px
    text-align: justify
    width: 100%
    max-width: 800px
    margin: 0 auto

  &-title
    font-size: 15px
    padding-bottom: 15px
    margin-bottom: 15px
    border-bottom: 1px solid $gray

.section
  padding-bottom: 20px

  h3
    font-size: 20px
    padding-bottom: 10px

  p
    font-size: 17px

  ul
    list-style: none
    padding: 20px 0
  
</style>