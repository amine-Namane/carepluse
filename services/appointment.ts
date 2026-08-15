// services/appointment.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createAppointment(data: any) {
    const res = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to create appointment');
    }

    return res.json();
}