import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import Sidebar from './components/Sidebar/Sidebar.js'
import Home from './pages/Home'
import ApplyActivity from './pages/ApplyActivity'
import ActivitySchedule from './pages/ActivitySchedule'
import Announcement from './pages/Announcement'
import Form from './pages/Form'
import StudentUnion from './pages/StudentUnion'
import BodyStudentUnion from './components/StudentUnion/BodyStudentUnion.js'
import StudentCouncil from './pages/StudentCouncil'
import StudentClub from './pages/StudentClub'
import QnA from './pages/QnA'
import Admin from './pages/Admin'
import AddActivity from './components/Admin/AddActivity.js'
import PressReleases from './components/Admin/PressReleases.js'
import StudentOrganizationDirectory from './components/Admin/StudentOrganizationDirectory.js'
import SiteMap from './pages/SiteMap'
import ProfileInfo from './components/Profile/ProfileInfo'
import PageEvent from './components/Events/PageEvent.js'
import FullGallory from './pages/FullGallory'
import StudentServices from './pages/StudentServices'
import 'bulma/css/bulma.min.css'
import './App.css'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebar(false),
    onSwipedRight: () => setSidebar(true),
    delta: 150,
  })
  return (
    <div className="App" {...handlers}>
      <Router>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="page-top">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ApplyActivity" exact component={ApplyActivity} />
            <Route
              path="/ActivitySchedule"
              exact
              component={ActivitySchedule}
            />
            <Route path="/Announcement" exact component={Announcement} />
            <Route path="/Form" exact component={Form} />
            <Route path="/StudentUnion" exact component={StudentUnion} />
            <Route
              path="/StudentUnion/BodyStudentUnion"
              exact
              component={BodyStudentUnion}
            />
            <Route path="/StudentCouncil" exact component={StudentCouncil} />
            <Route path="/StudentClub" exact component={StudentClub} />
            <Route path="/QnA" exact component={QnA} />
            <Route path="/Admin" exact component={Admin} />
            <Route path="/Admin/AddActivity" exact component={AddActivity} />
            <Route
              path="/Admin/PressReleases"
              exact
              component={PressReleases}
            />
            <Route
              path="/Admin/StudentOrganizationDirectory"
              exact
              component={StudentOrganizationDirectory}
            />
            <Route path="/SiteMap" exact component={SiteMap} />
            <Route path="/ProfileInfo" exact component={ProfileInfo} />
            <Route path="/event/:id" exact component={PageEvent} />
            <Route path="/FullGallory" exact component={FullGallory} />
            <Route path="/StudentServices" exact component={StudentServices} />

            <Route error component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const Error = () => (
  <>
    <div>404 not found</div>
  </>
)
export default App
