import { v4 as uuidv4 } from 'uuid'
import Course from './course'
import {
	CourseDescriptionLengthInvalidException,
	CourseDescriptionRequiredException,
	CourseDifficultyRequiredException,
	CourseNameRequiredException,
	CourseTechnologyRequiredException,
} from './exceptions/course.exception'
import { Result, err, ok } from 'neverthrow'
import { CourseProperties } from './types/courseProperties.type'

export type CourseResult = Result<
	Course,
	| CourseNameRequiredException
	| CourseDescriptionRequiredException
	| CourseDescriptionLengthInvalidException
	| CourseDifficultyRequiredException
	| CourseTechnologyRequiredException
>

export default class CourseFactory {
	async create(name: string, description: string, difficulty: string, technology: string): Promise<CourseResult> {
		console.log(difficulty)
		if (!name || name.trim() === '') {
			console.log('salto en el factory')
			return err(new CourseNameRequiredException())
		}

		if (!description || description.trim() === '') {
			return err(new CourseDescriptionRequiredException())
		}

		if (description.length < 10) {
			return err(new CourseDescriptionLengthInvalidException(description))
		}

		if (!difficulty || difficulty.trim() === '') {
			return err(new CourseDifficultyRequiredException())
		}

		if (!technology || technology.trim() === '') {
			return err(new CourseTechnologyRequiredException())
		}

		const courseProperties: CourseProperties = {
			name,
			description,
			difficulty,
			technology,
			guid: uuidv4(),
		}

		const course = new Course(courseProperties)
		return ok(course)
	}
}
