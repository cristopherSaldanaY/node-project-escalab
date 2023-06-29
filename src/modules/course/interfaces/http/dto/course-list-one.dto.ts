import { CourseProperties } from '../../../domain/course'
import { DTO } from './dto.generic'

interface CourseOneDTO {
	name: string
	description: string
	difficult: string
	technology: string
	guid: string
}

export type CourseListOneDTO = CourseOneDTO

export class CourseListOneMapping extends DTO<CourseProperties, CourseListOneDTO> {
	execute(data: CourseProperties): CourseListOneDTO {
		return {
			name: data.name,
			description: data.description,
			difficult: data.difficulty,
			technology: data.technology,
			guid: data.guid,
		}
	}
}
