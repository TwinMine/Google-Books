import { useState } from "react"
import BookData from "./components/context/BookData"
import Dashboard from "./components/dashboard/Dashboard"


function App() {
  const [bookData, setBookData] = useState([])
  return (
    <>
    <BookData.Provider value={{bookData, setBookData}}>
      <Dashboard />
      </BookData.Provider>
    </>
  )
}

export default App
