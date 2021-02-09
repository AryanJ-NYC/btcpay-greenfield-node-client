/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StoreBaseData } from './StoreBaseData';

export type StoreData = (StoreBaseData & {
    /**
     * The id of the store
     */
    id?: string,
});
