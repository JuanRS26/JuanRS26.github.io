// ========================================
// PROYECTOS
// ========================================

const projects = {

  project1: {
    title: "TaskFlow Data Pipeline",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    description: "Pipeline de datos para análisis de productividad.",
    details: `
      <p>
        Este proyecto implementa un pipeline de datos que procesa información
        de actividad de equipos remotos para generar métricas de productividad.
      </p>

      <div class="architecture">
        <div class="arch-box">Data Sources<br><span>App Events</span></div>
        <div class="arch-arrow">→</div>
        <div class="arch-box">ETL Pipeline<br><span>Python + Airflow</span></div>
        <div class="arch-arrow">→</div>
        <div class="arch-box">Data Warehouse<br><span>PostgreSQL</span></div>
        <div class="arch-arrow">→</div>
        <div class="arch-box">Analytics<br><span>Dashboards</span></div>
      </div>
    `,
    tech: ["Python", "Airflow", "PostgreSQL"],
    github: "https://github.com/tuusuario/taskflow"
  },

  project2: {
    title: "ShopWave Analytics",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    description: "Arquitectura de datos para analítica e-commerce.",
    details: `
      <p>
        Sistema de ingesta y procesamiento de datos de ventas que permite analizar 
        comportamiento de clientes, tendencias de compra y rendimiento de productos.
      </p>
    `,
    tech: ["Spark", "AWS", "SQL"],
    github: "https://github.com/tuusuario/shopwave"
  },

  project3: {
    title: "TravelMap Insights",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    description: "Procesamiento de datos geoespaciales.",
    details: `
      <p>
        Pipeline de datos que analiza información geográfica para generar recomendaciones 
        inteligentes de rutas y destinos turísticos.
      </p>
    `,
    tech: ["Python", "GeoPandas", "Docker"],
    github: "https://github.com/tuusuario/travelmap"
  }

};

// ========================================
// FUNCIONES MODAL
// ========================================

/**
 * Abre el modal de un proyecto específico
 * @param {string} id - ID del proyecto
 */

function openProject(id){
  const project = projects[id];
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  // Contenido del modal
  body.innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.image}" style="width:100%;border-radius:10px;margin-bottom:15px;">
    <p>${project.details}</p>
    <p><strong>Technologies:</strong> ${project.tech.join(", ")}</p>
    <a href="${project.github}" target="_blank" class="github-btn">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg">
      View Code
    </a>
  `;

  // Mostrar modal
  modal.classList.add("show"); // en vez de style.display
}

/**
 * Cierra el modal
 */
function closeModal(){
  const modal = document.getElementById("modal");
  modal.classList.remove("show"); // oculta con transición
}

// ========================================
// CIERRE DEL MODAL AL HACER CLICK FUERA
// ========================================

window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};