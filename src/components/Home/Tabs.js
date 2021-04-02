import React, { useState } from 'react'
import { RiFolderHistoryFill, RiHomeSmileFill } from 'react-icons/ri'
import { FaSmile } from 'react-icons/fa'
import { GoLink } from 'react-icons/go'
import TabsPersonals from './Tabs.personals'
import Intros from './Tabdata'
import Contact from './TabContact'
import History from './TabHistory'

const Tabs = () => {
  const [tabActive, setTabActive] = useState(0)
  const onClickTab = (index) => {
    setTabActive(index)
  }
  return (
    <>
      <div className="content">
        <strong>
          <h3>แนะนำงานพัฒนานักศึกษา</h3>
        </strong>
      </div>
      <div className="tabs is-centered">
        <ul>
          {tabMenu.map((item, index) => (
            <li
              onClick={() => onClickTab(index)}
              key={index}
              className={tabActive === index ? 'is-active' : ''}
            >
              <a>
                {item.icon}&nbsp;<span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>{tabMenu[tabActive].content}</div>
    </>
  )
}

const tabMenu = [
  {
    icon: <RiFolderHistoryFill />,
    title: 'ความเป็นมา',
    content: <History />,
  },
  { icon: <FaSmile />, title: 'บุคลากร', content: <TabsPersonals /> },
  {
    icon: <RiHomeSmileFill />,
    title: 'กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์',
    content: <Intros />,
  },
  { icon: <GoLink />, title: 'ติดต่อ', content: <Contact /> },
]
export default Tabs
