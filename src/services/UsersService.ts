/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationUserData } from '../models/ApplicationUserData';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Get current user information
     * View information about the current user
     * @returns ApplicationUserData Information about the current user
     * @throws ApiError
     */
    public static async usersGetCurrentUser(): Promise<ApplicationUserData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/users/me`,
        });
        return result.body;
    }

    /**
     * Create user
     * Create a new user.
     *
     * This operation can be called without authentication in any of this cases:
     * * There is not any administrator yet on the server,
     * * The subscriptions are not disabled in the server's policies.
     *
     * If the first administrator is created by this call, subscriptions are automatically disabled.
     * @returns ApplicationUserData Information about the new user
     * @throws ApiError
     */
    public static async postUsersService({
        requestBody,
    }: {
        requestBody: {
            /**
             * The email of the new user
             */
            email?: string,
            /**
             * The password of the new user
             */
            password?: string,
            /**
             * Make this user administrator (only if you have the `unrestricted` permission of a server administrator)
             */
            isAdministrator?: boolean | null,
        },
    }): Promise<ApplicationUserData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/users`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when creating the user`,
                401: `If you need to authenticate for this endpoint (ie. the server settings policies lock subscriptions and that an admin already exists)`,
                403: `If you are authenticated but forbidden to create a new user (ie. you don't have the \`unrestricted\` permission on a server administrator or if you are not administrator and registrations are disabled in the server's policies)`,
                429: `DDoS protection if you are creating more than 2 accounts every minutes (non-admin only)`,
            },
        });
        return result.body;
    }

}