import { Result } from 'neverthrow'
import Course, { CourseUpdate } from './course'
import { CourseNotFoundException } from './exceptions/course.exception'

export interface CourseRepository {
	insert(course: Course): Promise<Course>
	list(): Promise<Course[]>
	listOne(guid: string): Promise<Result<Course, CourseNotFoundException>>
	update(guid: string, course: Partial<CourseUpdate>): Promise<Result<Course, CourseNotFoundException>>
	delete(guid: string): Promise<Result<Course, CourseNotFoundException>>
}
