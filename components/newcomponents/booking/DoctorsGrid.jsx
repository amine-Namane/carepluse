// 'use client';
// // components/booking/DoctorsGrid.jsx
// // Renders the grid or list of DoctorCard components.
// // Receives already-filtered doctors as a prop — no filtering logic here.

// import { Search } from 'lucide-react';
// import DoctorCard from './DoctorCard';
// import { useBooking } from '@/utils/BookingContext';

// export default function DoctorsGrid({ doctors }) {
//     const { viewMode, setBookDoctor, handleFilterChange, handleSearch } = useBooking();

//     if (doctors.length === 0) {
//         return (
//             <div className="text-center py-12 lg:py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
//                 <div className="inline-block p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mb-4">
//                     <Search className="w-8 h-8 lg:w-12 lg:h-12 text-blue-400" />
//                 </div>
//                 <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
//                     No matching doctors found
//                 </h3>
//                 <p className="text-gray-500 mb-6 px-4">
//                     Try adjusting your search or filters to find what you're looking for
//                 </p>
//                 <button
//                     onClick={() => {
//                         handleSearch('');
//                         handleFilterChange('clear');
//                     }}
//                     className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all text-sm lg:text-base"
//                 >
//                     Clear All Filters
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div
//             className={
//                 viewMode === 'grid'
//                     ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
//                     : 'space-y-4'
//             }
//         >
//             {doctors.map((doctor) => (
//                 <DoctorCard
//                     key={doctor.id}
//                     doctor={doctor}
//                     onBook={setBookDoctor}
//                     viewMode={viewMode}
//                 />
//             ))}
//         </div>
//     );
// }
'use client';

import { Search } from 'lucide-react';
import DoctorCard from './DoctorCard';
import { useBooking } from '@/utils/BookingContext';

export default function DoctorsGrid({ doctors = [] }) {
    const { viewMode, setBookDoctor, handleFilterChange, handleSearch } = useBooking();

    const safeDoctors = Array.isArray(doctors)
        ? doctors
        : [];

    if (safeDoctors.length === 0) {
        return (
            <div className="text-center py-12 lg:py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="inline-block p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mb-4">
                    <Search className="w-8 h-8 lg:w-12 lg:h-12 text-blue-400" />
                </div>

                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                    No matching doctors found
                </h3>

                <p className="text-gray-500 mb-6 px-4">
                    Try adjusting your search or filters to find what you're looking for
                </p>

                <button
                    type="button"
                    onClick={() => {
                        handleSearch('');
                        handleFilterChange('clear');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all text-sm lg:text-base"
                >
                    Clear All Filters
                </button>
            </div>
        );
    }

    return (
        <div
            className={
                viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                    : 'space-y-4'
            }
        >
            {safeDoctors.map((doctor) => (
                <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    onBook={setBookDoctor}
                    viewMode={viewMode}
                />
            ))}
        </div>
    );
}