"use client";
import { useEffect, useState } from "react";

export default function SubscribersPage() {
        const [subscribers, setSubscribers] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                async function fetchSubscribers() {
                        try {
                                const response = await fetch("/api/subscribers");
                                const data = await response.json();
                                setSubscribers(data);
                        } catch (error) {
                                console.error("Error fetching subscribers:", error);
                        } finally {
                                setLoading(false);
                        }
                }

                fetchSubscribers();
        }, []);

        return (
                <div className="max-w-3xl mx-auto p-4">
                        <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>
                        {loading ? (
                                <p>Loading...</p>
                        ) : (
                                <ul className="mt-4 border rounded-lg p-4">
                                        {subscribers.length > 0 ? (
                                                subscribers.map((subscriber, index) => (
                                                        <li key={index} className="border-b py-2">
                                                                {subscriber.email} - {subscriber.status}
                                                        </li>
                                                ))
                                        ) : (
                                                <p>No subscribers found.</p>
                                        )}
                                </ul>
                        )}
                </div>
        );
}
