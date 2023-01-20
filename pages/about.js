import Container from "components/container"
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";

export default function About(){
    return( 
        <Container>
            <Hero title="About" subtitle="About development activities" />
            <PostBody>
                <p>
                    Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、様々な技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                </p>
                <h2>モノづくりで目指していること</h2>
                <p>
                    モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れます。毎回課題解決テーマをもって「モノ」と向き合い制作し、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」へ答えを出していきます。
                </p>
                <h3>新しいことへのチャレンジ</h3>
                <p>
                    今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、いいものを作れるようにしています。小さなヒントから新しいものを作り出すようなモノづくりは、これからも続けていきたいです。
                </p>
            </PostBody>
            
            <Contact />
        </Container>
    )
}