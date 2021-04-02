import react from 'react'
import SearchForEvents from '../components/ApplyActivity/SearchForEvents.js'
import EventsPages from '../components/ApplyActivity/EventsPages.js'
import EventsData from '../components/ApplyActivity/EventsData.js'
import Footer from '../components/Footer/Footer.js'
import ActivityInfo from './ActivitiesInfo.js'

const ApplyActivity = () => {
  return (
    <>
      <SearchForEvents />
      <EventsPages />
      <EventsData />
      <EventsPages />
      <Footer />
      <ActivityInfo />
    </>
  )
}

export default ApplyActivity
