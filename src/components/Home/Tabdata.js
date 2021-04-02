import React from 'react'

export function Intros() {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-info is-light">
                <p className="title">วิสัยทัศน์</p>
                <p className="subtitle">Vision</p>
                <p>
                  กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์
                  เป็นองค์กรคุณภาพที่ร่วมสร้างบัณฑิตที่พึงประสงค์
                  ของมหาวิทยาลัยสงขลานครินทร์
                </p>
              </article>
              <article className="tile is-child notification is-link">
                <p className="title">พันธกิจ</p>
                <p className="subtitle">Missione</p>
                <p>
                  พัฒนานักศึกษาให้เป็นบัณฑิตที่พึงประสงค์โดยสนับสนุนและจัดกิจกรรมพัฒนานักศึกษาที่หลากหลายและมีคุณภาพ
                  จัดบริการและสวัสดิการที่ดี
                  เอื้อต่อการพัฒนาการเรียนรู้และส่งเสริมคุณภาพชีวิตแก่นักศึกษา
                  สร้างองค์กรคุณภาพ ตามหลักการบริหารจัดการที่ดี
                </p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">วัตถุประสงค์</p>
                <p className="subtitle">Objective</p>
                <p>
                  เพื่อเป็นหน่วยงานกลางที่สนับสนุนนโยบายและเจตนารมณ์ตามภารกิจหลักของมหาวิทยาลัยในด้านกิจการนักศึกษา
                  ให้บรรลุวัตถุประสงค์โดย
                  การประสานนโยบายของมหาวิทยาลัยไปสู่การปฏิบัติในระดับคณะ
                  วิทยาลัย ศูนย์ สถาบัน สำนัก และหน่วยงานภายใน มหาวิทยาลัย
                  ให้สอดคล้องกับวิสัยทัศน์ พันธกิจ
                  ยุทธศาสตร์หลักและแผนกลยุทธ์ของมหาวิทยาลัย
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intros
