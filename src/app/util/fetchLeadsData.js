'use server'
export async function fetchLeadsData() {
        try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email`);
                if (!response.ok) {
                        if (response.status === 403) {
                                throw new Error('Invalid API key or access forbidden.');
                        }
                        throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                return data;
        } catch (error) {
                console.error(error);
                return [];
        }
}

export async function leadsDataLength() {
        const data = await fetchLeadsData();
        const dataLength = data.contactFormData ? data.contactFormData.length : 0;
        return (
                dataLength
        )
}