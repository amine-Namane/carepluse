
// services/doctors.ts
import { getCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchDoctors() {
    const token = getCookie('token'); // ✅ read token from cookie

    const res = await fetch(`${API_URL}/doctors`, {
        headers: {
            'Authorization': `Bearer ${token}`, // ✅ send as header
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch doctors');
    }

    return res.json();
}