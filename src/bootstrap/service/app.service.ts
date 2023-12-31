import { DB_CONFIG } from '../interfaces/dbConfig.interface'

export class AppService {
	static get PORT(): number {
		return +process.env.PORT || 3000
	}

	static get DBConfig(): DB_CONFIG {
		return {
			host: process.env.DB_HOST || 'localhost',
			port: +process.env.DB_PORT || 3314,
			//entities: [process.env.DB_ENTITIES || 'src/**/*.entity.ts'],
			entities: process.env.DB_ENTITIES ? process.env.DB_ENTITIES.split(',') : ['dist/**/*.entity.js'],
			username: process.env.DB_USER || 'adminUser',
			password: process.env.DB_PASS || '123456',
			database: process.env.DB_NAME || 'bddnodeproject',
			synchronize: process.env.DB_SYNC === 'true' ? true : false,
			logging: process.env.DB_LOGG == 'true' ? true : false,
		}
	}
}
