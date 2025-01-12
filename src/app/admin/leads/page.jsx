import React from 'react'
import TableComponent from '@/components/admin/table'
import axios from 'axios';
import { processLeadsData } from '@/app/util/getLeads';

export default async function LeadsPage() {
        const { data } = await axios.get(`https://aitrendshub.org/api/email`);
        const leadsData = processLeadsData(data.contactFormData)
        return (
                <div>
                        <TableComponent
                                leadsData={leadsData}
                        />
                </div>
        )
}
