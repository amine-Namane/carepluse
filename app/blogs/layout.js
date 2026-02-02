import Custemsidebar from "@/components/ui/types.jsx";
import DynamicDoctorDashboard from '@/components/doctor-dashboard.jsx'

export default function BookLayout({ children }) {
    return(
    
    <section>
    <section className="flex w-[100%]">
        {/*<Custemsidebar />*/}
        <main className="flex p-6" >
        {children}
      </main>

    </section>


    {/* <section>{children}</section> */}
    </section>
    )
  }