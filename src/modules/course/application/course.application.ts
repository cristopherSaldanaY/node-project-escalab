import Course, { CourseUpdate } from '../domain/course';
import { CourseRepository } from '../domain/course.repository'

export default class CourseApplication {
	constructor(private readonly courseRepository: CourseRepository) {}


	insert(course: Course){
		return this.courseRepository.insert(course)
	}

	list(){
		return this.courseRepository.list()
	}

	listOne(guid: string){
		return this.courseRepository.listOne(guid)
	}

	update(guid: string, course: Partial<CourseUpdate>){
		return this.courseRepository.update(guid, course)
	}

	delete(guid: string){
		return this.courseRepository.delete(guid)
	}
}
