import { NextFunction, Request, Response } from 'express';
import CourseApplication from '../../application/course.application'
import CourseFactory from '../../domain/course-factory';
import { IError } from '../helpers/Ierror';
import { CourseInsertMapping } from './dto/course-insert.dto';

export default class {
	constructor(private application: CourseApplication) {
		this.insert = this.insert.bind(this)
	}


	async insert(req: Request, res: Response, next: NextFunction){
		const { name, description, difficulty, technology } = req.body
		console.log('el name en controller',name)

		const courseResult = await new CourseFactory().create(name, description, difficulty, technology)

		if(courseResult.isErr()){
			const err: IError = new Error(courseResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const data = await this.application.insert(courseResult.value)
			const result = new CourseInsertMapping().execute(data.properties())
			res.status(201).json(result)
		}
	}
}
