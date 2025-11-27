import dbInstance from "../config/database.js";

export const testModels = async() => {
	try {
		let mongooseInstance = await dbInstance.connect(process.env.MONGODB_URL)
		await mongooseInstance.connection.getClient().db("admin").command({ ping: 1 });
		console.log("Connection to MongoDB successful");
	} catch (error) {
		throw error	
	}
}