/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationHealthData } from '../models/ApplicationHealthData';
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * Get health status
     * Check the instance health status
     * @returns ApplicationHealthData Instance is up
     * @throws ApiError
     */
    public static async healthGetHealth(): Promise<ApplicationHealthData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/health`,
        });
        return result.body;
    }

}