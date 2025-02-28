import { NextResponse } from "next/server";

export async function GET() {
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
                });

                if (!response.ok) {
                        return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: response.status });
                }

                const data = await response.json();
                const subscribers = data.members.map((member) => ({
                        fullName: member.full_name,
                        email: member.email_address,
                        status: member.status,
                        subscribedAt: member.timestamp_signup || member.last_changed,
                }));

                return NextResponse.json(subscribers, { status: 200 });
        } catch (error) {
                return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
}
