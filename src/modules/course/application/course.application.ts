import Course from '../domain/course';
import { CourseRepository } from '../domain/course.repository'

export default class CourseApplication {
	constructor(private readonly courseRepository: CourseRepository) {}


	insert(course: Course){
		return this.courseRepository.insert(course)
	}
}
