import PageContent from "@/components/admin/pageContent";
import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({ children }) {
        return (
                <main className='flex admin'>
                        <Sidebar/>
                        <div className="w-full">
                                <PageContent/>
                                <div className="py-5 px-5 overflow-x-hidden overflow-y-auto">
                                        {children}
                                </div>
                        </div>
                </main>
        )
}