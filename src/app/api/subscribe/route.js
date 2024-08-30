import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
        try {
                const { email } = await request.json();

                if (!email) {
                        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
                }

                const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
                        email_address: email,
                        status: 'subscribed',
                });

                return NextResponse.json({
                        message: 'Success! Check your email to confirm subscription.',
                        response,
                }, { status: 200 });
        } catch (error) {
                console.error('Mailchimp Error:', error);

                const errorMessage = error.response?.body?.title || 'Something went wrong';

                return NextResponse.json({ error: errorMessage }, { status: 500 });
        }
}
