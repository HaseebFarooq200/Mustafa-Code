
import Home from "./pages/home"
import CreateAgent from "./pages/create_agent";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DisplayAgentsPage from "./pages/display_agents_page";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-agent' element={<CreateAgent />} />
          <Route path='/get-agents' element={<DisplayAgentsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
