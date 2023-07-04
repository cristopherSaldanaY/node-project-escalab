import { CourseProperties } from 'src/modules/course/domain/types/courseProperties.type'
import { DTO } from './dto.generic'
import { CourseUpdateDTO } from './types/courseUpdate.type'

export class CourseUpdateMapping extends DTO<CourseProperties, CourseUpdateDTO> {
	execute(data: CourseProperties): CourseUpdateDTO {
		return {
			name: data.name,
			description: data.description,
			difficulty: data.difficulty,
			technology: data.technology,
			guid: data.guid,
		}
	}
}
