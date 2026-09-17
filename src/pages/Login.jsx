import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Login() {

  const { login } = useAuth()

  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const [mensaje, setMensaje] = useState("")

  function manejarSubmit(evento) {

    evento.preventDefault()

    setError("")
    setMensaje("")

    const accesoCorrecto =
      login(nombre, password)

    if (!accesoCorrecto) {

      setError(
        "Usuario o contraseña incorrectos."
      )

      return
    }

    setMensaje(
      "Acceso correcto. Bienvenido."
    )

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <form
        onSubmit={manejarSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Agenda ADSO
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Iniciar sesión
        </p>

        <div className="mb-4">

          <label className="block font-medium mb-1">
            Usuario
          </label>

          <input
            type="text"
            value={nombre}
            onChange={(evento) =>
              setNombre(evento.target.value)
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Ingresa tu usuario"
          />

        </div>

        <div className="mb-4">

          <label className="block font-medium mb-1">
            Contraseña
          </label>

          <input
            type="password"
            value={password}
            onChange={(evento) =>
              setPassword(evento.target.value)
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Ingresa tu contraseña"
          />

        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {mensaje && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
            {mensaje}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Iniciar sesión
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Usuario de prueba: admin
        </p>

        <p className="text-sm text-gray-500 text-center">
          Contraseña: 1234
        </p>

      </form>

    </div>
  )
}

export default Login