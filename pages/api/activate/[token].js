
import { connectToDatabase } from "../../../database/db";


async function Handler(req,res){

    const query = req.query;
    const tokenId  = query.token;
    console.log(tokenId);
    const client= await connectToDatabase();

    const db= client.db();
   
   
   const usersCollection = client.db().collection('users');
   const tokenCollection = client.db().collection('tokens');

   const user = await tokenCollection.findOne({ token: tokenId });
   
   console.log(user);

   if (!user) {
       client.close();
       throw new Error('User not found.');
     }


     const filter = { email: user.email };
    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: false };
    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        activated: true
      },
    };

    const updateUser= await usersCollection.updateOne(filter, updateDoc, options);
   
  
  
   //res.redirect(200, '/login')
   res.status(200).json({message: 'Validated User'});
 
}

export  default Handler;