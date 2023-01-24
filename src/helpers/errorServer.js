const errorServer = (res, e) => {
	const responseError = {
		error: 'Internal Server Error',
		mesagge: e.message,
		code: e.code,
	}

	return res.status(500).json(responseError)
}
module.exports = { errorServer }