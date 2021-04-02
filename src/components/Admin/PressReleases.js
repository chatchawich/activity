import React from 'react'

const PressReleases = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <section className="hero">
          <div className="hero-body">
            <p className="title is-4">Press releases</p>
            <p className="subtitle is-5">ประชาสัมพันธ์ ข่าวสาร</p>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Topic</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="titlePress"
                      placeholder="หัวข้อประชาสัมพันธ์ ข่าวสาร"
                    />
                  </p>
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

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">More details</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="textPress"
                      placeholder="รายละเอียดเพิ่มเติม"
                    ></textarea>
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
export default PressReleases
