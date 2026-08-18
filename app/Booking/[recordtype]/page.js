// import Doctorlist from '@/components/ui/Listeofdoctors'
// import { notFound } from 'next/navigation'

// const validSpecialties = ['otology', 'cardiology', 'neurology']

// export default function Page({ params }) {
//   return (
//     <Doctorlist doctortype={params.recordtype 
//       ? params.recordtype.charAt(0).toUpperCase() + params.recordtype.slice(1)
//       : ""} />
//   )
// }
// "use client";
// import Doctorlist from "@/components/Listeofdoctors";
// import { supabase } from "@/lib/supabaseclient";
// import { useRouter } from "next/navigation";
// import { useEffect, useState, use } from "react";
//
// export default function DoctorsPage({ params: paramsPromise }) {
//   const router = useRouter();
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   // Unwrap params using use()
//   const params = use(paramsPromise);
//
//   useEffect(() => {
//     async function fetchData() {
//       const { data: { user } } = await supabase.auth.getUser();
//
//       if (!user) {
//         router.push("/Patient"); // Redirect if not logged in
//         return;
//       }
//
//       // Fetch doctors data
//       const { data: doctors, error } = await supabase.from("doctor").select("*");
//       if (error) {
//         console.error("Error fetching doctors:", error);
//       } else {
//         setDoctors(doctors);
//       }
//
//       setLoading(false);
//     }
//
//     fetchData();
//   }, [router]);
//
//   if (loading) return <p>Loading doctors...</p>;
//
//   return (
//     <Doctorlist
//       doctortype={params?.recordtype ? params.recordtype.charAt(0).toUpperCase() + params.recordtype.slice(1) : ""}
//       doctors={doctors}
//     />
//   );
// }
'use client';

import { useParams } from 'next/navigation';
import { useBooking } from '@/utils/BookingContext';
import { specializations } from '@/data/specializations';
import { filterDoctors } from '@/utils/filterDoctors';

import Header from '../Header';
import ResultsHeader from '@/components/newcomponents/booking/ResultsHeader';
import DoctorsGrid from '@/components/newcomponents/booking/DoctorsGrid';
import Pagination from '@/components/newcomponents/booking/Pagination';

import { useDoctors } from '@/hooks/useDoctors';

export default function SpecializationPage() {
    const params = useParams();

    const {
        searchQuery,
        filters,
        handleSearch,
        viewMode,
        setViewMode,
        setShowFilters,
        showFilters,
    } = useBooking();

    const {
        data: doctorsData,
        isLoading,
        error,
    } = useDoctors();

    // Fix: Properly extract doctors from API response
    const doctorsFromApi = Array.isArray(doctorsData) 
        ? doctorsData 
        : doctorsData?.data ?? [];

    // Fix: Get slug from params
    const slug = String(
        params?.specialization || params?.recordtype || ''
    ).toLowerCase();

    // Find specialization from data
    const specialization = specializations.find(
        (item) => item.slug.toLowerCase() === slug
    );

    const categoryName = 
        specialization?.name || 
        (slug 
            ? slug.charAt(0).toUpperCase() + slug.slice(1) 
            : 'Doctors');

    // Fix: Pass the correct parameters to filterDoctors
    const filteredDoctors = slug 
        ? filterDoctors(
              doctorsFromApi,
              searchQuery,
              slug,
              filters
          ) 
        : doctorsFromApi;

    // Loading state
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-500">Loading doctors...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 text-lg font-semibold">
                        Failed to load doctors.
                    </p>
                    <p className="text-gray-500 mt-2">Please try again later.</p>
                </div>
            </div>
        );
    }
console.log('PARAMS:', params);
console.log('SLUG:', slug);
console.log('API DOCTORS:', doctorsFromApi);
console.log(
    'SPECIALIZATIONS:',
    doctorsFromApi.map((doctor) => doctor.specialization)
);
    return (
        <>
            <Header
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                setViewMode={setViewMode}
                viewMode={viewMode}
                filteredDoctors={filteredDoctors}
                categoryName={categoryName}
                mockDoctors={doctorsFromApi}
                setShowFilters={setShowFilters}
                showFilters={showFilters}
            />

            <ResultsHeader
                categoryName={categoryName}
                totalCount={filteredDoctors.length}
            />

            {filteredDoctors.length > 0 ? (
                <DoctorsGrid doctors={filteredDoctors} />
            ) : (
                <div className="flex min-h-[300px] items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-500 text-lg">
                            No doctors found for {categoryName}.
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                </div>
            )}

            {filteredDoctors.length > 0 && (
                <Pagination total={filteredDoctors.length} />
            )}
        </>
    );
}