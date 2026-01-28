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

┌─────────────┐
│ Fuente CSV │
└──────┬──────┘
↓
┌─────────────┐
│ Ingesta │
└──────┬──────┘
↓
┌─────────────┐
│ Limpieza │
└──────┬──────┘
↓
┌──────────────┐
│Transformación│
└──────┬───────┘
↓
┌──────────────┐
│ DataWarehouse│
└──────┬───────┘
↓
┌─────────────┐
│ Analytics │
└─────────────┘

yaml
Copiar código

---

## 🔄 Flujo del Pipeline

### 1️⃣ Ingesta de Datos

- Fuente: `data/raw/sales.csv`
- Se cargan los datos crudos exactamente como vienen
- No se aplica ninguna transformación

Salida:
data/raw/

yaml
Copiar código

---

### 2️⃣ Limpieza de Datos

En este paso:

- Se eliminan duplicados
- Se eliminan valores nulos
- Se corrigen tipos de datos
- Se validan reglas básicas de calidad

Salida:
data/clean/

yaml
Copiar código

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

yaml
Copiar código

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

data-engineering-pipeline/
│
├── data/
│ ├── raw/
│ ├── clean/
│ └── processed/
│
├── src/
│ ├── ingest.py
│ ├── clean.py
│ ├── transform.py
│ └── load.py
│
├── pipelines/
│ └── main.py
│
├── tests/
│
├── README.md
└── requirements.txt

yaml
Copiar código

---

## ▶️ Cómo Ejecutar el Pipeline

Ejecutar todo el pipeline:

```bash
python pipelines/main.py
O ejecutar por pasos:

bash
Copiar código
python src/ingest.py
python src/clean.py
python src/transform.py
python src/load.py
🛠️ Tecnologías Utilizadas
Python

Pandas o Polars

SQL

DuckDB / PostgreSQL / SQLite

(Opcional en el futuro)

Airflow o Prefect

Docker

📊 Ejemplo del Dataset Final
Tabla: fact_sales

date	product	country	quantity	revenue
2024-01-01	Laptop	MX	2	2400
2024-01-02	Mouse	CO	5	250

🧠 Principios de Diseño
Este pipeline fue diseñado para ser:

✅ Modular

✅ Reproducible

✅ Escalable

✅ Fácil de mantener

✅ Fácil de orquestar en producción

Cada etapa:

Tiene inputs y outputs bien definidos

Puede ejecutarse de forma independiente

Puede integrarse con Airflow, Prefect o Dagster

🏆 Objetivo del Proyecto
Este proyecto demuestra:

Buenas prácticas de Data Engineering

Diseño de pipelines reales

Organización de proyectos de datos

Separación por capas (raw / clean / processed)

Carga en Data Warehouse

Preparación de datos analíticos

🚀 Roadmap
 Agregar orquestación con Airflow o Prefect

 Agregar validaciones con Great Expectations

 Agregar tests automáticos

 Dockerizar el proyecto

 Agregar CI/CD

👤 Autor
Tu Nombre Aquí
Data Engineer / Analytics Engineer

⭐ Si te gustó este proyecto
No olvides darle una estrella ⭐ al repo 😄

yaml
Copiar código

---

# ✅ Ahora sí

✔ Es **un solo bloque**  
✔ No hay partes sueltas  
✔ No hay que copiar nada por separado  
✔ Pegas esto en `README.md` y listo  

---

Si quieres, en el próximo mensaje lo adaptamos:

- A tu **stack real**
- A **inglés**
- O a **nivel más avanzado / más simple** según lo que quieras mostrar en tu portafolio.
