# Mi avance del curso de React

Proyecto de la clase de Programación Web. Es una página que muestra las secciones y lecciones del curso de React y JavaScript, con el total de lecciones y minutos.

Autor: René Antonio Arostegui Valle
Docente: Msc. Danilo Rodriguez

## Qué se aplicó del curso

- Componentes funcionales y JSX (`Header`, `Resumen`, `SeccionCard`, `LeccionItem`, `Etiqueta`, `Footer`)
- Props, desestructuración, valores por defecto y `children`
- `map` para dibujar las listas a partir de los datos
- `const` y `let`, funciones flecha y backticks
- Estructura de carpetas con `components` y `datos`

## Cómo ejecutarlo

Requiere Node.js (versión LTS).

```bash
npm install
npm run dev
```

Luego abrir la dirección que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión de producción:

```bash
npm run build
```

## Estructura

```
src/
  components/
    Header.jsx
    Resumen.jsx
    SeccionCard.jsx
    LeccionItem.jsx
    Etiqueta.jsx
    Footer.jsx
  datos/
    curso.js
  App.jsx
  main.jsx
  styles.css
```
