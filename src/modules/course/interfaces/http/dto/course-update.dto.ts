import { CourseProperties } from '../../../domain/course'
import { DTO } from './dto.generic'

interface CourseDTO {
	name: string
	description: string
	difficulty: string
	technology: string
	guid: string
}

export type CourseUpdateDTO = CourseDTO

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
