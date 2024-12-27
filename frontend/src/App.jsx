import DashBoard from "./DashBoard"
import {  Routes, Route } from "react-router"
import Protected from "./Protected"

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
 )
}

export default App
