import { useState } from "react";

export default function ContactoCard({ id, nombre, telefono, correo, etiqueta, onEliminar, onActualizar }) {
  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({ nombre, telefono, correo, etiqueta });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    onActualizar(id, formData);
    setEditando(false);
  };

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 flex items-start justify-between">
      {editando ? (
        <div className="space-y-2 flex-1 mr-4">
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-1 text-sm"
          />
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-1 text-sm"
          />
          <input
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-1 text-sm"
          />
          <input
            name="etiqueta"
            value={formData.etiqueta}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-1 text-sm"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleGuardar}
              className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded-lg"
            >
              Guardar
            </button>
            <button
              onClick={() => setEditando(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs px-3 py-1.5 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800">{nombre}</h3>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <span className="text-purple-500 text-lg">📞</span>
            {telefono}
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <span className="text-purple-500 text-lg">✉️</span>
            {correo}
          </p>
          {etiqueta && (
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mt-2">
              {etiqueta}
            </span>
          )}
        </div>
      )}

      {!editando && (
        <div className="flex gap-2">
          <button
            onClick={() => setEditando(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg shadow transition"
          >
            Editar
          </button>
          <button
            onClick={onEliminar}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow transition"
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}