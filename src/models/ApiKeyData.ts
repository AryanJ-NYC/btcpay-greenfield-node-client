/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiKeyData = {
    /**
     * The API Key to use for API Key Authentication
     */
    apiKey?: string;
    /**
     * The label given by the user to this API Key
     */
    label?: string;
    /**
     * The permissions associated to this API Key
     */
    permissions?: Array<string>;
}
