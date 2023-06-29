import { validate as uuidValidate } from 'uuid'
import { Result, err, ok } from 'neverthrow'
import { CourseGuidInvalidException } from '../exceptions/course.exception'
import { ValueObject } from './vo.class'

interface GuidProps {
	value: string
}

type GuidResult = Result<GuidVO, CourseGuidInvalidException>

export class GuidVO extends ValueObject<GuidProps> {
	private constructor(props: GuidProps) {
		super(props)
	}

	static create(guid: string): GuidResult {
		if (!uuidValidate(guid)) {
			return err(new CourseGuidInvalidException())
		}

		return ok(new GuidVO({ value: guid }))
	}

	get value(): string {
		return this.props.value
	}
}
