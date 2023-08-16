import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { PageContainer } from "./style/PageContainer"
import Pages from "./pages"
import Nav from "./components/Nav.component"

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path="/home" element={<Pages.Home />} />
          <Route path="/sign-in" element={<Pages.SignIn />} />
          <Route path="/sign-up" element={<Pages.SignUp />} />
          <Route path="/hashtag/:id" element={<Pages.Hashtag />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}

export default App
