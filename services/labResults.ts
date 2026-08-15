import { getCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const saveLabResult = async (data) => {
      const token = getCookie('token'); // ✅ read token from cookie

  const res = await fetch(`${API_URL}/lab-results`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
   'Authorization': `Bearer ${token}`,  },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to save lab result");
  }

  return res.json();
};

export const getLabResults = async (token) => {
  const res = await fetch(`${API_URL}/lab-results`, {
 headers: {
            'Authorization': `Bearer ${token}`, // ✅ send as header
        },
});

  if (!res.ok) {
    throw new Error("Failed to fetch results");
  }

  return res.json();
};