'use client'
import React, { useState, useEffect } from 'react';
import TableComponent from '@/components/admin/table'
import { fetchLeadsData } from '@/app/util/fetchLeadsData'
import { processLeadsData } from '@/app/util/getLeads'
import RefreshIcon from '@/icons/refresh';

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

        return (
                <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                                <button
                                        onClick={fetchData}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                        disabled={loading}
                                >
                                        {loading ? 'Refreshing...' : <RefreshIcon className='[&>path]:stroke-mainColor-800 [&>path]:hover:stroke-DarkColor-800 duration-300 transition-all'/>}
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
