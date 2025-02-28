import { NextResponse } from "next/server"
import { ConnectDB } from "../../../../lib/config/db"
import cors from "../../../../lib/cors"
import EmailModel from "../../../../lib/models/contactFormModel"

async function LoadDB() {
        await ConnectDB();
}

export async function OPTIONS(req) {
        return cors(req, NextResponse.json({}, { status: 200 }));
}

export async function handler(req, res) {
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
        await LoadDB();

        try {
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
        } catch (error) {
                return NextResponse.json({
                        success: false,
                        msg: "Error submitting form",
                        error: error.message,
                }, { status: 500 });
        }
}

export async function GET() {
        await LoadDB();
        const contactFormData = await EmailModel.find({});
        return NextResponse.json({ contactFormData });
}