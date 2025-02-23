export async function fetchLeadsData() {
        try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email`);
                if (!response.ok) {
                        throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                return data;
        } catch (error) {
                console.error(error);
                return [];
        }
}