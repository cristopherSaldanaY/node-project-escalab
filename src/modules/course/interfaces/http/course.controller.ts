import { NextFunction, Request, Response } from 'express'
import CourseApplication from '../../application/course.application'
import CourseFactory from '../../domain/course-factory'
import { IError } from '../helpers/Ierror'
import { CourseInsertMapping } from './dto/course-insert.dto'
import { CourseListMapping } from './dto/course-list.dto'
import { GuidVO } from '../../domain/value-objects/guid.vo'
import { CourseListOneMapping } from './dto/course-list-one.dto'
import { CourseUpdateMapping } from './dto/course-update.dto'
import { CourseDeleteMapping } from './dto/course-delete.dto'

export default class {
	constructor(private application: CourseApplication) {
		this.insert = this.insert.bind(this)
		this.list = this.list.bind(this)
		this.listOne = this.listOne.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async insert(req: Request, res: Response, next: NextFunction) {
		const { name, description, difficulty, technology } = req.body
		console.log('el name en controller', name)

		const courseResult = await new CourseFactory().create(name, description, difficulty, technology)

		if (courseResult.isErr()) {
			const err: IError = new Error(courseResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const data = await this.application.insert(courseResult.value)
			const result = new CourseInsertMapping().execute(data.properties())
			res.status(201).json(result)
		}
	}

	async list(_req: Request, res: Response) {
		const list = await this.application.list()
		const result = new CourseListMapping().execute(list.map(course => course.properties()))

		res.json(result)
	}

	async listOne(req: Request, res: Response, next: NextFunction){
		const { guid } = req.params

		const guidResult = GuidVO.create(guid)
		if(guidResult.isErr()){
			const err: IError = new Error(guidResult.error.message)
			err.status = 411
			return next(err)
		}

		const courseResult = await this.application.listOne(guid)

		if(courseResult.isErr()){
			return res.status(404).send(courseResult.error.message)
		} else if (courseResult.isOk()){
			const result = new CourseListOneMapping().execute(courseResult.value.properties())
			return res.json(result)
		}
	}

	async update (req: Request, res: Response, next: NextFunction){
		const { guid } = req.params
		const fieldsToUpdate = req.body

		const guidResult = GuidVO.create(guid)
		if(guidResult.isErr()){
			const err: IError = new Error(guidResult.error.message)
			err.status = 411
			return next(err)
		}

		const dataResult = await this.application.update(guid, fieldsToUpdate)
		if(dataResult.isErr()){
			const err: IError = new Error(dataResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const result = new CourseUpdateMapping().execute(dataResult.value.properties())
			res.json(result)
		}
	}

	async delete(req: Request, res: Response, next: NextFunction){
		const { guid } = req.params

		const guidResult = GuidVO.create(guid)
		if(guidResult.isErr()){
			const err: IError = new Error(guidResult.error.message)
			err.status = 411
			return next(err)
		}

		const dataResult = await this.application.delete(guid)
		if(dataResult.isErr()){
			const err: IError = new Error(dataResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const result = new CourseDeleteMapping().execute(dataResult.value.properties())
			res.json(result)
		}
	}

}
