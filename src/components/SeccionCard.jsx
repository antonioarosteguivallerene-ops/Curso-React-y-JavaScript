import LeccionItem from "./LeccionItem";

const totalMinutos = (lecciones) => {
  let total = 0;
  for (const leccion of lecciones) {
    total += leccion.minutos;
  }
  return total;
};

function SeccionCard({ id, titulo, lecciones }) {
  return (
    <article className="seccion">
      <h2>{`Sección ${id}: ${titulo}`}</h2>
      <p className="seccion__resumen">
        {`${lecciones.length} lecciones · ${totalMinutos(lecciones)} min`}
      </p>
      <ul className="seccion__lista">
        {lecciones.map((l) => (
          <LeccionItem
            key={l.id}
            numero={l.id}
            titulo={l.titulo}
            minutos={l.minutos}
            tipo={l.tipo}
          />
        ))}
      </ul>
    </article>
  );
}

export default SeccionCard;
