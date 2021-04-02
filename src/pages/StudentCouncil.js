import React from 'react'
import SCFlogo from '..//img/sclogo.png'
import SCHlogo from '../img/psuscw.png'
import sclogo from '../img/psusc.png'
import Footer from '../components/Footer/Footer.js'

const StudentCouncil = () => {
  return (
    <>
      <div>
        <div className="container is-max-desktop">
          <div className="content">
            <strong>
              <h3>สภานักศึกษา องค์การนักศึกษา</h3>
            </strong>
          </div>
        </div>
        <section className="hero">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-two-fifths">
                <center>
                  <div className="logo">
                    <img src={SCFlogo} alt="Website Logo" width="180" />
                  </div>
                  <br />
                  <div className="logo">
                    <img src={sclogo} alt="Website Logo" width="220" />
                  </div>
                </center>
              </div>
              <div className="column is-three-fifths">
                <p className="title is-5">สภานักศึกษา องค์การนักศึกษา</p>
                <p>
                  เป็นองค์กรหนึ่งของนักศึกษา
                  ที่ถูกแต่งตั้งขึ้นโดยมหาวิทยาลัยเพื่อที่จะดูแลการดำเนินกิจกรรมต่างๆของนักศึกษาให้เป็นไปตามระเบียบของมหาวิทยาลัย
                  องค์กรนักศึกษาเพื่อการศึกษานั่นเอง บทบาทหน้าที่
                  ควบคุมดูแลการทำงานขององค์การบริหารองค์การนักศึกษา
                  ชมรมต่างๆรวมถึงสโมสรนักศึกษาคณะต่างๆ ในมหาวิทยาลัย
                  พิทักษ์สิทธิ์ต่างๆของนักศึกษา พิจารณาจัดสรรงบประมาณ
                  ในการจัดกิจกรรมต่างๆของนักศึกษา
                  <br />
                </p>
                <p>
                  <a href="https://www.facebook.com/sapa.psu">
                    <strong> Facebook สภานักศึกษา องค์การนักศึกษา</strong>{' '}
                    https://www.facebook.com/sapa.psu
                  </a>
                  <br />
                  <strong>โทร</strong> : 074-282945 (ภายใน 2945) <br />{' '}
                  <strong>สถานที่ทำการ : </strong>สภานักศึกษา องค์การนักศึกษา
                  ชั้น 2 อาคารกิจกรรมนักศึกษา
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container is-max-desktop">
          <section className="hero">
            <div className="hero-body">
              <p className="title is-4">คณะบริหารงานดังต่อไปนี้</p>

              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <button
                      className="button is-fullwidth is-link is-light"
                      title="Disabled button"
                      disabled
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2564</strong>
                    </button>

                    <button
                      className="button is-fullwidth is-link is-light"
                      title="Disabled button"
                      disabled
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2563</strong>
                    </button>

                    <button
                      className="button is-fullwidth is-link is-light"
                      title="Disabled button"
                      disabled
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2562</strong>
                    </button>

                    <button
                      className="button is-fullwidth is-link is-light"
                      title="Disabled button"
                      disabled
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2561</strong>
                    </button>

                    <button
                      className="button is-fullwidth is-link is-light"
                      title="Disabled button"
                      disabled
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2560</strong>
                    </button>

                    <button
                      className="button is-fullwidth is-link is-light"
                      title="Disabled button"
                      disabled
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2559</strong>
                    </button>
                    <a href=" ">
                      <button className="button is-fullwidth is-link is-light">
                        <div className="logo">
                          <img src={sclogo} alt="Website Logo" width="120" />
                        </div>

                        <strong> ปีการศึกษา 2558</strong>
                      </button>
                    </a>

                    <button
                      href=" "
                      className="button is-fullwidth is-link is-light"
                    >
                      <div className="logo">
                        <img src={sclogo} alt="Website Logo" width="120" />
                      </div>
                      <strong> ปีการศึกษา 2557</strong>
                    </button>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default StudentCouncil
