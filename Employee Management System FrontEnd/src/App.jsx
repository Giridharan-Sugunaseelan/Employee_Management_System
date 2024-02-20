import EmployeeComponent from "./Components/EmployeeComponent"
import FooterComponent from "./Components/FooterComponent"
import HeaderComponent from "./Components/HeaderComponent"
import { ListEmployeeComponent } from "./Components/ListEmployeeComponent"
import { Route,Routes } from "react-router-dom"

function App() {
  
  return (
    <>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent/>}></Route>
        <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
        <Route path="/employees/all" element={<ListEmployeeComponent/>}></Route>
        <Route path="/employees/add-employee" element={<EmployeeComponent/>}></Route>
        <Route path="/employees/update-employee/:id" element={<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </>
  )
}

export default App
