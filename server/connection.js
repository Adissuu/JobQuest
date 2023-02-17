const {MongoClient} = require('mongodb');
require('dotenv').config();

async function main(){
    //
    const uri = "mongodb+srv://softwareprocess:soen341@jobquest.lwy8itm.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await findOneEmployerByName(client, "Company1")
            

    } catch (e) {
        console.error(e)
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` = ${db.name}`));
};

async function createMultipleListings(client, newListings){
    const result = await client.db("JobQuest").collection("Employers").insertMany(newListings)

    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds)
}



async function createListing(client, newListing){
    const result = await client.db("JobQuest").collection("Employers").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}


async function findOneEmployerByName(client, nameOfListing) {
    const result = await client.db("JobQuest").collection("Employers").findOne({CompanyName: nameOfListing});

    if (result)
    {
        console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}`);
    }
}


async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {

    const cursor = await client.db("JobQuest").collection("Employers").find({
        bedrooms: {$gte: minimumNumberOfBedrooms},
        bathrooms: {$gte: minimumNumberOfBathrooms}
    }).sort({last_review: -1})
    .limit(maximumNumberOfResults);

    const results = await cursor.toArray();
}