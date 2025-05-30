import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },   // subida suave
    { duration: '20s', target: 10 },  // carga sostenida
    { duration: '10s', target: 0 },   // bajada
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% de las requests deben tardar <800ms
    http_req_failed: ['rate<0.05'],   // menos del 5% de errores
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');

  check(res, {
    'status 200': (r) => r.status === 200,
    'tiempo < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // espera entre peticiones
}
