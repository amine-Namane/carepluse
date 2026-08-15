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
// app/Booking/[specialization]/page.jsx
// Dynamic route — handles /Booking/cardiologist, /Booking/dentist, etc.
// `params.specialization` matches the slug in specializations data.

import { useParams } from 'next/navigation';
import { useBooking } from '@/utils/BookingContext';
// import { mockDoctors } from '@/data/doctors';
import { specializations } from '@/data/specializations';
import { filterDoctors } from '../../../utils/filterDoctors';
import Header from '../Header'; // your existing Header component
import ResultsHeader from '../../../components/newcomponents/booking/ResultsHeader';
import DoctorsGrid from '../../../components/newcomponents/booking/DoctorsGrid';
// import Pagination from '../../../components/newcomponents/booking/Pagination';
import Pagination from '@/components/newcomponents/booking/Pagination';
import {useDoctors} from '@/hooks/useDoctors'
export default function SpecializationPage() {
const { data: mockDoctors = [], isLoading, error } = useDoctors();

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
 
    // The param key comes from the folder name:
    //   folder [specialization] → params.specialization
    //   folder [recordtype]     → params.recordtype
    // We try both so it works regardless of which folder name you used.
    const slug = (
        params?.specialization ??
        params?.recordtype ??
        ''
    ).toLowerCase();
 
    // Add a console.log here if still broken — it will show you exactly what params contains
    // console.log('[SpecializationPage] params:', params, '→ slug:', slug);
 
    const spec = specializations.find((s) => s.slug === slug);
    const categoryName =
        spec?.name ??
        (slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Doctors');
 
    const doctors = slug
        ? filterDoctors(mockDoctors, searchQuery, slug, filters)
        : [];
 
    return (
        <>
            <Header
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                setViewMode={setViewMode}
                viewMode={viewMode}
                filteredDoctors={doctors}
                categoryName={categoryName}
                mockDoctors={mockDoctors}
                setShowFilters={setShowFilters}
                showFilters={showFilters}
            />
 
            <ResultsHeader categoryName={categoryName} totalCount={doctors.length} />
            <DoctorsGrid doctors={doctors} />
            {doctors.length > 0 && <Pagination total={doctors.length} />}
        </>
    );
}
 