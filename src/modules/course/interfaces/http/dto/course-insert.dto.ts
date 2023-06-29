import { CourseProperties } from 'src/modules/course/domain/course'
import { DTO } from './dto.generic'

interface CourseDTO {
	name: string
	description: string
	difficulty: string
	technology: string
	guid: string
}

export type CourseInsertOneDTO = CourseDTO

export class CourseInsertMapping extends DTO<CourseProperties, CourseInsertOneDTO> {
	execute(data: CourseProperties): CourseInsertOneDTO {
		return {
			name: data.name,
			description: data.description,
			difficulty: data.difficulty,
			technology: data.technology,
			guid: data.guid,
		}
	}
}
