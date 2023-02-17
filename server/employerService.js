const {MongoClient} = require('mongodb');
require('dotenv').config();

async function main(){
    //
    const uri = "mongodb+srv://softwareprocess:soen341@jobquest.lwy8itm.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    try {
        await client.connect();

        //await findOneEmployerByName(client, "Company1")
        /*


        await addEmployer(client, 
        {
            companyName: "employer2",
            numberOfPostings: 150
        }
        )
        */
       
       
        await getAllEmployers(client);


    } catch (e) {
        console.error(e)
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);



async function getAllEmployers(client) {
    const cursor = await client.db("JobQuest").collection("Employers").find();
    console.log(cursor)

    const result = await cursor.toArray();

    //result.forEach(a => console.log(`${a.CompanyName})`));
}



async function findOneEmployerByName(client, name) {
    const result = await client.db("JobQuest").collection("Employers").findOne({CompanyName: name});

    if (result)
    {
        console.log(`Found an employer in the collection with the name '${name}'`);
        console.log(result);
    } else {
        console.log(`No employer found with the name '${name}`);
    }

    return result;
}

async function addEmployer(client, employer){
    const result = await client.db("JobQuest").collection("Employers").insertOne(employer);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}
 

