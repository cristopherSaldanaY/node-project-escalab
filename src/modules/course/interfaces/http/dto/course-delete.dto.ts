import { CourseProperties } from 'src/modules/course/domain/types/courseProperties.type'
import { DTO } from './dto.generic'
import { CourseDeleteDTO } from './types/courseDelete.type'

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
