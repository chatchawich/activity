import React from 'react'

const Gallory = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info is-light">
            <div className="content">
              {/* Main container */}
              <nav className="level">
                {/* Left side */}
                <div className="level-left">
                  <div className="level-item">
                    <div className="title is-3">Gallory</div>
                  </div>
                </div>
                {/* Right side */}
                <div className="level-right">
                  <p className="level-item">
                    <a href="/FullGallory" title="FullGallory">
                      <strong>ดูภาพกิจกรรมทั้งหมด</strong>
                    </a>
                  </p>
                </div>
              </nav>

              <div className="content">
                {
                  /* Content */
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                      <div className="tile">
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <p className="title is-5">
                              งานเวทีคุณภาพกิจกรรมนักศึกษา ประจำปีการศึกษา ๒๕๖๓
                            </p>
                            <div className="content">
                              <figure className="image is-16by9">
                                <img src="https://activity.psu.ac.th/photo/files/p55_STR_9995.jpg" />
                              </figure>
                              <p>
                                เพื่อเป็นการเชิดชูเกียรติและเสริมกำลังใจแก่นักศึกษาในการทำกิจกรรมนักศึกษาโดยพัฒนานักศึกษาผ่านกระบวนการกิจกรรมนักศึกษา
                                มอบโดย ผู้ช่วยศาสตราจารย์สุพจน์ โกวิทยา
                              </p>
                            </div>
                          </article>
                        </div>
                        <div className="tile is-6 is-vertical">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-5">
                                โครงการเตรียมความพร้อมสู่วัยทำงาน Getting Ready
                                for a Career
                              </p>
                              <div className="content">
                                <figure className="image is-16by9">
                                  <img src="https://activity.psu.ac.th/photo/files/p54_5.jpg" />
                                </figure>
                              </div>
                            </article>
                          </div>
                          <div className="tile">
                            <div className="tile is-parent">
                              <article className="tile is-child box">
                                <p className="title is-5">
                                  ศึกษาดูงานผู้นำองค์กรกิจกรรมนักศึกษา
                                  ปีการศึกษา 2563
                                </p>
                                <div className="content">
                                  <figure className="image is-16by9">
                                    <img src="https://activity.psu.ac.th/photo/files/p53_IMG_4402.JPG" />
                                  </figure>
                                </div>
                              </article>
                            </div>
                            <div className="tile is-parent">
                              <article className="tile is-child box">
                                <p className="title is-5">
                                  สานสัมพันธ์ ทักษิณถิ่นใต้
                                </p>
                                <div className="content">
                                  <figure className="image is-16by9">
                                    <img src="https://activity.psu.ac.th/photo/files/p52_83915101_2969257276439135_1537875240049180672_o.jpg" />
                                  </figure>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
export default Gallory
