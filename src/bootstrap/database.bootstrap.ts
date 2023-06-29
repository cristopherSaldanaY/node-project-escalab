import { DataSource } from 'typeorm'
import { Bootstrap } from './base.bootstrap'
import { CourseEntity } from '../modules/course/infraestructure/course.entity'

let appDataSource: DataSource

export default class extends Bootstrap {
	initialize(): Promise<DataSource> {
		const AppDataSource = new DataSource({
			type: 'mysql',
			host: 'localhost',
			port: 3314,
			username: 'adminUser',
			password: '123456',
			database: 'bddnodeproject',
			synchronize: true,
			logging: true,
			entities: [CourseEntity],
			migrations: [],
			subscribers: [],
		})

		appDataSource = AppDataSource

		return AppDataSource.initialize()
	}

	static get dataSource(): DataSource {
		return appDataSource
	}
}
