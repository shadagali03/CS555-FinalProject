import { BadRequestError } from "./errors.js";

const validateInput = (data, schema) => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    const errorMessages = error.details
      .map((detail) => detail.message)
      .join("; ");
    console.log(errorMessages);
    throw new BadRequestError(`Input validation error: ${errorMessages}`);
  }

  return value;
};

export default validateInput;
