import { useState, createContext } from "react"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth")) || {};

  const [auth, setAuth] = useState(persistedAuth)
  const [token, setToken] = useState("")

  function login(authData, token) {
    setAuth(authData)
    setToken(token)

    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("auth", JSON.stringify(authData))
  }
  function logout() {
    setAuth("")
    setToken(null)
    localStorage.removeItem("auth")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
