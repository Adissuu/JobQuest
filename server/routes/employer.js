const {MongoClient} = require('mongodb');
require('dotenv').config();
const Employer = require("../model/Employer")
const router = require("express").Router()







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
            CompanyName: "employer2",
            numberOfPostings: 150
        }
        )
        */
       
        //await deleteOneEmployerByName(client, "employer2")
       
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
    const result = await client.db("JobQuest").collection("Employers").find().toArray();
    console.log(result)
    return result;
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

async function deleteOneEmployerByName(client, name){
    const result = await client.db("JobQuest").collection("Employers").deleteOne({companyName: name});
    console.log(`${result.deletedCount} employer(s) was/were deleted.`)
}

async function addEmployer(client, employer){
    const result = await client.db("JobQuest").collection("Employers").insertOne(employer);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function addEmployers(client, employers){
    const result = await client.db("JobQuest").collection("Employers").insertMany(employers);
}


// get all employers

router.get("/:id"), async (req, res) => {
    try {
        const user = await Employer.find()
    }
}