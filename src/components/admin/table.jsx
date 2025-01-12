'use client'
import React, { useState } from 'react';
import {
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableFooter,
        TableHead,
        TableHeader,
        TableRow,
} from "@/components/ui/table"


export default function TableComponent({ leadsData }) {

        const [sortField, setSortField] = useState(null);
        const [sortOrder, setSortOrder] = useState('asc');

        const handleSort = (field) => {
                if (sortField === field) {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                } else {
                        setSortField(field);
                        setSortOrder('asc');
                }
        };

        const sortedData = [...leadsData].sort((a, b) => {
                if (!sortField) return 0; 
                const aValue = a[sortField];
                const bValue = b[sortField];

                if (typeof aValue === 'string') {
                        return sortOrder === 'asc'
                                ? aValue.localeCompare(bValue)
                                : bValue.localeCompare(aValue);
                }

                if (typeof aValue === 'number' || aValue instanceof Date) {
                        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
                }

                return 0;
        });

        return (
                <Table>
                        <TableCaption>A list of people who recently filed your contact form.</TableCaption>
                        <TableHeader>
                                <TableRow>
                                        <TableHead>
                                                <div
                                                        className='flex items-center cursor-pointer'
                                                        onClick={() => handleSort('number')}
                                                >
                                                        Number
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-arrow-up-down w-4"
                                                        >
                                                                <path d="m21 16-4 4-4-4"></path>
                                                                <path d="M17 20V4"></path>
                                                                <path d="m3 8 4-4 4 4"></path>
                                                                <path d="M7 4v16"></path>
                                                        </svg>
                                                </div>
                                        </TableHead>
                                        <TableHead>
                                                <div 
                                                        className='flex items-center cursor-pointer'
                                                        onClick={() => handleSort('date')}
                                                >
                                                        Date 
                                                        <svg 
                                                                xmlns="http://www.w3.org/2000/svg" 
                                                                width="24" 
                                                                height="24" 
                                                                viewBox="0 0 24 24" 
                                                                fill="none" 
                                                                stroke="currentColor" 
                                                                strokeWidth="2" 
                                                                strokeLinecap="round" 
                                                                strokeLinejoin="round" 
                                                                className="lucide lucide-arrow-up-down w-4"
                                                        >
                                                                <path d="m21 16-4 4-4-4"></path>
                                                                <path d="M17 20V4"></path>
                                                                <path d="m3 8 4-4 4 4"></path>
                                                                <path d="M7 4v16"></path>
                                                        </svg>
                                                </div>
                                        </TableHead>
                                        <TableHead>
                                                <div 
                                                        className='flex items-center cursor-pointer'
                                                        onClick={() => handleSort('fullname')}
                                                >
                                                        Full Name
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-arrow-up-down w-4"
                                                        >
                                                                <path d="m21 16-4 4-4-4"></path>
                                                                <path d="M17 20V4"></path>
                                                                <path d="m3 8 4-4 4 4"></path>
                                                                <path d="M7 4v16"></path>
                                                        </svg>
                                                </div>                                                
                                        </TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead className="text-right">Phone Number</TableHead>
                                        <TableHead>
                                                <div
                                                        className='flex items-center cursor-pointer'
                                                        onClick={() => handleSort('resourceOfInterest')}
                                                >
                                                        ROI
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-arrow-up-down w-4"
                                                        >
                                                                <path d="m21 16-4 4-4-4"></path>
                                                                <path d="M17 20V4"></path>
                                                                <path d="m3 8 4-4 4 4"></path>
                                                                <path d="M7 4v16"></path>
                                                        </svg>
                                                </div>
                                        </TableHead>
                                        <TableHead>Address</TableHead>
                                        <TableHead>
                                                <div
                                                        className='flex items-center cursor-pointer'
                                                        onClick={() => handleSort('fieldOfWork')}
                                                >
                                                        FOW
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-arrow-up-down w-4"
                                                        >
                                                                <path d="m21 16-4 4-4-4"></path>
                                                                <path d="M17 20V4"></path>
                                                                <path d="m3 8 4-4 4 4"></path>
                                                                <path d="M7 4v16"></path>
                                                        </svg>
                                                </div>
                                        </TableHead>
                                        {/* <TableHead>Action</TableHead> */}
                                </TableRow>
                        </TableHeader>
                        <TableBody>
                                {sortedData.map((item) => (
                                        <TableRow key={item.id}>
                                                <TableCell className="font-medium">{item.number}</TableCell>
                                                <TableCell>{item.date}</TableCell>
                                                <TableCell>{item.fullname}</TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell className="text-right">{item.phoneNumber}</TableCell>
                                                <TableCell>{item.resourceOfInterest}</TableCell>
                                                <TableCell>{item.address}</TableCell>
                                                <TableCell>{item.fieldOfWork}</TableCell>
                                                {/* <TableCell>
                                                        <input 
                                                                type="checkbox" 
                                                                name={item.id} 
                                                                id={item.id} 
                                                        />
                                                </TableCell> */}
                                        </TableRow>
                                ))}
                        </TableBody>
                </Table>
        )
}
