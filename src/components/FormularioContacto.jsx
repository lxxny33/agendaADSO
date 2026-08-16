import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.telefono) {
      alert("Nombre y teléfono son obligatorios");
      return;
    }

    onAgregar(form);

    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      etiqueta: ""
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          className="rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3"
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          className="rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3"
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        />

        <input
          className="rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3"
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
        />

        <input
          className="rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3"
          type="text"
          name="etiqueta"
          placeholder="Etiqueta"
          value={form.etiqueta}
          onChange={handleChange}
        />

      </div>

      <button
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md mt-4"
        type="submit"
      >
        Agregar contacto
      </button>
    </form>
  );
}