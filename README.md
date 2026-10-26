# yourWeather

**Consulta del clima actual por ciudad y país.**

yourWeather es una aplicación web para buscar una ubicación y consultar sus condiciones meteorológicas. El proyecto explora el uso de formularios en React y el consumo de una API externa.

## Qué incluye

- Formulario de búsqueda por ciudad y país.
- Consulta de datos a OpenWeatherMap.
- Presentación de ubicación, temperatura, descripción del clima, humedad y velocidad del viento.
- Opción para limpiar la consulta.

## Tecnologías

React · JavaScript · CSS · Fetch API · Create React App.

El formulario, la petición y la presentación de los resultados se encuentran en `src/components/weatherForm.js`.

## Ejecutar en desarrollo

```bash
git clone https://github.com/mateorogatky/yourWeather.git
cd yourWeather
npm install
npm start
```

La aplicación se abre normalmente en http://localhost:3000. Para consultar datos se necesita una clave válida de OpenWeatherMap; la implementación actual configura la clave directamente en el componente `weatherForm.js`.

## Estado y mejoras pendientes

Proyecto de práctica. La búsqueda consulta el clima actual, no un pronóstico de varios días.

Antes de usar los valores de temperatura como referencia, es necesario corregir el parámetro de unidades de la petición y la conversión aplicada en pantalla. También queda por mejorar el manejo de respuestas de error de la API y trasladar la configuración de acceso fuera del componente.

## Autor

[Mateo Nicolás Rogatky](https://github.com/mateorogatky)
