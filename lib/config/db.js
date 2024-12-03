import mongoose from "mongoose";

const db_password = process.env.MON_DB_PASSWORD

export const ConnectDB = async () => {
        await mongoose.connect(`mongodb+srv://adi27:${db_password}@cluster0.a8usd.mongodb.net/aitrends-resources`)
        console.log('DB connected')
}