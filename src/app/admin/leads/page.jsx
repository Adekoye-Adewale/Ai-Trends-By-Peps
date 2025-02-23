import React from 'react'
import TableComponent from '@/components/admin/table'
import { fetchLeadsData } from '@/app/util/fetchLeadsData'
import { processLeadsData } from '@/app/util/getLeads'

export default async function LeadsPage() {
        const data = await fetchLeadsData();
        const leadsData = processLeadsData(data.contactFormData)

        return (
                <div>
                        <TableComponent
                                leadsData={leadsData}
                        />
                </div>
        )
}
