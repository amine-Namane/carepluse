import { getCookie } from '@/utils/cookies';

export async function apiFetch(url: string, options: any = {}) {
    const token = getCookie('token');

    return fetch(`http://127.0.0.1:8000/api${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            ...options.headers,
        },
    });
}