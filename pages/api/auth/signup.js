import { hashPassword } from "../../../database/auth";
import { connectToDatabase } from "../../../database/db";
import { randomUUID } from 'crypto';
import { Resend } from 'resend';


async function Handler(req,res){


    if(req.method !=='POST'){
        return;
    }
    const data =req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const {name,email,password,activated} = data ;

    if(!email || !email.includes('@') || !password || password.trim().length <7){
        res.status(422).json({message: 'Invalid- Input'});
        return ;
    }
    const client= await connectToDatabase();

   const db= client.db();
 
    const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }
    const hashedPassword = await hashPassword(password)

   

  const result= await db.collection('users').insertOne({name:name, email: email, password: hashedPassword, activated: activated });
 
  const tokenGen = `${randomUUID()}${randomUUID()}`.replace(/-/g, '');
  
  const token = await db.collection('tokens').insertOne({email: email,token: tokenGen});

  

  const emailText= `Hello ${name}, please activate your account by clicking this link: http://localhost:3000/activate/${tokenGen}`

   
resend.emails.send({
  from: 'spnarravula@miladratech.com',
  to: email,
  subject: 'Verify your email to activate your Account',
  html: emailText
});


  res.status(201).json({message: 'Created User'});



 
}

export  default Handler;