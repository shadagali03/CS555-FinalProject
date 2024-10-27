export class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

/** 400 BAD REQUEST error. */
export class BadRequestError extends ExpressError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

/** 401 UNAUTHORIZED error. */
export class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

/** 403 FORBIDDEN error. */
export class ForbiddenError extends ExpressError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

/** 404 NOT FOUND error. */
export class NotFoundError extends ExpressError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

/** 422 UNPROCESSABLE ENTITY error. */
export class UnprocessableEntityError extends ExpressError {
  constructor(message = "Unprocessable Entity") {
    super(message, 422);
  }
}

/** 403 INVALID TOKEN error. */
export class InvalidTokenError extends ExpressError {
  constructor(message = "Invalid Token") {
    super(message, 403);
  }
}

/** 500 INTERNAL SERVER error. */
export class UnexpectedError extends ExpressError {
  constructor(
    message = "Unexpected error has occurred. Please try again later"
  ) {
    super(message, 500);
  }
}
