import React from 'react'
import MainPageCards, { TitleCard } from './mainPageCards'
import { leadsDataLength } from '@/app/util/fetchLeadsData'
import { NewsletterDataLength } from '@/app/util/fetchSubscribersData'

export default function AdminDashboard() {
        return (
                <div className='flex'>
                        <div>
                                <LeadSec/>
                        </div>
                </div>
        )
}

async function LeadSec ()  {
        const dataLength = await leadsDataLength();
        const subscribersLength = await NewsletterDataLength();
        
        return (
                <div className='flex border-solid border-2 border-mainColor-900 divide-x-2 divide-solid'>
                        <TitleCard 
                                title={"User Data"} 
                                desc={"Showing summary of total user data"}
                        />
                        <MainPageCards 
                                title={"Total Leads"} 
                                number={dataLength}
                        />
                        <MainPageCards 
                                title={"Total Newsletter"} 
                                number={subscribersLength}
                        />
                </div>
        )
}