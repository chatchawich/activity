import React from 'react'

const StudentOrganizationDirectory = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <section className="hero">
          <div className="hero-body">
            <p className="title is-4">Student Organization Directory</p>
            <p className="subtitle is-5">ผังทำเนียบองค์การนักศึกษา</p>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">ปีการศึกษา</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="select is-info">
                    <select>
                      <option>2569</option>
                      <option>2568</option>
                      <option>2567</option>
                      <option>2566</option>
                      <option>2565</option>
                      <option>2564</option>
                      <option>2563</option>
                      <option>2562</option>
                      <option>2561</option>
                      <option>2560</option>
                      <option>2559</option>
                      <option>2558</option>
                      <option>2557</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">ชื่อ-สกุล</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="SOname"
                      placeholder="ชื่อ-สกุล"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">ตำแหน่ง</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="SOposition"
                      placeholder="ตำแหน่ง"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">คณะสังกัด</label>
              </div>

              <div className="field-body">
                <div className="field">
                  <div className="select is-info">
                    <select>
                      <option>คณะวิศวกรรมศาสตร์ </option>
                      <option>คณะวิทยาศาสตร์</option>
                      <option>คณะแพทยศาสตร์</option>
                      <option>คณะพยาบาลศาสตร์</option>
                      <option>คณะวิทยาการจัดการ</option>
                      <option>คณะทรัพยากรธรรมชาติ</option>
                      <option>คณะเภสัชศาสตร์</option>
                      <option>คณะทันตแพทยศาสตร์</option>
                      <option>คณะอุตสาหกรรมเกษตร</option>
                      <option>คณะศิลปศาสตร์</option>
                      <option>คณะนิติศาสตร์</option>
                      <option>คณะเศรษฐศาสตร์</option>
                      <option>คณะการแพทย์แผนไทย</option>
                      <option>คณะเทคนิคการแพทย์</option>
                      <option>คณะสัตวแพทยศาสตร์</option>
                      <option>วิทยาลัยนานาชาติ วิทยาเขตหาดใหญ่</option>
                      <option>วิทยาลัยนานาชาติยางพาราไทย-จีน</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Add files</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="file is-info has-name">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-label">Info file…</span>
                      </span>
                      <span className="file-name">File name</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field is-horizontal">
              <div className="field-label">{/* Left empty for spacing */}</div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default StudentOrganizationDirectory
