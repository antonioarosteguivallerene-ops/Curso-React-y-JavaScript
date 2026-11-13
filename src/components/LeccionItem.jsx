import Etiqueta from "./Etiqueta";

function LeccionItem({ numero, titulo, minutos, tipo }) {
  return (
    <li className="leccion">
      <span className="leccion__numero">{numero}</span>
      <span className="leccion__titulo">{titulo}</span>
      <Etiqueta tipo={tipo}>{tipo}</Etiqueta>
      <span className="leccion__minutos">{`${minutos} min`}</span>
    </li>
  );
}

export default LeccionItem;
