function Etiqueta({ tipo = "video", children }) {
  return <span className={`etiqueta etiqueta--${tipo}`}>{children}</span>;
}

export default Etiqueta;
