# Manual práctico de Git y GitHub

> Una guía visual, clara y directa para aprender a versionar proyectos, colaborar en equipo y publicar en GitHub.

<p align="center">
  <a href="./Manual/index.html">
    <img src="https://img.shields.io/badge/📖%20Abrir%20manual-0969DA?style=for-the-badge&logo=gitbook&logoColor=white" alt="Abrir manual">
  </a>
  <a href="https://github.com/mikeaprilee">
    <img src="https://img.shields.io/badge/Autor-@mikeaprilee-181717?style=for-the-badge&logo=github&logoColor=white" alt="Perfil de GitHub">
  </a>
  <img src="https://img.shields.io/badge/Idioma-Español-F1C40F?style=for-the-badge" alt="Idioma español">
  <img src="https://img.shields.io/badge/Licencia-MIT-2EA44F?style=for-the-badge" alt="Licencia MIT">
</p>

## 👋 Bienvenido

Este repositorio contiene un manual práctico de **Git y GitHub** pensado para aprender haciendo. Explica los conceptos con ejemplos de terminal, recomendaciones sencillas y un flujo de trabajo que puedes aplicar desde tu primer proyecto.

La idea fundamental es:

```text
Editar archivos → preparar cambios → crear un commit → compartirlo en GitHub
```

## 🚀 Acceso rápido

### Ver el manual en el navegador

Abre [`Manual/index.html`](index.html) directamente en tu navegador. No necesitas instalar dependencias ni levantar un servidor.

También puedes clonar el repositorio y abrirlo desde la terminal:

```bash
git clone https://github.com/mikeaprilee/Manual_Git-GitHub.git
cd Manual_Git-GitHub
```

Después, abre `Manual/index.html` con tu navegador favorito.

> 💡 **Consejo:** si utilizas VS Code, puedes abrir la carpeta del repositorio y hacer clic sobre `Manual/index.html`.

## ✨ ¿Qué encontrarás?

- **Explicaciones desde cero** sobre Git, GitHub, repositorios, commits, ramas y remotos.
- **Preparación inicial**: instalación de Git, configuración de identidad y autenticación.
- **GitHub CLI (`gh`)** para trabajar con repositorios, issues, pull requests y acciones desde la terminal.
- **Primer proyecto paso a paso**, tanto empezando desde una carpeta local como clonando un repositorio existente.
- **Chuleta de comandos esenciales**: `status`, `add`, `commit`, `log`, `branch`, `switch`, `merge`, `pull` y `push`.
- **Trabajo en equipo** con ramas, pull requests, revisión de código y buenas prácticas.
- **Resolución de conflictos** con ejemplos de merge y rebase.
- **Publicación con GitHub Pages** para proyectos web estáticos.
- **Seguridad y organización**: `.gitignore`, protección de `main`, 2FA, secretos y licencias.
- **Errores frecuentes** y formas seguras de deshacer cambios.
- **Reto práctico final** para comprobar lo aprendido.

## 🧭 Contenido del manual

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

## 🛠️ Características

El manual está construido como una página web independiente y ligera:

- 🌗 **Modo claro y modo oscuro** con preferencia guardada en el navegador.
- 📋 **Botón para copiar** los bloques de código.
- 🖨️ **Diseño preparado para imprimir o guardar como PDF**.
- 🔗 **Índice navegable** para saltar rápidamente entre secciones.
- 📱 **Diseño responsive** para consultarlo en distintos tamaños de pantalla.
- 🎨 **Interfaz limpia** con ejemplos, avisos y tablas de referencia.

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

## 👥 ¿Para quién es?

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
├── Manual/
│   └── index.html    # Manual completo e interactivo
│   └── LICENSE       # Licencia MIT
└── README.md         # Esta presentación
```

## 🤝 Contribuir

Las mejoras son bienvenidas. Si encuentras un error o quieres proponer una explicación más clara:

1. Crea un *fork* del repositorio.
2. Crea una rama: `git switch -c mejora-del-manual`.
3. Realiza cambios pequeños y descriptivos.
4. Comprueba que `Manual/index.html` sigue abriéndose correctamente.
5. Abre una Pull Request explicando qué has mejorado.

También puedes abrir una [issue](https://github.com/mikeaprilee/Manual_Git-GitHub/issues) para proponer contenidos o comunicar un problema.

## 📄 Licencia

Este proyecto se distribuye bajo la [licencia MIT](./Manual/LICENSE). Puedes utilizar, adaptar y compartir el material respetando sus condiciones.

---

<p align="center">
  Hecho con ☕, HTML y muchas ganas de aprender.
  <br>
  <a href="./Manual/index.html"><strong>👉 Empieza a leer el manual</strong></a>
</p>
