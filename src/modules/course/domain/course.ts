import { IEntity } from '../../shared/entity.interface'

interface CourseRequired{
	name: string
	description: string
	difficulty: string
	technology: string
}

interface CourseOptional{
	active: boolean
	guid: string
}

export interface CourseUpdate{
	name: string
	description: string
	difficulty: string
	technology: string
}

export type CourseProperties = Required<CourseRequired> & Partial<CourseOptional>

export default class Course implements IEntity<CourseProperties, CourseUpdate> {
	private name: string
	private description: string
	private difficulty: string
	private technology: string
	private active: boolean
	private readonly guid: string

	constructor(courseProperties: CourseProperties){
		this.active = true
		Object.assign(this, courseProperties)
	}

	properties(): CourseProperties {
		return {
			name: this.name,
			description: this.description,
			difficulty: this.difficulty,
			technology: this.technology,
			active: this.active,
			guid: this.guid
		}
	}

	update(fields: CourseUpdate){
		Object.assign(this, fields)
	}

	delete(){
		this.active = false
	}
}
