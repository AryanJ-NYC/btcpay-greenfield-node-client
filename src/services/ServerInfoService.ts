/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationServerInfoData } from '../models/ApplicationServerInfoData';
import { request as __request } from '../core/request';

export class ServerInfoService {

    /**
     * Get server info
     * Information about the server, chains and sync states
     * @returns ApplicationServerInfoData Server information
     * @throws ApiError
     */
    public static async serverInfoGetServerInfo(): Promise<ApplicationServerInfoData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/server/info`,
        });
        return result.body;
    }

}