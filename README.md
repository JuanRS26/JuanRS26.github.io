# 🚀 Data Engineering Pipeline – Sales Analytics

## 📌 Descripción del Proyecto

Este proyecto implementa un **pipeline de datos end-to-end** simulando un entorno real de Data Engineering.

El pipeline:

- Extrae datos crudos desde archivos CSV
- Limpia y valida los datos
- Aplica transformaciones de negocio
- Carga los datos en un Data Warehouse
- Genera datasets listos para análisis y dashboards

Este proyecto está diseñado como **proyecto de portafolio profesional** para demostrar buenas prácticas de ingeniería de datos.

---

## 🏗️ Arquitectura del Pipeline

┌─────────────┐<br>
│ Fuente CSV  │<br>
└──────┬──────┘<br>
       ↓<br>
┌─────────────┐<br>
│   Ingesta   │<br>
└──────┬──────┘<br>
       ↓<br>
┌─────────────┐<br>
│  Limpieza   │<br>
└──────┬──────┘<br> 
       ↓<br>
┌──────────────┐<br>
│Transformación│<br>
└──────┬───────┘<br>
       ↓<br>
┌──────────────┐<br>
│ DataWarehouse│<br>
└──────┬───────┘<br>
       ↓<br>
┌─────────────┐<br>
│  Analytics  │<br>
└─────────────┘<br>

---

## 🔄 Flujo del Pipeline

### 1️⃣ Ingesta de Datos

- Fuente: `data/raw/sales.csv`
- Se cargan los datos crudos exactamente como vienen
- No se aplica ninguna transformación

Salida:
data/raw/

---

### 2️⃣ Limpieza de Datos

En este paso:

- Se eliminan duplicados
- Se eliminan valores nulos
- Se corrigen tipos de datos
- Se validan reglas básicas de calidad

Salida:
data/clean/

---

### 3️⃣ Transformación de Datos

En este paso:

- Se crean métricas nuevas:
  - `revenue = price * quantity`
- Se normalizan fechas
- Se generan tablas analíticas
- Se preparan dimensiones y tabla de hechos

Salida:
data/processed/

---

### 4️⃣ Carga al Data Warehouse

- Los datos procesados se cargan en:
  - DuckDB / PostgreSQL / SQLite
- Se crean:
  - Tabla de hechos: `fact_sales`
  - Dimensiones: `dim_products`, `dim_dates`, `dim_customers`

---

### 5️⃣ Capa de Analítica

Los datos quedan listos para:

- Dashboards
- Consultas SQL
- Análisis exploratorio
- Machine Learning

---

## 📁 Estructura del Proyecto

data-engineering-pipeline/<br>
│<br>
├── data/<br>
│ ├── raw/<br>
│ ├── clean/<br>
│ └── processed/<br>
│<br>
├── src/<br>
│ ├── ingest.py<br>
│ ├── clean.py<br>
│ ├── transform.py<br>
│ └── load.py<br>
│<br>
├── pipelines/<br>
│ └── main.py<br>
│<br>
├── tests/<br>
│<br>
├── README.md<br>
└── requirements.txt<br>

---

## ▶️ Cómo Ejecutar el Pipeline

Ejecutar todo el pipeline:

python pipelines/main.py
O ejecutar por pasos:

bash<br>
Copiar código<br>
python src/ingest.py<br>
python src/clean.py<br>
python src/transform.py<br>
python src/load.py<br>

🛠️ Tecnologías Utilizadas<br>
Python
Pandas o Polars
SQL
DuckDB / PostgreSQL / SQLite
(Opcional en el futuro)
Airflow o Prefect
Docker

📊 Ejemplo del Dataset Final
Tabla: fact_sales

date	product	country	quantity	revenue<br>
2024-01-01	Laptop	MX	2	2400<br>
2024-01-02	Mouse	CO	5	250<br>

🧠 Principios de Diseño<br>

Este pipeline fue diseñado para ser:<br>

✅ Modular<br>
✅ Reproducible<br>
✅ Escalable<br>
✅ Fácil de mantener<br>
✅ Fácil de orquestar en producción<br>

Cada etapa:<br>

Tiene inputs y outputs bien definidos<br>
Puede ejecutarse de forma independiente<br>
Puede integrarse con Airflow, Prefect o Dagster<br>

🏆 Objetivo del Proyecto<br>

Este proyecto demuestra:<br>
Buenas prácticas de Data Engineering<br>
Diseño de pipelines reales<br>
Organización de proyectos de datos<br>
Separación por capas (raw / clean / processed)<br>
Carga en Data Warehouse<br>
Preparación de datos analíticos<br>

🚀 Roadmap<br>

 Agregar orquestación con Airflow o Prefect<br>
 Agregar validaciones con Great Expectations<br>
 Agregar tests automáticos<br>
 Dockerizar el proyecto<br>
 Agregar CI/CD<br>

👤 Autor<br>
Tu Nombre Aquí<br>
Data Engineer / Analytics Engineer<br>

⭐ Si te gustó este proyecto
No olvides darle una estrella ⭐ al repo 😄
