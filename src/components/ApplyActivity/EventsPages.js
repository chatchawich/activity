import react from 'react'

const EventsPages = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div style={{ margin: '10px' }}>
          ข้อมูลทั้งหมด 271 ข้อมูล &nbsp; &nbsp;{' '}
          <a href="/?q=regist&page=1#submit_page" style={{ color: 'blue' }}>
            หน้าแรก
          </a>{' '}
          |{' '}
          <a href="/?q=regist&page=9#submit_page" style={{ color: 'blue' }}>
            « ก่อนหน้า
          </a>{' '}
          &nbsp; ...{' '}
          <span style={{ wordSpacing: '10px' }}>
            {' '}
            <a href="/?q=regist&page=4">
              <span className="int">
                <b>4</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=5">
              <span className="int">
                <b>5</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=6">
              <span className="int">
                <b>6</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=7">
              <span className="int">
                <b>7</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=8">
              <span className="int">
                <b>8</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=9">
              <span className="int">
                <b>9</b>
              </span>
            </a>{' '}
            <b>
              <span className="int current">10</span>
            </b>{' '}
            <a href="/?q=regist&page=11">
              <span className="int">
                <b>11</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=12">
              <span className="int">
                <b>12</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=13">
              <span className="int">
                <b>13</b>
              </span>
            </a>{' '}
            <a href="/?q=regist&page=14">
              <span className="int">
                <b>14</b>
              </span>
            </a>{' '}
            ...&nbsp;
          </span>{' '}
          &nbsp;&nbsp;&nbsp;<a href="/?q=regist&page=11#submit_page">ถัดไป »</a>{' '}
          | <a href="/?q=regist&page=14#submit_page">หน้าสุดท้าย</a>
        </div>
      </div>
    </>
  )
}

export default EventsPages
