'use client'
import React, { useState, useEffect } from 'react';
import TableComponent from '@/components/admin/table'
import { fetchLeadsData } from '@/app/util/fetchLeadsData'
import { processLeadsData } from '@/app/util/getLeads'

export default function LeadsPage() {
        const [leadsData, setLeadsData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const data = await fetchLeadsData();
                                console.log('=====', data)

                                if (!data || !data.contactFormData || data.contactFormData.length === 0) {
                                        setError('No leads data available.');
                                        setLeadsData([]);
                                } else {
                                        const processedData = processLeadsData(data.contactFormData);
                                        setLeadsData(processedData);
                                        setError(null);
                                }
                        } catch (err) {
                                setError('Failed to load data. Please try again later.');
                                setLeadsData([]);
                        } finally {
                                setLoading(false);
                        }
                };

                fetchData();
        }, []);

        if (loading) {
                return <div>Loading...</div>; 
        }

        if (error) {
                return <div>{error}</div>; 
        }

        return (
                <div>
                        <TableComponent
                                leadsData={leadsData}
                        />
                </div>
        )
}
