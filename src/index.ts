import ServerBootstrap from './bootstrap/server.bootstrap'
import { Bootstrap } from './bootstrap/base.bootstrap'
import Application from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)

;(async () => {
	try {
		await serverBootstrap.initialize()
		console.log('Server started successfully')
	} catch (error) {
		console.log(error)
	}
})()

