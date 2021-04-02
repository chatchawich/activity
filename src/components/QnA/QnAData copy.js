import react from 'react'

const QnAData = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="is-centered">
          <div id="toppic">
            <form
              action
              method="post"
              name="form1"
              onsubmit="return checknew_topic();"
            >
              <div className="new_top_name">
                <label>
                  <input
                    name="ttopic"
                    id="ttopic"
                    type="text"
                    size={120}
                    placeholder="ชื่อหัวข้อ ..."
                  />
                </label>
              </div>
              <div className="comment_reply">
                <textarea
                  name="tcomment"
                  cols={512}
                  className="textreply"
                  id="tcomment"
                  placeholder="ข้อความ ..."
                  defaultValue={''}
                />
                <div className="name_submit" style={{ display: 'block' }}>
                  <input
                    type="hidden"
                    id="act_newpost"
                    name="act_newpost"
                    defaultValue="toppic"
                  />
                  <input
                    type="text"
                    name="usr_name"
                    id="usr_name"
                    placeholder="โดย ..."
                  />
                  <input
                    name
                    className="btn btn-primary"
                    type="submit"
                    defaultValue="โพสต์"
                  />
                </div>
              </div>
            </form>
          </div>

          <button className="button is-active">+ ตั้งหัวข้อใหม่</button>
        </div>
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close" />
            </header>
            <section className="modal-card-body">{/* Content ... */}</section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button">Cancel</button>
            </footer>
          </div>
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
