import { hashPassword } from "../../../database/auth";
import { connectToDatabase } from "../../../database/db";
import { randomUUID } from "crypto";

async function Handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const { name, email, password, activated } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid- Input" });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const client = await connectToDatabase();

  const db = client.db();

  const result = await db.collection("users").insertOne({
    name: name,
    email: email,
    password: hashedPassword,
    activated: activated,
  });

  const tokenGen = `${randomUUID()}${randomUUID()}`.replace(/-/g, "");

  const token = await db
    .collection("tokens")
    .insertOne({ email: email, token: tokenGen });

  const emailText = `Hello ${name}, please activate your account by clicking this link: http://localhost:3000/activate/${tokenGen}`;

  const emailBody = {
    sender: {
      email: "spnarravula@gmail.com",
    },
    to: [
      {
        email: email,
      },
    ],
    textContent: emailText,
    subject: "Verify your email to Acitivate your Account",
  };

  const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key":
        "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",
    },
    redirect: "manual",
    body: JSON.stringify(emailBody),
  });

  res.status(201).json({ message: "Created User" });
}

export default Handler;
