import { createClient } from "next-sanity";

export const client = createClient({
        projectId: "6g8m95hv",
        dataset: "production",
        apiVersion: "2024-01-01",
        useCdn: false,
});