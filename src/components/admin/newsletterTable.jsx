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
import {
        Pagination,
        PaginationContent,
        PaginationEllipsis,
        PaginationItem,
        PaginationLink,
        PaginationNext,
        PaginationPrevious,
} from "@/components/ui/pagination"

export default function NewsletterTable({ newsletterData }) {
        const [sortField, setSortField] = useState("number");
        const [sortOrder, setSortOrder] = useState('asc');
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 10;

        const handleSort = (field) => {
                if (sortField === field) {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                } else {
                        setSortField(field);
                        setSortOrder('asc');
                }
        };

        const sortedData = [...newsletterData].sort((a, b) => {
                if (!sortField) return 0;
                const aValue = a[sortField] || "";
                const bValue = b[sortField] || "";

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

        const totalPages = Math.ceil(newsletterData.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentPageData = sortedData.slice(startIndex, startIndex + itemsPerPage);

        const handlePageChange = (newPage) => {
                if (newPage > 0 && newPage <= totalPages) {
                        setCurrentPage(newPage);
                }
        };

        return (
                <div>
                        <Table>
                                <TableCaption>A list of people who recently subscribed to your newsletter.</TableCaption>
                                <TableHeader>
                                        <TableRow>
                                                <TableHead>
                                                        <div className="flex items-center cursor-pointer" onClick={() => handleSort("number")}>
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
                                                        <div className="flex items-center cursor-pointer" onClick={() => handleSort("fullName")}>
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
                                                <TableHead>Status</TableHead>
                                        </TableRow>
                                </TableHeader>
                                <TableBody>
                                        {currentPageData.map((item) => (
                                                <TableRow key={item.number}>
                                                        <TableCell className="font-medium">
                                                                {item.number}                                                                
                                                        </TableCell>
                                                        <TableCell>
                                                                {item.fullName}
                                                        </TableCell>
                                                        <TableCell>
                                                                {item.email}
                                                        </TableCell>
                                                        <TableCell>
                                                                {item.status}
                                                        </TableCell>
                                                </TableRow>
                                        ))}
                                </TableBody>
                        </Table>
                        <Pagination>
                                <PaginationContent>
                                        {currentPage > 1 && (
                                                <PaginationItem className="cursor-pointer">
                                                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                                                </PaginationItem>
                                        )}
                                        {[...Array(totalPages)].map((_, index) => {
                                                const page = index + 1;
                                                return (
                                                        <PaginationItem key={page} className={currentPage === page ? "font-bold" : ""}>
                                                                <PaginationLink href="#" onClick={() => handlePageChange(page)}>
                                                                        {page}
                                                                </PaginationLink>
                                                        </PaginationItem>
                                                );
                                        })}
                                        {currentPage < totalPages && (
                                                <PaginationItem className="cursor-pointer">
                                                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                                                </PaginationItem>
                                        )}
                                </PaginationContent>
                        </Pagination>
                </div>
        )
}
