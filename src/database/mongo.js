import { MongoClient } from 'mongodb';

const url = 'mongodb://root:example@localhost:27017'; // connection string


export const get_client = async ()=> {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    return client;
}

export const get_node_second_db = async () => {
    try {
        const client = await get_client()
        const db = await client.db("node_second");
        return db;
    } catch (err) {
        console.log(err);
        return null
    }
}

export const get_node_firstdb = async () => {
    try {
        const client = await get_client()
        const db = await client.db("node-firstdb");
        return db;
    } catch (err) {
        console.log(err);
        return null
    }
}