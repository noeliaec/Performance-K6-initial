
# 📊 Performance Testing con k6

Este proyecto contiene un script de prueba de carga utilizando [k6](https://k6.io/) para simular múltiples usuarios accediendo a un endpoint y validar su rendimiento.

---

## 🚀 Instalación de k6

### Opción recomendada (binario manual):

1. Ir a la página oficial de k6: [https://k6.io/docs/get-started/installation/](https://k6.io/docs/get-started/installation/)
2. Descargar la versión para Windows.
3. Extraer el ejecutable y agregar su carpeta al PATH del sistema.
4. Verificá la instalación con:

```bash
k6 version
```

---

## ▶️ Ejecutar el script de carga

Desde la carpeta raíz del proyecto:

```bash
k6 run test-carga.js
```

---

## 📈 Entendiendo los resultados

- `http_req_duration`: tiempo de respuesta de las requests
- `http_req_failed`: porcentaje de requests fallidas
- `checks`: validaciones personalizadas dentro del test

### Ejemplo de umbrales (thresholds) configurados:

```js
thresholds: {
  http_req_duration: ['p(95)<800'], // 95% de las requests deben responder en menos de 800ms
  http_req_failed: ['rate<0.05']    // Menos del 5% deben fallar
}
```

---

## 📁 Estructura del proyecto

```
Performance-K6/
├── node_modules/ (si usás npm)
├── test-carga.js
├── README.md
└── package.json (si aplica)
```

---

## 🧪 ¿Qué testea este script?

- Status code 200
- Tiempo de respuesta menor a 500ms
- Hasta 10 usuarios virtuales simultáneos
- Ramp-up y duración definidos por etapas

---

## ✨ Autor

Noelia Castro – 2025
