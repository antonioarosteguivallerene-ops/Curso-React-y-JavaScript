import Header from "./components/Header";
import Resumen from "./components/Resumen";
import SeccionCard from "./components/SeccionCard";
import Footer from "./components/Footer";
import { alumno, secciones } from "./datos/curso";

function App() {
  return (
    <div className="app">
      <Header nombre={alumno.nombre} clase={alumno.clase} docente={alumno.docente} />
      <main className="contenido">
        <Resumen secciones={secciones} />
        {secciones.map((s) => (
          <SeccionCard key={s.id} id={s.id} titulo={s.titulo} lecciones={s.lecciones} />
        ))}
      </main>
      <Footer clase={alumno.clase} />
    </div>
  );
}

export default App;
