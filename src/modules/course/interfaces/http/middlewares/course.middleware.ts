import { validate } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { CourseListOneValidator } from '../validators/courseListOne.validator'


class CourseMiddleware {
	static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
		const { guid } = req.params
		const courseListOneValidator = new CourseListOneValidator()
		courseListOneValidator.guid = guid
		const errors = await validate(courseListOneValidator)

		if (errors.length > 0) {
			console.log(errors)
			return next(new Error('Invalid request'))
			/* forma 2

		return res.status(400).json({ errors: 'Invalid request'})
		 */
		}

		next()
	}
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
	CourseMiddleware.ValidateListOne,
]
