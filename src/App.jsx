//import important stuff
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Layout, Menu } from 'antd';

//import components
import './App.css'
import AboutPeople from './components/AboutPeople.jsx'
import Degrees from './components/DegreesPage.jsx'
import Minors from './components/MinorsPage.jsx'
import CoursePage from './components/CoursePage.jsx'
import EmployPage from './components/EmploymentPage.jsx'

//import css
import './App.css'


const { Content} = Layout;

const App=() =>{
  
  return(
    <>
        <Router>
          <Layout>
              {/* menu outside of content, remains while rest of page components change */}
                <div className="Sticky">
                  <h1>Welcome to the iSchool!</h1>
                  {/* navigation menu */}
                  <Menu className="StickyMenu">
                    <Menu.Item key="1">
                      <span>About</span>
                      <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="2">
                      <span>Degrees</span>
                      <Link to="/degrees" />
                    </Menu.Item>
                    <Menu.Item key="3">
                      <span>Minors</span>
                      <Link to="/minors" />
                    </Menu.Item>
                    <Menu.Item key="4">
                      <span>Employment</span>
                      <Link to="/employ" />
                    </Menu.Item>
                  </Menu>
                </div>               
              
              {/* main content, changes with routes through the menu buttons */}
              <Content>
                <Routes>
                  <Route exact path="/" element={<AboutPeople/>} />
                  <Route path="/degrees" element={<Degrees/>} />
                  <Route path="/minors" element={<Minors/>} />
                  <Route path="/course" element={<CoursePage/>} />
                  <Route path="/employ" element={<EmployPage/>} />
                </Routes>
                
              </Content>
                
                


          </Layout>
        </Router>
    </>

  )


}

export default App
