# Manual práctico de Git y GitHub

> Una guía visual, clara y directa para aprender a versionar proyectos, colaborar en equipo y publicar en GitHub.

<p align="center">
  <a href="index.html">
    <img src="https://img.shields.io/badge/📖%20Abrir%20manual-0969DA?style=for-the-badge&logo=gitbook&logoColor=white" alt="Abrir manual">
  </a>
  <a href="https://github.com/mikeaprilee">
    <img src="https://img.shields.io/badge/Autor-@mikeaprilee-181717?style=for-the-badge&logo=github&logoColor=white" alt="Perfil de GitHub">
  </a>
  <img src="https://img.shields.io/badge/Idioma-Español-F1C40F?style=for-the-badge" alt="Idioma español">
  <img src="https://img.shields.io/badge/Licencia-MIT-2EA44F?style=for-the-badge" alt="Licencia MIT">
</p>

## 👋 Bienvenido

Este repositorio contiene un manual práctico de **Git y GitHub** pensado para aprender haciendo. Explica los conceptos con ejemplos de terminal, recomendaciones sencillas y un flujo de trabajo que puedes aplicar desde tu primer proyecto. También diferencia el trabajo local con Git de la gestión de GitHub mediante GitHub CLI (`gh`).

La idea fundamental es:

```text
Editar archivos → preparar cambios → crear un commit → compartirlo en GitHub
```

## 🚀 Acceso rápido

### Ver el manual en el navegador

Abre [`index.html`](index.html) directamente en tu navegador. No necesitas instalar dependencias ni levantar un servidor.

También puedes clonar el repositorio y abrirlo desde la terminal:

```bash
git clone https://github.com/mikeaprilee/Manual_Git-GitHub.git
cd Manual_Git-GitHub
```

Después, abre `index.html` con tu navegador favorito.

> 💡 **Consejo:** si utilizas VS Code, puedes abrir la carpeta del repositorio y hacer clic sobre `index.html`.

## ✨ ¿Qué encontrarás?

- **Explicaciones desde cero** sobre Git, GitHub, repositorios, commits, ramas y remotos.
- **Preparación inicial**: instalación de Git, configuración de identidad y autenticación.
- **GitHub CLI (`gh`)** para trabajar con repositorios, issues, pull requests y acciones desde la terminal.
- **Zonas de Git y archivos locales**: `Working Tree`, `Staging Area`, repositorio local, archivos `Untracked`, `Modified` y uso de `.gitignore`.
- **Primer proyecto paso a paso**, tanto empezando desde una carpeta local con `gh repo create` como clonando un repositorio existente.
- **Chuleta de comandos esenciales**: `status`, `add`, `commit`, `log`, `diff`, `restore`, `stash`, `branch`, `switch`, `merge`, `fetch`, `pull` y `push`.
- **Trabajo en equipo** con ramas, pull requests, estados de revisión, tipos de fusión y buenas prácticas.
- **Resolución de conflictos** con ejemplos de merge, rebase y herramientas visuales del editor.
- **Publicación con GitHub Pages** para proyectos web estáticos.
- **Seguridad y organización**: `.gitignore`, protección de `main`, 2FA, secretos, dependencias y licencias.
- **Errores frecuentes** y formas seguras de deshacer cambios.
- **Reto práctico final** para comprobar lo aprendido.

## Contenido del manual

| Sección | Tema |
|:--:|---|
| 1 | Qué son Git y GitHub |
| 2 | Preparación inicial y GitHub CLI |
| 3 | Conceptos básicos |
| 4 | Primer proyecto paso a paso |
| 5 | Comandos esenciales |
| 6 | Ramas y trabajo en equipo |
| 7 | GitHub desde la web |
| 8 | Pull requests y revisión de código |
| 9 | Conflictos y cómo resolverlos |
| 10 | Publicar un proyecto y GitHub Pages |
| 11 | Buenas prácticas y seguridad |
| 12 | Errores frecuentes |
| 13 | Chuleta final y reto práctico |

## Características

El manual está construido como una página web independiente y ligera. En la versión principal, todo el contenido se encuentra en `index.html`:

- **Modo claro y modo oscuro** con preferencia guardada en el navegador.
- **Botón para copiar** los bloques de código.
- **Diseño preparado para imprimir o guardar como PDF**.
- **Índice navegable** para saltar rápidamente entre secciones.
- **Diseño responsive** para consultarlo en distintos tamaños de pantalla.
- **Interfaz limpia** con ejemplos, avisos y tablas de referencia.

La rama [`refactor/separa-css-javascript`](https://github.com/mikeaprilee/Manual_Git-GitHub/tree/refactor/separa-css-javascript)
conserva una alternativa del mismo manual con los archivos separados:

- `index.html` para la estructura y el contenido.
- `styles.css` para los estilos.
- `script.js` para la funcionalidad interactiva.

Esta rama se mantiene como alternativa independiente y no sustituye a `main`. Para consultarla localmente:

```bash
git switch refactor/separa-css-javascript
```

Para volver a la versión original en un único archivo:

```bash
git switch main
```

## 📌 Primer flujo recomendado

Cuando termines la preparación inicial, este es el flujo que practicarás:

```bash
# 1. Consulta el estado del proyecto
git status

# 2. Crea una rama para tu tarea
git switch -c mi-tarea

# 3. Revisa y prepara los cambios
git diff
git add .

# 4. Guarda un punto coherente del historial
git commit -m "Describe el cambio realizado"

# 5. Comparte la rama
git push -u origin mi-tarea
```

Después podrás abrir una **Pull Request** en GitHub para revisar e integrar el cambio.

## ¿Para quién es?

Este manual es especialmente útil para:

- Personas que empiezan a usar Git.
- Estudiantes de desarrollo web y programación.
- Quienes quieren organizar mejor sus proyectos personales.
- Equipos que necesitan una introducción práctica al flujo con ramas y Pull Requests.
- Cualquiera que quiera tener una referencia rápida en español.

No hace falta experiencia previa: los conceptos se presentan de forma progresiva y los comandos aparecen acompañados de su explicación.

## 📁 Estructura relacionada

```text
Manual_Git-GitHub/
├── index.html        # Manual completo e interactivo
├── styles.css        # Estilos en la rama separada
├── script.js         # JavaScript en la rama separada
├── LICENSE           # Licencia MIT
└── README.md         # Esta presentación
```

En `main`, `index.html` contiene también el CSS y el JavaScript. En
`refactor/separa-css-javascript`, esos bloques se encuentran en `styles.css` y `script.js`.

## 🤝 Contribuir

Las mejoras son bienvenidas. Si encuentras un error o quieres proponer una explicación más clara:

1. Crea un *fork* del repositorio.
2. Crea una rama: `git switch -c mejora-del-manual`.
3. Realiza cambios pequeños y descriptivos.
4. Comprueba que `index.html` sigue abriéndose correctamente y que sus recursos externos cargan si trabajas en la rama separada.
5. Abre una Pull Request explicando qué has mejorado.

También puedes abrir una [issue](https://github.com/mikeaprilee/Manual_Git-GitHub/issues) para proponer contenidos o comunicar un problema.

## 📄 Licencia

Este proyecto se distribuye bajo la [licencia MIT](LICENSE). Puedes utilizar, adaptar y compartir el material respetando sus condiciones.

---

<p align="center">
  Hecho con ☕, HTML y muchas ganas de aprender.
  <br>
  <a href="./index.html"><strong>👉 Empieza a leer el manual</strong></a>
</p>
