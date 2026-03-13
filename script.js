const projects = {

project1:{
title:"TaskFlow",
image:"images/project1.jpg",
description:"Sistema colaborativo para gestión de tareas.",
details:"TaskFlow es una plataforma diseñada para equipos remotos que necesitan organizar tareas, proyectos y deadlines. Incluye notificaciones en tiempo real, paneles colaborativos y seguimiento de progreso.",
tech:["React","Node.js","MongoDB","Socket.io"],
github:"https://github.com/",
demo:"#"
},

project2:{
title:"ShopWave",
image:"images/project2.jpg",
description:"Solución e-commerce completa.",
details:"ShopWave permite a pequeñas empresas crear tiendas online modernas con carrito de compra, pagos integrados y panel administrativo avanzado.",
tech:["Vue","Firebase","Stripe API"],
github:"https://github.com/",
demo:"#"
},

project3:{
title:"TravelMap",
image:"images/project3.jpg",
description:"Planificador inteligente de viajes.",
details:"TravelMap permite crear rutas de viaje interactivas utilizando mapas dinámicos, recomendaciones automáticas de lugares y planificación de itinerarios.",
tech:["JavaScript","Leaflet.js","Express"],
github:"https://github.com/",
demo:"#"
}

}


function openModal(projectId){

const project = projects[projectId]

const modal = document.getElementById("modal")
const body = document.getElementById("modal-body")

body.innerHTML = `

<h2>${project.title}</h2>

<img src="${project.image}">

<p>${project.details}</p>

<div class="tech">
${project.tech.map(t=>`<span>${t}</span>`).join("")}
</div>

<div class="links">
<a href="${project.github}" target="_blank">GitHub</a>
<a href="${project.demo}" target="_blank">Demo</a>
</div>

`

modal.style.display="flex"

}


function closeModal(){

document.getElementById("modal").style.display="none"

}


window.onclick=function(e){

const modal=document.getElementById("modal")

if(e.target==modal){
modal.style.display="none"
}

}