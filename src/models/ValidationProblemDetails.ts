/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An array of validation errors of the request
 */
export type ValidationProblemDetails = Array<{
    /**
     * The json path of the property which failed validation
     */
    path?: string,
    /**
     * User friendly error message about the validation
     */
    message?: string,
}>;