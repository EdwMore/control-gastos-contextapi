# Control de Gastos

🔗 **Demo en vivo:** https://jolly-beijinho-a9a98c.netlify.app/

📂 **Repositorio:** https://github.com/EdwMore/control-gastos-contextapi

## Descripción

Aplicación web desarrollada con React y TypeScript para gestionar presupuestos personales y controlar gastos de forma sencilla e intuitiva.

El usuario puede definir un presupuesto inicial y registrar gastos en diferentes categorías. La aplicación calcula automáticamente el presupuesto disponible y el total gastado, mostrando además una representación visual mediante una barra de progreso circular.

Los datos se almacenan en Local Storage para mantener la información incluso después de recargar la página o cerrar el navegador.

## Características

* Establecimiento de un presupuesto inicial.
* Visualización del presupuesto total.
* Cálculo automático del presupuesto disponible.
* Seguimiento del total gastado.
* Registro de gastos por categorías.
* Actualización dinámica de los montos al agregar gastos.
* Barra de progreso circular para visualizar el porcentaje utilizado del presupuesto.
* Persistencia de datos mediante Local Storage.
* Interfaz responsive y moderna.

## Categorías Disponibles

* Ahorro
* Comida
* Casa
* Gastos Varios
* Ocio
* Salud
* Suscripciones

## Tecnologías Utilizadas

* React
* TypeScript
* Tailwind CSS
* Context API
* useReducer
* useEffect
* useState
* Custom Hooks
* Local Storage
* React Circular Progressbar

## Conceptos Aplicados

### Manejo de Estado Global

Se utilizó Context API junto con useReducer para centralizar la gestión del estado de la aplicación y evitar el prop drilling entre componentes.

### Persistencia de Datos

Se implementó Local Storage para almacenar el presupuesto y los gastos registrados, permitiendo mantener la información entre sesiones.

### Gestión de Efectos

Se empleó useEffect para sincronizar los cambios del estado con el almacenamiento local y mantener los datos actualizados.

### Custom Hooks

Se desarrolló un Custom Hook para encapsular la lógica de acceso al contexto, mejorando la reutilización y organización del código.

### Tipado con TypeScript

Se utilizaron tipos personalizados para proporcionar mayor seguridad y mantenibilidad al proyecto.

### Diseño Responsive

La interfaz fue construida con Tailwind CSS para garantizar una experiencia visual moderna y adaptable a diferentes dispositivos.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/EdwMore/control-gastos-contextapi
```

Accede al directorio del proyecto:

```bash
cd control-gastos
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Aprendizajes

Durante el desarrollo de este proyecto se reforzaron conocimientos relacionados con:

* Gestión de estado global con Context API.
* Implementación de reducers mediante useReducer.
* Creación y uso de Custom Hooks.
* Persistencia de datos con Local Storage.
* Tipado estático utilizando TypeScript.
* Desarrollo de interfaces modernas con Tailwind CSS.
* Organización y escalabilidad de aplicaciones React.