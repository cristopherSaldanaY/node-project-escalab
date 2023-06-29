import { CourseProperties } from '../../../domain/course'
import { DTO } from './dto.generic'

interface CourseDTO {
	name: string
	description: string
	difficult: string
	technology: string
	guid: string
}

export type CourseListDTO = CourseDTO[]

export class CourseListMapping extends DTO<CourseProperties[], CourseListDTO> {
	execute(data: CourseProperties[]): CourseListDTO {
		return data.map((course: CourseProperties) => {
			return {
				name: course.name,
				description: course.description,
				difficult: course.difficulty,
				technology: course.technology,
				guid: course.guid,
			}
		})
	}
}
