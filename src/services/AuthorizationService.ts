/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class AuthorizationService {

    /**
     * Authorize User
     * Redirect the browser to this endpoint to request the user to generate an api-key with specific permissions
     * @returns any A HTML form that a user can use to confirm permissions to grant
     * @throws ApiError
     */
    public static async getAuthorizationService({
        permissions,
        applicationName,
        strict = true,
        selectiveStores = false,
        redirect,
        applicationIdentifier,
    }: {
        /** The permissions to request. (See API Key authentication) **/
        permissions?: Array<string> | null,
        /** The name of your application **/
        applicationName?: string | null,
        /** If permissions are specified, and strict is set to false, it will allow the user to reject some of permissions the application is requesting. **/
        strict?: boolean | null,
        /** If the application is requesting the CanModifyStoreSettings permission and selectiveStores is set to true, this allows the user to only grant permissions to selected stores under the user's control. **/
        selectiveStores?: boolean | null,
        /** The url to redirect to after the user consents, with the query parameters appended to it: permissions, user-id, api-key. If not specified, user is redirected to their API Key list. **/
        redirect?: string | null,
        /** If specified, BTCPay Server will check if there is an existing API key associated with the user that also has this application identifier, redirect host AND the permissions required match(takes selectiveStores and strict into account). `applicationIdentifier` is ignored if redirect is not specified. **/
        applicationIdentifier?: string | null,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api-keys/authorize`,
            query: {
                'permissions': permissions,
                'applicationName': applicationName,
                'strict': strict,
                'selectiveStores': selectiveStores,
                'redirect': redirect,
                'applicationIdentifier': applicationIdentifier,
            },
            errors: {
                307: `Makes browser do an HTTP POST request to the specified url in \`redirect\` with a JSON body consisting of \`apiKey\` (the api key created or matched), \`permissions\` (the permissions the user consented to), and \`userId\` (the id of the user that consented) upon consent`,
            },
        });
        return result.body;
    }

}