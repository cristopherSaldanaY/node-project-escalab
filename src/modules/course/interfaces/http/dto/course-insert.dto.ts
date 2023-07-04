import { CourseProperties } from 'src/modules/course/domain/types/courseProperties.type'
import { DTO } from './dto.generic'
import { CourseInsertOneDTO } from './types/courseInsert.type'

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
