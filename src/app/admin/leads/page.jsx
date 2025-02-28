'use client'
import React, { useState, useEffect } from 'react';
import TableComponent from '@/components/admin/table'
import { fetchLeadsData } from '@/app/util/fetchLeadsData'
import { processLeadsData } from '@/app/util/getLeads'

export default function LeadsPage() {
        const [leadsData, setLeadsData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        const fetchData = async () => {
                setLoading(true);
                setError(null);

                try {
                        const data = await fetchLeadsData();

                        if (!data || !data.contactFormData || data.contactFormData.length === 0) {
                                setError('No leads data available.');
                                setLeadsData([]);
                        } else {
                                const processedData = processLeadsData(data.contactFormData);
                                setLeadsData(processedData);
                        }
                } catch (err) {
                        setError('Failed to load data. Please try again later.');
                        setLeadsData([]);
                } finally {
                        setLoading(false);
                }
        };

        useEffect(() => {
                fetchData();
        }, []);

        // if (loading) {
        //         return <div>Loading...</div>; 
        // }

        // if (error) {
        //         return <div>{error}</div>; 
        // }

        // return (
        //         <div>
        //                 <TableComponent
        //                         leadsData={leadsData}
        //                 />
        //         </div>
        // )

        return (
                <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Leads Data</h2>
                                <button
                                        onClick={fetchData}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                        disabled={loading}
                                >
                                        {loading ? 'Refreshing...' : 'Refresh Data'}
                                </button>
                        </div>

                        {loading && <p className="text-gray-600">Loading leads...</p>}
                        {error && <p className="text-red-500">{error}</p>}

                        {!loading && !error && leadsData.length > 0 ? (
                                <TableComponent leadsData={leadsData} />
                        ) : (
                                !loading && !error && <p className="text-gray-500">No leads available.</p>
                        )}
                </div>
        );
}
