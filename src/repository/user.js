import { get_node_second_db } from "../database/mongo.js";




export const create = async (user)=> {

    const db = await get_node_second_db()

    const result = await db.collection('user').insertOne(user)

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );

}