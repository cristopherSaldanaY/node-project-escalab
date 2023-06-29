import { Router } from 'express'
import { CourseRepository } from '../../domain/course.repository'
import CourseInfraestructure from '../../infraestructure/course.infraestructure'
import CourseApplication from '../../application/course.application'
import CourseController from './course.controller'
import { MiddlewareListOne } from './middlewares/course.middleware'

const infraestructure: CourseRepository = new CourseInfraestructure()
const application = new CourseApplication(infraestructure)
const controller = new CourseController(application)

class CourseRouter {
	readonly expressRouter: Router

	constructor() {
		this.expressRouter = Router()
		this.mountRoutes()
	}

	mountRoutes() {
		this.expressRouter.post('/insert', controller.insert)
		this.expressRouter.get('/list', controller.list)
		this.expressRouter.get('/listOne/:guid', ...MiddlewareListOne, controller.listOne)
		this.expressRouter.put('/update/:guid', controller.update)
		this.expressRouter.delete('/delete/:guid', controller.delete)
	}
}


export default new CourseRouter().expressRouter
