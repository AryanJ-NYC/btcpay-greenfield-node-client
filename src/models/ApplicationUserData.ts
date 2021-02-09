/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationUserData = {
    /**
     * The id of the user
     */
    id?: string;
    /**
     * The email of the user
     */
    email?: string;
    /**
     * True if the email has been confirmed by the user
     */
    emailConfirmed?: boolean;
    /**
     * True if the email requires email confirmation to log in
     */
    requiresEmailConfirmation?: boolean;
    /**
     * The creation date of the user as a unix timestamp. Null if created before v1.0.5.6
     */
    created?: string;
    /**
     * The roles of the user
     */
    roles?: Array<string>;
}
