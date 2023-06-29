import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CourseEntity {
	@PrimaryColumn()
	guid: string

	@Column({ type: 'varchar', length: 100 })
	name: string

	@Column({ type: 'varchar', length: 100 })
	description: string

	@Column({ type: 'varchar', length: 100 })
	difficulty: string

	@Column({ type: 'varchar', length: 100})
	technology: string

	@Column({ type: 'boolean', default: true})
	active: boolean

}
