import mongo from "mongodb";

const client = new mongo.MongoClient("mongodb://localhost:27017");

async function connection(callback) {
    try {
        await client.connect();
        return await callback(client.db("testimonies"))
    } catch (err) {
        throw err
    } finally {
        client.close();
    }
}

export async function getAll() {
    return await connection(async function(database) {
        return database.collection("testimonies").find().toArray();
    })
}

export async function deleteById(id) {
    return await connection(async function(database) {
        return database.collection("testimonies").updateOne({ _id: mongo.ObjectId(id) }, { $set: { "active": false } });
    })
}

export async function activateById(id) {
    return await connection(async function(database) {
        return database.collection("testimonies").updateOne({ _id: mongo.ObjectId(id) }, { $set: { "active": true } });
    })
}

//FRONT
export async function getAllActive() {
    return await connection(async function(database) {
        let arr = await database.collection("testimonies").find().toArray();
        return arr.filter(testimony => testimony.active);
    })
}

export async function add(testimony) {
    return await connection(async function(database) {
        return await database.collection("testimonies").insertOne(testimony);
    })
}