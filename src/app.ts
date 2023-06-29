import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'
import routeCourse from './modules/course/interfaces/http/course.routes'

class App {
	readonly expressApp: Application

	constructor() {
		this.expressApp = express()
		this.mountHealthCheck()
		this.mountMiddlewares()
		this.mountRoutes()
		this.mountErrors()

	}

	mountHealthCheck(){
		this.expressApp.use('/', routerHealth)
	}

	mountMiddlewares() {
      this.expressApp.use(express.json())
      this.expressApp.use(express.urlencoded({ extended: true }))
   }

	mountRoutes(): void {
		this.expressApp.use('/course', routeCourse)
	}

	mountErrors(): void {
		this.expressApp.use(HandlerErrors.notFound)
	}

}

export default new App().expressApp
