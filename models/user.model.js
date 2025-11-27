import dbInstance from "../config/database.js";

export const getAllUserModel = async() => {
	try {
		let mongooseInstance = await dbInstance.connect(process.env.MONGODB_URL)
		let db = mongooseInstance.connection.getClient().db("dbclass")
		let collection = db.collection("user")
		let result = await collection.find().toArray()
		return result
	} catch (error) {
		throw error	
	}
}