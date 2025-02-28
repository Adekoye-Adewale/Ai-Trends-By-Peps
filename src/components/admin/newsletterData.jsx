import React from 'react'
import NewsletterTable from './newsletterTable'

export default function NewsletterData({ subscribers }) {
        return (
                <div className="max-w-3xl mx-auto p-4">
                        <h1 className="text-2xl font-bold">
                                Newsletter Subscribers
                        </h1>
                        {subscribers.length > 0 ? (
                                <NewsletterTable 
                                        newsletterData={subscribers}
                                />
                        ) : (
                                <p>No subscribers found.</p>
                        )}
                </div>
        )
}
