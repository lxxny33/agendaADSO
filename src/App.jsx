import { useEffect, useState } from "react";

import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId
} from "./api.js";

import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    listarContactos()
      .then((data) => setContactos(data))
      .catch((error) => console.error(error));
  }, []);

  const agregarContacto = async (form) => {
    try {
      const nuevo = await crearContacto(form);

      setContactos((actuales) => [...actuales, nuevo]);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarContacto = async (id) => {
    try {
      await eliminarContactoPorId(id);

      setContactos((actuales) =>
        actuales.filter((contacto) => contacto.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="max-w-6xl mx-auto px-6 pt-8">
        <h1 className="text-4xl md:text-5xl font-black text-purple-600 text-center md:text-left">
          Agenda ADSO v5
        </h1>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <FormularioContacto onAgregar={agregarContacto} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {contactos.map((contacto) => (
            <ContactoCard
              key={contacto.id}
              id={contacto.id}
              nombre={contacto.nombre}
              telefono={contacto.telefono}
              correo={contacto.correo}
              etiqueta={contacto.etiqueta}
              onEliminar={() => eliminarContacto(contacto.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}