# 📋 Task & Habit Tracker

**Task & Habit Tracker** es una aplicación desarrollada en **React** que permite a los usuarios gestionar sus tareas diarias, hacer seguimiento de sus hábitos y visualizar estadísticas detalladas.

---

## 📌 Características Principales

- ✅ **Gestión de Tareas**: Añade, completa y elimina tareas.
- ✅ **Seguimiento de Hábitos**: Añade hábitos y marca días completados (máximo 7 días por semana).
- ✅ **Estadísticas Detalladas**: Visualización de estadísticas generales de tareas y hábitos.
- ✅ **Full Responsive**: Adaptable a cualquier tamaño de pantalla (móvil, tablet, escritorio).
- ✅ **Interfaz Intuitiva**: Diseño atractivo y fácil de usar.

---

## 🛠️ Tecnologías Utilizadas

- **React** ⚛️
- **React Router DOM** 📍
- **useReducer** y **Custom Hooks** 🎣
- **CSS3** 🎨
- **Vite** ⚡

---

## 📁 Estructura del Proyecto

\`\`\`
task-habit-tracker/
│
├── public/ # Archivos públicos
│
├── src/
│ ├── components/ # Componentes reutilizables (Navbar, TaskList, HabitList, etc.)
│ ├── context/ # Contextos globales (TaskContext, HabitsContext)
│ ├── hooks/ # Custom hooks (useTaskReducer, etc.)
│ ├── pages/ # Páginas principales (TaskPage, HabitsPage, StatisticsPage)
│ ├── styles/ # Archivos CSS
│ ├── App.jsx # Configuración de rutas y estructura principal
│ ├── main.jsx # Punto de entrada de React
│ └── index.html
│
└── package.json # Dependencias y scripts
\`\`\`

---

## 📥 Instalación

1. **Clona el repositorio:**

\`\`\`bash
git clone https://github.com/tu-usuario/task-habit-tracker.git
\`\`\`

2. **Instala las dependencias:**

\`\`\`bash
npm install
\`\`\`

3. **Inicia el servidor de desarrollo:**

\`\`\`bash
npm run dev
\`\`\`

4. **Abre tu navegador en:**

\`\`\`
http://localhost:5173/
\`\`\`

---

## 🚀 Uso

- **Tareas:**

  - Añade una nueva tarea usando el formulario.
  - Marca las tareas como completadas o elimínalas.
  - Revisa estadísticas de tareas completadas y pendientes.

- **Hábitos:**

  - Crea nuevos hábitos y haz seguimiento semanal.
  - Máximo 7 días por ciclo semanal.
  - Reinicia la semana cuando sea necesario.

- **Estadísticas:**
  - Visualiza datos detallados de tareas e historial de hábitos.

---

## 🎯 Requisitos Técnicos del Proyecto

- ✅ **Full Responsive**
- ✅ **Buen uso de CSS y arquitectura de información**
- ✅ **Uso de \`react-router-dom\` para navegación**
- ✅ **Custom Hook implementado**
- ✅ **Uso de \`useReducer\`**
- ✅ **Sin re-renderizaciones innecesarias**
- ✅ **Componentes bien estructurados**

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y compartirlo libremente.

---

🚀 **¡Disfruta usando el Task & Habit Tracker y mejora tu productividad!** 🎉
