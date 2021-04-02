import react from 'react'
import { MdComment } from 'react-icons/md'
import { FaReply } from 'react-icons/fa'
const QnARecent = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info is-light">
            <div className="container is-max-desktop">
              <div className="table-container">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>
                        <abbr title="TopicRecent">
                          <center>การเคลื่อนไหวความเห็นล่าสุด</center>
                        </abbr>
                      </th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>
                        <abbr title="TopicRecent">
                          <center>การเคลื่อนไหวความเห็นล่าสุด</center>
                        </abbr>
                      </th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <th>
                        <a href=" " title=" ">
                          <MdComment /> #หัวข้อปัญหา ที่ต้องการสอบถาม
                        </a>
                        <p>วัน เดือน ปี</p>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a href=" " title=" ">
                          <MdComment /> #หัวข้อปัญหา ที่ต้องการสอบถาม
                        </a>
                        <p>วัน เดือน ปี</p>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a href=" " title=" ">
                          <FaReply /> #หัวข้อปัญหา ที่ต้องการสอบถาม
                        </a>
                        <p>วัน เดือน ปี</p>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a href=" " title=" ">
                          <FaReply /> #หัวข้อปัญหา ที่ต้องการสอบถาม
                        </a>
                        <p>วัน เดือน ปี</p>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a href=" " title=" ">
                          <MdComment /> #หัวข้อปัญหา ที่ต้องการสอบถาม
                        </a>
                        <p>วัน เดือน ปี</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default QnARecent
