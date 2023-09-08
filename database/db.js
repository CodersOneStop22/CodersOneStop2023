import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://spnarravula:xdoPnFN2N6KkNHOv@clustermoss.b2b1n6h.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
