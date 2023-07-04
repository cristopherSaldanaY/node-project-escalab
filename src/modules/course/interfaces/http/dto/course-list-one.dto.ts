import { CourseProperties } from 'src/modules/course/domain/types/courseProperties.type'
import { DTO } from './dto.generic'
import { CourseListOneDTO } from './types/courseListOne.type'

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
