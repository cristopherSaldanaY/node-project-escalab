import { DomainException, DomainExceptionCode } from './domain.exception'

export class CourseNameRequiredException extends DomainException {
	constructor() {
		super(CourseNameRequiredException.getMessage())
		this.name = DomainExceptionCode.COURSE_NAME_REQUIRED
	}

	static getMessage() {
		return 'Name is required'
	}
}

export class CourseDescriptionRequiredException extends DomainException {
	constructor() {
		super(CourseDescriptionRequiredException.getMessage())
		this.name = DomainExceptionCode.COURSE_DESCRIPTION_REQUIRED
	}

	static getMessage() {
		return 'Description is required'
	}
}

export class CourseDescriptionLengthInvalidException extends DomainException {
	constructor(description: string) {
		super(CourseDescriptionLengthInvalidException.getMessage(description))
		this.name = DomainExceptionCode.COURSE_DESCRIPTION_LENGTH_INVALID
	}

	static getMessage(description: string) {
		return `Description must be more than 4 characters, but '${description}' has only ${description.length}`
	}
}

export class CourseDifficultyRequiredException extends DomainException {
	constructor() {
		super(CourseDifficultyRequiredException.getMessage())
		this.name = DomainExceptionCode.COURSE_DIFFICULTY_REQUIRED
	}

	static getMessage() {
		return 'Difficulty is required'
	}
}

export class CourseTechnologyRequiredException extends DomainException {
	constructor() {
		super(CourseTechnologyRequiredException.getMessage())
		this.name = DomainExceptionCode.COURSE_TECHNOLOGY_REQUIRED
	}

	static getMessage() {
		return 'Technology is required'
	}
}

export class CourseGuidInvalidException extends DomainException {
	constructor() {
		super(CourseGuidInvalidException.getMessage())
		this.name = DomainExceptionCode.COURSE_GUID_INVALID
	}

	static getMessage() {
		return 'Guid is invalid'
	}
}

export class CourseNotFoundException extends DomainException {
	constructor() {
		super(CourseNotFoundException.getMessage())
		this.name = DomainExceptionCode.COURSE_NOT_FOUND
	}

	static getMessage() {
		return 'Course not found'
	}
}
