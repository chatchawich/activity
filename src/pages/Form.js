import React from 'react'
import { AiFillFilePdf } from 'react-icons/ai'
import { FcDownload } from 'react-icons/fc'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'
import { IoDocumentTextOutline } from 'react-icons/io5'
import Footer from '../components/Footer/Footer.js'

const Form = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ดาวน์โหลดแบบฟอร์ม</h3>
          </strong>
        </div>

        <div className="table-container">
          <h1 className="title is-4">แบบฟอร์มทรานสคริปกิจกรรมนักศึกษา</h1>
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="File">
                    <center></center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Topic">
                    <center>
                      {' '}
                      <IoDocumentTextOutline /> Topic
                    </center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Download">
                    <center>
                      {' '}
                      <BsFileEarmarkArrowDown /> {''}Download
                    </center>
                  </abbr>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>
                  <abbr title="File">
                    <center></center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Topic">
                    <center>
                      {' '}
                      <IoDocumentTextOutline /> Topic
                    </center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Download">
                    <center>
                      {' '}
                      <BsFileEarmarkArrowDown /> {''} Download
                    </center>
                  </abbr>
                </th>
              </tr>
            </tfoot>
            <tbody>
              <tr className="is-selected">
                <td>
                  <center>
                    {' '}
                    <AiFillFilePdf />{' '}
                  </center>
                </td>
                <th>
                  <a href=" " title=" ">
                    #ชื่อหัวข้อประกาศ-ระเบียบ
                  </a>
                </th>
                <td>
                  <center>
                    {' '}
                    <FcDownload /> ... Time
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    {' '}
                    <AiFillFilePdf />{' '}
                  </center>
                </td>
                <th>
                  <a href=" " title=" ">
                    #ชื่อหัวข้อประกาศ-ระเบียบ
                  </a>
                </th>
                <td>
                  {' '}
                  <center>
                    {' '}
                    <FcDownload /> ... Time
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    {' '}
                    <AiFillFilePdf />{' '}
                  </center>
                </td>
                <th>
                  <a href=" " title=" ">
                    #ชื่อหัวข้อประกาศ-ระเบียบ
                  </a>
                </th>
                <td>
                  {' '}
                  <center>
                    {' '}
                    <FcDownload /> ... Time
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h1 className="title is-4">แบบฟอร์มการจัดกิจกรรมนักศึกษา</h1>

          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="File">
                    <center></center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Topic">
                    <center>
                      {' '}
                      <IoDocumentTextOutline /> Topic
                    </center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Download">
                    <center>
                      {' '}
                      <BsFileEarmarkArrowDown /> {''}Download
                    </center>
                  </abbr>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>
                  <abbr title="File">
                    <center></center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Topic">
                    <center>
                      {' '}
                      <IoDocumentTextOutline /> Topic
                    </center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Download">
                    <center>
                      {' '}
                      <BsFileEarmarkArrowDown /> {''} Download
                    </center>
                  </abbr>
                </th>
              </tr>
            </tfoot>
            <tbody>
              <tr className="is-selected">
                <td>
                  <center>
                    {' '}
                    <AiFillFilePdf />{' '}
                  </center>
                </td>
                <th>
                  <a href=" " title=" ">
                    #ชื่อหัวข้อประกาศ-ระเบียบ
                  </a>
                </th>
                <td>
                  <center>
                    {' '}
                    <FcDownload /> ... Time
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    {' '}
                    <AiFillFilePdf />{' '}
                  </center>
                </td>
                <th>
                  <a href=" " title=" ">
                    #ชื่อหัวข้อประกาศ-ระเบียบ
                  </a>
                </th>
                <td>
                  {' '}
                  <center>
                    {' '}
                    <FcDownload /> ... Time
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    {' '}
                    <AiFillFilePdf />{' '}
                  </center>
                </td>
                <th>
                  <a href=" " title=" ">
                    #ชื่อหัวข้อประกาศ-ระเบียบ
                  </a>
                </th>
                <td>
                  {' '}
                  <center>
                    {' '}
                    <FcDownload /> ... Time
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Form
