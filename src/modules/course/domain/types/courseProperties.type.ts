import { CourseOptional } from '../interfaces/courseOptional.interface'
import { CourseRequired } from '../interfaces/courseRequired.interface'

export type CourseProperties = Required<CourseRequired> & Partial<CourseOptional>
