import React from 'react'
import Tabs from '../components/Home/Tabs.js'
import Calendar from '../components/Home/Calendar'
import Card from '../components/Home/Card.js'
import Counter from '../components/Home/Counter.js'
import Gallory from '../components/Home/Gallory.js'
import RelatedSites from '../components/Home/RelatedSites.js'
import Footer from '../components/Footer/Footer.js'
import SlidePictures from '../components/Home/SlidePictures.js'
import Announce from '../components/Announcement/Announce.js'
import QnARecent from '../components/QnA/QnARecent'

const Home = () => {
  return (
    <>
      <div className="notification is-link is-light">
        <div className="container is-max-desktop">
          <div className="title">Activity.psu.ac.th</div>
          <div className="subtitle is-6">
            ระบบสมัครกิจกรรม มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่
          </div>
        </div>
      </div>
      <SlidePictures />

      <div className="container is-max-desktop">
        <hr />
        <Calendar />
        <hr />
      </div>

      <div className="columns">
        <div className="column is-1"></div>
        <div className="column ">
          <div className="title is-5">ประกาศ-ระเบียบ</div>
          <div className="box">
            <Announce />
          </div>
        </div>
        <div className="column">
          <div className="title is-5">Q & A</div>
          <div className="box">
            <QnARecent />
          </div>
        </div>
        <div className="column is-1"></div>
      </div>

      <div className="container is-max-desktop">
        <Tabs />
        <Card />
      </div>

      <div className="container is-max-desktop">
        <Gallory />
      </div>

      <Counter />

      <RelatedSites />
      {/*
      <section className="section"></section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non
        architecto in fugiat repudiandae maxime debitis modi officiis
        blanditiis? Velit sunt iure dolorum modi adipisci. Error doloremque
        nobis, fuga quia debitis, labore nihil nesciunt iure sed ipsam ea,
        laboriosam ab culpa atque alias similique provident eligendi maiores
        pariatur! Architecto, maiores animi nostrum nesciunt perferendis quaerat
        consectetur, tempora labore ullam delectus distinctio enim aliquam id!
        Eveniet est quos perspiciatis sapiente, blanditiis aliquid quam suscipit
        reprehenderit veniam maiores animi exercitationem fugiat sunt tempore
        aut quo incidunt sit. Nobis provident voluptatibus fuga. Deserunt ad
        suscipit provident molestias, sit odit perferendis consequuntur illo rem
        distinctio, repudiandae enim cum reprehenderit assumenda ipsum minima.
        Dolorum accusamus unde deserunt animi quod eligendi debitis voluptate
        doloremque quasi possimus quibusdam aspernatur laudantium facilis
        architecto tempora dolore mollitia, eius quidem molestiae vitae
        voluptates explicabo ad nihil. Earum, sit illum. Eveniet magni explicabo
        rem suscipit, assumenda ex quam libero autem tempore cumque iste dolorem
        quo maiores rerum quae voluptatum dolores repellendus maxime veniam
        voluptates consequatur deleniti! Cumque, vel numquam. Blanditiis nemo
        laudantium qui ab, dolorum corrupti adipisci quis temporibus minima iure
        nisi doloremque maxime facere voluptatum accusantium porro totam
        dignissimos corporis consectetur harum inventore laborum hic ducimus
        architecto. Aspernatur rem dignissimos impedit recusandae nisi, error
        vel, accusamus adipisci, minus perspiciatis temporibus atque quo rerum
        ipsum animi laudantium ullam! Dolor iure labore, eos perferendis
        mollitia omnis consectetur, nam unde, voluptate atque delectus
        cupiditate sunt tempora molestias possimus quis obcaecati laudantium!
        Libero sapiente quisquam repudiandae delectus quidem vero id fugit quam
        praesentium minima alias deleniti a asperiores ipsam sit, rem doloremque
        sequi. Quis sed nobis autem atque explicabo libero possimus repudiandae
        tenetur assumenda doloribus accusantium, sapiente, reiciendis
        voluptatibus veritatis quam hic quos. Nisi, suscipit quos nostrum eos
        cum amet vero voluptatem maxime obcaecati aliquam, dicta excepturi dolor
        at repellendus vel inventore et molestias? Harum, magni? Iure alias,
        amet eum dicta eos magnam illo vero non magni at corrupti repudiandae
        tempore perferendis quo est assumenda. Quidem non et repellat temporibus
        itaque delectus laudantium sed repellendus, totam optio. Consectetur
        quae magnam totam reprehenderit? Nostrum, odio. Odio temporibus sunt
        quae ad est earum, laboriosam dicta dolore fuga omnis placeat, nostrum
        autem fugit aliquam provident minus! Nemo error labore facilis quibusdam
        doloremque, vitae ab quas distinctio suscipit? Sed ea, esse vel libero
        debitis sit quos aperiam dicta cumque similique non beatae perferendis
        nemo veniam. Sit sunt iure dolorum aliquid totam possimus, quisquam
        asperiores. Iusto, odio nulla? Perferendis odio quas tenetur dolor quasi
        temporibus ullam asperiores odit provident, tempora consectetur
        distinctio adipisci iste nisi omnis repellendus aut officia laboriosam
        quibusdam corporis natus minima quam at vero? Et eum voluptate culpa. Et
        nostrum distinctio magni! Impedit, quis optio. Ex ipsum tempora eum
        sint, amet sunt architecto totam asperiores minus odio error ullam
        molestias nostrum nobis nihil nemo. Assumenda laudantium eligendi,
        temporibus rem aspernatur possimus architecto quae incidunt, illum vitae
        ducimus sit! Qui eius porro maiores reiciendis ab, maxime asperiores,
        autem, natus aliquam libero ducimus. Veritatis nesciunt eius, molestiae
        vitae vero natus reiciendis rerum? Ex nisi maiores quo amet optio.
      </p>
*/}

      <Footer />
    </>
  )
}

export default Home
