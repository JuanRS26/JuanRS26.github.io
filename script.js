const projects = {

project1:{
title:"TaskFlow Data Pipeline",
description:"Pipeline designed to process and analyze team productivity data.",
tech:"Python, Airflow, PostgreSQL"
},

project2:{
title:"ShopWave Analytics",
description:"Data warehouse and analytics platform for e-commerce insights.",
tech:"Spark, AWS, SQL"
},

project3:{
title:"TravelMap Insights",
description:"Geospatial data processing pipeline for travel recommendations.",
tech:"Python, GeoPandas, Docker"
}

}



function openProject(id){

const project = projects[id]

const modal = document.getElementById("modal")
const body = document.getElementById("modal-body")

body.innerHTML = `

<h2>${project.title}</h2>

<p>${project.description}</p>

<p><strong>Technologies:</strong> ${project.tech}</p>

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