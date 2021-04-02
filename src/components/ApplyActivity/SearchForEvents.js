import react from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdSearch } from 'react-icons/md'
import { ImFolderOpen, ImCalendar, ImStackoverflow } from 'react-icons/im'

const SearchForEvents = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ค้นหากิจกรรมพัฒนานักศึกษา</h3>
          </strong>
        </div>
      </div>

      <section className="hero is-info">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-two-thirds is-offset-2 is-mobile">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                  <article className="tile is-child box">
                    <center>
                      <p className="subtitle has-text-dark">
                        <BsSearch /> {''}
                        ค้นหากิจกรรม
                      </p>
                    </center>
                    <div className="field">
                      <label className="label">คำค้นหา</label>
                      <div className="control" action="/?q=regist" method="get">
                        {/* มีใส่ input ของเก่าด้วย */}
                        <input name="q" type="hidden" defaultValue="regist" />
                        <input
                          className="input"
                          type="text"
                          placeholder="คำค้นหา"
                          name="str"
                          type="text"
                          id="str"
                        />
                      </div>
                      <p className="help">
                        {' '}
                        *หากมากกว่า 1 คำ ให้เว้นวรรค เช่น กิจกรรม บรรยาย
                      </p>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <center>
                          <p className="subtitle is-6 has-text-dark">
                            <ImFolderOpen /> {''}
                            หมวดกิจกรรม
                          </p>
                          <div className="select is-rounded is-info is-small">
                            <select>
                              <option>ทั้งหมด</option>
                              <option>กิจกรรมมหาวิยาลัย</option>
                              <option>กิจกรรมเลือกเข้าร่วม</option>
                            </select>
                          </div>
                        </center>
                      </div>
                      <div className="column is-one-third">
                        <center>
                          <p className="subtitle is-6 has-text-dark">
                            <ImCalendar />
                            {''} ปีการศึกษา
                          </p>
                          <div className="select is-rounded is-success is-small">
                            <select name="year" id="year">
                              <option value>ทั้งหมด</option>
                              <option value={2565}>2565</option>
                              <option value={2564}>2564</option>
                              <option value={2563}>2563</option>
                              <option value={2562}>2562</option>
                              <option value={2561}>2561</option>
                              <option value={2560}>2560</option>
                              <option value={2559}>2559</option>
                              <option value={2558}>2558</option>
                              <option value={2557}>2557</option>
                              <option value={2556}>2556</option>
                              <option value={2555}>2555</option>
                            </select>
                          </div>
                        </center>
                      </div>
                      <div className="column is-one-third">
                        <center>
                          <p className="subtitle is-6 has-text-dark">
                            <ImStackoverflow /> {''} ภาคการศึกษา
                          </p>
                          <div className="select is-rounded is-danger is-small">
                            <select name="term" id="term">
                              <option value>ทั้งหมด</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </div>
                        </center>
                      </div>
                    </div>
                    <center>
                      <div>
                        <button className="button is-warning">
                          <MdSearch /> {''}ค้นหา
                        </button>
                      </div>
                    </center>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchForEvents
