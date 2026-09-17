import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    const sesionGuardada =
      localStorage.getItem("agenda_usuario")

    if (sesionGuardada) {
      setUsuario(sesionGuardada)
    }

  }, [])

  function login(nombre, password) {

    if (
      nombre === "admin" &&
      password === "1234"
    ) {

      localStorage.setItem(
        "agenda_usuario",
        nombre
      )

      setUsuario(nombre)

      return true
    }

    return false
  }

  function logout() {

    localStorage.removeItem(
      "agenda_usuario"
    )

    setUsuario(null)
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}