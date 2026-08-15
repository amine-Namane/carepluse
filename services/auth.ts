// services/auth.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { apiFetch } from './api';
import { deleteCookie } from '@/utils/cookies';

export async function login(email: string, password: string) {
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // ✅ store in cookie
    document.cookie = `token=${data.token}; path=/; max-age=86400`;

    return data;
}


export async function logout() {
    await apiFetch('/logout', {
        method: 'POST',
    });

    deleteCookie('token');
}

export async function getUser() {
    const res = await apiFetch('/user');

    if (!res.ok) {
        throw new Error('Unauthenticated');
    }

    return res.json();
}