import * as models from "../models/user.model.js"

export const getUserController = async(req, res, next) => {
	try {
		const result = await models.getAllUserModel()
		return res.status(200).json({
			status: "success",
			data: result
		})
	} catch (error) {
		next(error)
	}
}
