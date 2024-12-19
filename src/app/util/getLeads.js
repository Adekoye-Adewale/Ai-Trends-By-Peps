export function processLeadsData(leads) {
        const sortedLeads = [...leads].sort((a, b) => new Date(a.date) - new Date(b.date));

        return sortedLeads.map((lead, index) => {
                const id = lead._id
                const fullname = lead.fullname
                const email = lead.email
                const phoneNumber = lead.phoneNumber
                const resourceOfInterest = lead.resourceOfInterest
                const address = `${lead.state}, ${lead.country}`
                const fieldOfWork = lead.fieldOfWork
                const formattedDate = new Date(lead.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                });
                const number = index + 1;

                return {
                        id,
                        number,
                        date: formattedDate,
                        fullname,
                        email,
                        phoneNumber,
                        resourceOfInterest,
                        address,
                        fieldOfWork
                }
                
        })
}