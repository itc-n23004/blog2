import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'

const About = () => {
  return (
    <Container>
      <Hero title='About' subtitle='About development activities' />

      <PostBody>
        <p>
          Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインな
          ど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案
          し続けています。
        </p>
        <h2>モノづくりで目指していること</h2>
        <p>
          モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいこと
          を取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供
          が数多くありますが、特にそこを磨く作業に力を入れています。
        </p>
        <p>
          単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくり
          をしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックして
          もらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
        </p>
        <h3> 新しいことへのチャレンジ</h3>
        <p>
          今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでも
          いいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み
          出すようなモノづくりは、これからも続けていきたいです。
        </p>
      </PostBody>
    </Container>
  )
}
export default About
