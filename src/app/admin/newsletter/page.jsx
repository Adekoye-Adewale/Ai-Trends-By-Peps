import React from 'react'
import { fetchSubscribers } from '@/app/util/fetchSubscribersData'
import NewsletterData from '@/components/admin/newsletterData';

export default async function NewsletterPage() {
        const subscribers = await fetchSubscribers();

        return (
                <NewsletterData 
                        subscribers={subscribers}
                />
        )
}
