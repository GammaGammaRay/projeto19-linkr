import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import ResetStyle from "./style/ResetStyle"
import GlobalStyle from "./style/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
)

reportWebVitals()
