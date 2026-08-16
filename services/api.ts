// import { getCookie } from '@/utils/cookies';

// export async function apiFetch(url: string, options: any = {}) {
//     const token = getCookie('token');

//     return fetch(`http://127.0.0.1:8000/api${url}`, {
//         ...options,
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//             ...options.headers,
//         },
//     });
// }
// services/api.ts
import { getCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getCookie('token');

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  return res;
}