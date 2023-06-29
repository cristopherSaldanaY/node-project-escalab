import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CourseListOneValidator {
	@IsString({ message: 'Guid must be a string' })
	@IsNotEmpty({ message: 'Guid must not be empty' })
	@MinLength(10, { message: 'Guid is too short' })
	guid: string
}
