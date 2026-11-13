function Resumen({ secciones }) {
  let lecciones = 0;
  let minutos = 0;

  for (const s of secciones) {
    lecciones += s.lecciones.length;
    for (const l of s.lecciones) {
      minutos += l.minutos;
    }
  }

  const datos = [
    { etiqueta: "Secciones", valor: secciones.length },
    { etiqueta: "Lecciones", valor: lecciones },
    { etiqueta: "Minutos de video", valor: minutos },
  ];

  return (
    <section className="resumen">
      {datos.map((d) => (
        <div className="resumen__dato" key={d.etiqueta}>
          <strong>{d.valor}</strong>
          <span>{d.etiqueta}</span>
        </div>
      ))}
    </section>
  );
}

export default Resumen;
