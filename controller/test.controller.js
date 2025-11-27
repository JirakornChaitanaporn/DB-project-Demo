import * as models from "../models/test.model.js"

export const testController = async(req, res, next) => {
	try {
		const result = await models.testModels()
		return res.status(200).json({
			status: "success",
			data: result
		})
	} catch (error) {
		next(error)
	}
}