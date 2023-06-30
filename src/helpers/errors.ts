import { Request, Response } from 'express'
import { IError } from '../modules/course/interfaces/helpers/Ierror'

export default class {
	static notFound(_req: Request, res: Response): void {
		res.status(404).send('Route Not Found')
		console.log(res)
	}

	static genericError(error: IError, req: Request, res: Response): void {
		res.status(error.status || 500).json({
			message: error.message,
			stack: error.stack,
		})
	}
}
