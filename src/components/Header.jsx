function Header({ nombre, clase, docente }) {
  return (
    <header className="header">
      <p className="header__clase">{clase}</p>
      <h1>Mi avance del curso de React</h1>
      <p className="header__datos">
        {nombre} · Docente: {docente}
      </p>
    </header>
  );
}

export default Header;
