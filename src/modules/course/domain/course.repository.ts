import { Result } from 'neverthrow'
import Course from './course'
import { CourseNotFoundException } from './exceptions/course.exception'
import { CourseUpdate } from './interfaces/courseUpdate.interface'

export interface CourseRepository {
	insert(course: Course): Promise<Course>
	list(): Promise<Course[]>
	listOne(guid: string): Promise<Result<Course, CourseNotFoundException>>
	update(guid: string, course: Partial<CourseUpdate>): Promise<Result<Course, CourseNotFoundException>>
	delete(guid: string): Promise<Result<Course, CourseNotFoundException>>
}
