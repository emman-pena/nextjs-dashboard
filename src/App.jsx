import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNavBar from './components/SideNavBar'
import Employees from './pages/Employees'

function App() {

  return (
    <Router>
      <div className="app">
        <SideNavBar /> {/* Include the SideNavBar globally */}
        
        {/* Main content */}
        <div className="content">
          <Switch>
            <Route path="/employees" component={Employees} />
            <Route path="/dashboard" component={Dashboard} />
            {/* Add more routes for other pages */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
