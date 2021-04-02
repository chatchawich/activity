import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="columns">
          <div className="column is-half">
            <p className="title is-4">ติดต่อ</p>
            <p>
              งานกิจกรรมนักศึกษา กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์
              มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่ <br />
              Division of Student Development and Alumni Hatyai Campus Prince of
              Songkla University <br />
              โทร. 074-28-2201 ถึง 5 โทรสาร. 074-28-2206
            </p>
          </div>

          <div className="column is-half">
            <div className="content has-text-centered">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.5981980424699!2d100.49718946709307!3d7.008870239746783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d29a50cd9a6cd%3A0xf8ebf35edb159626!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lit4LiY4Li04LiB4Liy4Lij4Lia4LiU4Li1!5e0!3m2!1sth!2sth!4v1614649726378!5m2!1sth!2sth"
                width="100%"
                height={220}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>
            {' '}
            พัฒนาระบบโดย <b>งานสารสนเทศนักศึกษา</b> &nbsp;
            <a href="https://student.psu.ac.th/web/home">
              กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
export default Footer
