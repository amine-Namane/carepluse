import { useQuery } from '@tanstack/react-query';
import { fetchDoctors } from '@/services/doctor';
// hooks/useDoctors.js
export function useDoctors() {
    return useQuery({
        queryKey: ['doctors'],
        queryFn: fetchDoctors,
        select: (data) => {
            // ✅ Always return array
            if (Array.isArray(data)) return data;
            if (Array.isArray(data?.data)) return data.data;
            return [];
        },
    });
}