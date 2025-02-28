"use server"
export async function fetchSubscribers() {
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const DATA_CENTER = API_KEY.split("-")[1]; 

        const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

        try {
                const response = await fetch(url, {
                        method: "GET",
                        headers: {
                                Authorization: `apikey ${API_KEY}`,
                                "Content-Type": "application/json",
                        },
                        cache: "no-store", 
                });

                if (!response.ok) {
                        throw new Error("Failed to fetch subscribers");
                }

                const data = await response.json();
                
                return data.members.map((member, index ) => ({
                        fullName: member.full_name,
                        email: member.email_address,
                        status: member.status,
                        subscribedAt: member.timestamp_signup || member.last_changed,
                        number: index + 1,
                }));
        } catch (error) {
                console.error("Error fetching subscribers:", error);
                return [];
        }
}

export async function NewsletterDataLength() {
        const data = await fetchSubscribers();
        const subscribersDataLength = Array.isArray(data) && data.length > 0 ? data.length : 0;

        return (
                subscribersDataLength
        )
}