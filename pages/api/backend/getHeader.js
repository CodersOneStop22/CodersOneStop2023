
import { connectToDatabase } from "../../../database/db";

export default async function Handler(req, res) {
  
    const query = req.query;
    const { typeHeader } = query;

   

try{
  const client = await connectToDatabase();

  const subheaderCollection = client.db().collection(typeHeader);
  
   const responses = subheaderCollection.find({ });

   const allValues = await responses.toArray();

   return res.status(200).json({succes:true,allValues,error:null});
}
catch(e){
return  res.status(e.requestResult.statusCode).send(e.message);
}

}


