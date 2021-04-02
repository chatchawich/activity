import react from 'react'

const QnAData = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="is-centered">
          <button className="button is-active">+ ตั้งหัวข้อใหม่</button>
        </div>

        <div className="table-container">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="Topic">
                    <center>Topic</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Year">
                    <center>ชั้นปี</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Views">
                    <center>Views</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Comments">
                    <center>Comments</center>
                  </abbr>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>
                  <abbr title="Topic">
                    <center>Topic</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Year">
                    <center>ชั้นปี</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Views">
                    <center>Views</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Comments">
                    <center>Comments</center>
                  </abbr>
                </th>
              </tr>
            </tfoot>
            <tbody>
              <tr className="is-selected">
                <th>
                  <a href=" " title=" ">
                    #หัวข้อข้องปัญหา ที่ต้องการสอบถาม
                  </a>
                </th>
                <td>#ชั้นปี</td>
                <td>#การรับชม</td>
                <td>#จำนวนความคิดเห็น</td>
              </tr>
              <tr>
                <th>
                  <a href=" " title=" ">
                    #หัวข้อข้องปัญหา ที่ต้องการสอบถาม
                  </a>
                </th>
                <td>#ชั้นปี</td>
                <td>#การรับชม</td>
                <td>#จำนวนความคิดเห็น</td>
              </tr>
              <tr>
                <th>
                  <a href=" " title=" ">
                    #หัวข้อข้องปัญหา ที่ต้องการสอบถาม
                  </a>
                </th>
                <td>#ชั้นปี</td>
                <td>#การรับชม</td>
                <td>#จำนวนความคิดเห็น</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default QnAData
