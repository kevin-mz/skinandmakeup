import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Main() {
  const [entradas, setEntradas] = useState([]); // Estado para las entradas
  const [entradaSeleccionada, setEntradaSeleccionada] = useState(null); // Estado para la entrada seleccionada

  useEffect(() => {
    const fetchEntradas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "entradas"));
        const entradasData = [];

        querySnapshot.forEach((doc) => {
          entradasData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        console.log(entradasData);
        setEntradas(entradasData); // Establecer las entradas
      } catch (error) {
        console.error("Error al obtener entradas:", error);
      }
    };

    fetchEntradas();
  }, []);

  // Función para abrir el detalle del artículo
  const abrirEntrada = (entrada) => {
    setEntradaSeleccionada(entrada);
  };

  // Función para cerrar el detalle del artículo
  const cerrarEntrada = () => {
    setEntradaSeleccionada(null);
  };

  return (
    <main className="bg-[#FCECD7] grid grid-cols-3 gap-20 p-20">
      {/* Mostrar las entradas */}
      {entradas.map((entrada) => (
        <article className="rounded-md" key={entrada.id} onClick={() => abrirEntrada(entrada)}>
          <h2 className="text-xl font-semibold text-[#E57649]">{entrada.title}</h2>
          <img className="border-4 border-[#E57649] rounded-md" src={entrada.image} alt={entrada.title} />
        </article>
      ))}

      {/* Si hay una entrada seleccionada, mostrar el detalle */}
      {entradaSeleccionada && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#FCECD7] p-6 rounded-md max-w-5xl w-full relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={cerrarEntrada}
            >
              X
            </button>
            <h2 className="text-3xl font-semibold text-[#E57649]">{entradaSeleccionada.title}</h2>
            <img className="border-4 border-[#E57649] rounded-md my-4" src={entradaSeleccionada.image} alt={entradaSeleccionada.title} />
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: entradaSeleccionada.text }}></p>
            <div className="flex mt-4">
              <ul className="flex mt-4">
                <strong className="p-1">Tags:</strong>
                {entradaSeleccionada.tags?.map((tag, index) => (
                  <li key={index} className="bg-[#E57649] text-[#FCECD7] ml-1 p-1 rounded-md" >{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
