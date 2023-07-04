import DatabaseBootstrap from '../../../bootstrap/database.bootstrap'
import Course from '../domain/course'
import { CourseRepository } from '../domain/course.repository'
import { CourseEntity } from './course.entity'
import { CourseNotFoundException } from '../domain/exceptions/course.exception'
import { err, ok, Result } from 'neverthrow'
import { CourseUpdate } from '../domain/interfaces/courseUpdate.interface'

export default class CourseInfraestructure implements CourseRepository {
	async insert(course: Course): Promise<Course> {
		const courseInsert = new CourseEntity()

		const { guid, name, description, difficulty, technology, active } = course.properties()
		Object.assign(courseInsert, {
			guid,
			name,
			description,
			difficulty,
			technology,
			active,
		})

		await DatabaseBootstrap.dataSource.getRepository(CourseEntity).save(courseInsert)
		return course
	}

	async list(): Promise<Course[]> {
		const repo = DatabaseBootstrap.dataSource.getRepository(CourseEntity)

		const result = await repo.find({ where: { active: true } })
		return result.map((el: CourseEntity) => {
			return new Course({
				guid: el.guid,
				name: el.name,
				description: el.description,
				difficulty: el.difficulty,
				technology: el.technology,
				active: el.active,
			})
		})
	}

	async listOne(guid: string): Promise<Result<Course, CourseNotFoundException>> {
		const repo = DatabaseBootstrap.dataSource.getRepository(CourseEntity)

		const result = await repo.findOne({ where: { guid } })

		if (!result) {
			return err(new CourseNotFoundException())
		} else {
			return ok(
				new Course({
					guid: result.guid,
					name: result.name,
					description: result.description,
					difficulty: result.difficulty,
					technology: result.technology,
					active: result.active,
				}),
			)
		}
	}

	async update(guid: string, course: Partial<CourseUpdate>): Promise<Result<Course, CourseNotFoundException>> {
		const repo = DatabaseBootstrap.dataSource.getRepository(CourseEntity)

		const courseFound = await repo.findOne({
			where: { guid },
		})

		if (courseFound) {
			Object.assign(courseFound, course)
			const courseEntity = await repo.save(courseFound)

			return ok(
				new Course({
					guid: courseEntity.guid,
					name: courseEntity.name,
					description: courseEntity.description,
					difficulty: courseEntity.difficulty,
					technology: courseEntity.technology,
					active: courseEntity.active,
				}),
			)
		} else {
			return err(new CourseNotFoundException())
		}
	}

	async delete(guid: string): Promise<Result<Course, CourseNotFoundException>> {
		const repo = DatabaseBootstrap.dataSource.getRepository(CourseEntity)

		const courseFound = await repo.findOne({ where: { guid } })

		if (courseFound) {
			courseFound.active = false
			const courseEntity = await repo.save(courseFound)

			return ok(
				new Course({
					guid: courseEntity.guid,
					name: courseEntity.name,
					description: courseEntity.description,
					difficulty: courseEntity.difficulty,
					technology: courseEntity.technology,
					active: courseEntity.active,
				}),
			)
		} else {
			return err(new CourseNotFoundException())
		}
	}
}
