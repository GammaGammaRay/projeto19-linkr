import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageContainer } from "./style/PageContainer";
import Pages from "./pages";
import Nav from "./components/Nav.component";
import UserPage from "./pages/UserPage";
import AuthProvider from "./context/auth.context";

function App() {

  return (
    <AuthProvider>
      <PageContainer>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Pages.SignIn/>} />
            <Route path="/home" element={<Pages.Home />} />
            <Route path="/sign-up" element={<Pages.SignUp />} />
            <Route path="/hashtag/:id" element={<Pages.Hashtag />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </AuthProvider>
  );
}

export default App;
