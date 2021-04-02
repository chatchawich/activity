import react from 'react'

const QnAPages = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div style={{ margin: '10px' }}>
          ข้อมูลทั้งหมด 233 ข้อมูล &nbsp; &nbsp; &nbsp;
          <span style={{ wordSpacing: '10px' }}>
            {' '}
            <b>
              <span className="int current">1</span>
            </b>{' '}
            <a href="/?q=webboard&page=2">
              <span className="int">
                <b>2</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=3">
              <span className="int">
                <b>3</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=4">
              <span className="int">
                <b>4</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=5">
              <span className="int">
                <b>5</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=6">
              <span className="int">
                <b>6</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=7">
              <span className="int">
                <b>7</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=8">
              <span className="int">
                <b>8</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=9">
              <span className="int">
                <b>9</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=10">
              <span className="int">
                <b>10</b>
              </span>
            </a>{' '}
            <a href="/?q=webboard&page=11">
              <span className="int">
                <b>11</b>
              </span>
            </a>
          </span>{' '}
          ... &nbsp;&nbsp;&nbsp;
          <a href="/?q=webboard&page=2#submit_page">ถัดไป »</a> |{' '}
          <a href="/?q=webboard&page=12#submit_page">หน้าสุดท้าย</a>
        </div>
      </div>
    </>
  )
}

export default QnAPages
