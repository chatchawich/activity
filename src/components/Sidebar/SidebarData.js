import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPaper, IoMdHelpCircle } from 'react-icons/io'
import { IoPeopleCircleSharp, IoPeopleCircleOutline } from 'react-icons/io5'
import { FaDatabase, FaEnvelopeOpenText } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import { AiFillDatabase } from 'react-icons/ai'
import {
  RiFilePaper2Fill,
  RiAdminFill,
  RiServiceFill,
  RiServiceLine,
} from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'หน้าแรก',
    path: './',
    icon: <AiFillHome />,
  },
  {
    title: 'สมัครกิจกรรม',
    path: './ApplyActivity',
    icon: <HiViewGridAdd />,
  },
  {
    title: 'ระบบทรานสคริป กิจกรรม',
    path: './ActivityTranscriptSystem',
    icon: <AiFillDatabase />,
    subNav: [
      {
        title: 'Transcript.psu.ac.th',
        path: 'https://transcript.psu.ac.th',
        redirect: true,
        icon: <FaDatabase />,
      },
      {
        title: 'ระบบเก่า (ก่อนรหัส 60)',
        path: 'https://student.psu.ac.th/TS234',
        redirect: true,
        icon: <FaDatabase />,
      },
    ],
  },
  {
    title: 'เอกสาร',
    path: './Paper',
    icon: <RiFilePaper2Fill />,
    subNav: [
      {
        title: 'คู่มือปฏิบัติงาน กิจกรรมเสริมหลักสูตร',
        path: 'https://activity.psu.ac.th/content/files/n125_ts.pdf',
        redirect: true,
        icon: <IoIosPaper />,
      },
      {
        title: 'ตารางกิจกรรม ประจำปีการศึกษา',
        path: './ActivitySchedule',
        icon: <IoIosPaper />,
      },
      {
        title: 'ประกาศ-ระเบียบ',
        path: './Announcement',
        icon: <IoIosPaper />,
      },
      {
        title: 'แบบฟอร์ม',
        path: './Form',
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: 'องค์การนักศึกษา',
    path: './StudentOrganization',
    icon: <IoPeopleCircleSharp />,
    subNav: [
      {
        title: 'องค์การบริหาร องค์การนักศึกษา',
        path: './StudentUnion',
        icon: <IoPeopleCircleOutline />,
      },
      {
        title: 'สภานักศึกษา องค์การนักศึกษา',
        path: './StudentCouncil',
        icon: <IoPeopleCircleOutline />,
      },
      {
        title: 'ชมรมนักศึกษา',
        path: './StudentClub',
        icon: <IoPeopleCircleOutline />,
      },
    ],
  },
  {
    title: 'ถาม-ตอบ',
    path: './QnA',
    icon: <FaEnvelopeOpenText />,
  },

  {
    title: 'บริการนักศึกษา',
    path: './StudentServices',
    icon: <RiServiceFill />,
    subNav: [
      {
        title: 'ปฏิทินห้องประชุมศรีตรัง',
        path: './StudentServices',
        icon: <RiServiceLine />,
      },
      {
        title: 'ปฏิทินห้องประชุมองค์การนักศึกษา',
        path: './',
        icon: <RiServiceLine />,
      },
      {
        title: 'ปฏิทินห้องประชุมสภานักศึกษา (วังบาดาล)',
        path: './',
        icon: <RiServiceLine />,
      },
      {
        title: 'ปฏิทินลานกิจกรรม (ลานนกเอี้ยง)',
        path: './',
        icon: <RiServiceLine />,
      },
      {
        title: 'ปฏิทินลานกิจกรรม (ลานชั้น 1 อาคารกิจกรรมฯ)',
        path: './',
        icon: <RiServiceLine />,
      },
    ],
  },
  { title: 'ผังเว็บไซต์', path: './SiteMap', icon: <IoMdHelpCircle /> },
  {
    title: 'Admin',
    path: './Admin',
    icon: <RiAdminFill />,
  },
]
