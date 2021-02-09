/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Description of an error happening during processing of the request
 */
export type ProblemDetails = {
    /**
     * An error code describing the error
     */
    code?: string;
    /**
     * User friendly error message about the error
     */
    message?: string;
}
