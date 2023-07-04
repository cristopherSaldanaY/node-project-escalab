import { CourseProperties } from 'src/modules/course/domain/types/courseProperties.type'
import { DTO } from './dto.generic'
import { CourseListDTO } from './types/courseList.type'

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
