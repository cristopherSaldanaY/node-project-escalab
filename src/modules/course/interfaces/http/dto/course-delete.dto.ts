import { CourseProperties } from '../../../domain/course'
import { DTO } from './dto.generic'

interface CourseDTO {
	name: string
	description: string
	difficulty: string
	technology: string
	guid: string
}

export type CourseDeleteDTO = CourseDTO

export class CourseDeleteMapping extends DTO<CourseProperties, CourseDeleteDTO> {
	execute(data: CourseProperties): CourseDeleteDTO {
		return {
			name: data.name,
			description: data.description,
			difficulty: data.difficulty,
			technology: data.technology,
			guid: data.guid,
		}
	}
}
