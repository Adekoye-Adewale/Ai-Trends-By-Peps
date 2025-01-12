import { NextResponse } from "next/server"
import { ConnectDB } from "../../../../lib/config/db"
import cors from "../../../../lib/cors"
import EmailModel from "../../../../lib/models/contactFormModel"

const LoadDB = async () => {
        await ConnectDB()
}
LoadDB()

export default async function handler(req, res) {
        cors(req, res, () => {
                if (req.method === 'GET') {
                        res.json({ contactFormData: [] });
                } else {
                        res.setHeader('Allow', ['GET']);
                        res.status(405).end(`Method ${req.method} Not Allowed`);
                }
        });
}

export async function POST(request) {
        const formData = await request.formData()
        const contactFormData = {
                fullname: `${formData.get('fullname')}`,
                email: `${formData.get('email')}`,
                phoneNumber: `${formData.get('phoneNumber')}`,
                resourceOfInterest: `${formData.get('resourceOfInterest')}`,
                state: `${formData.get('state')}`,
                country: `${formData.get('country')}`,
                fieldOfWork: `${formData.get('fieldOfWork')}`,
        }
        await EmailModel.create(contactFormData)
        return NextResponse.json({
                success: true,
                msg: 'Form submited successfully'
        })
}

export async function GET(request) {
        const contactFormData = await EmailModel.find({});
        return NextResponse.json({ contactFormData });
}