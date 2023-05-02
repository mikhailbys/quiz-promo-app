import {initAuthModel} from "./storages/auth/Auth.model";

interface ObjectStoreOptions {
    keyPath: string;
    autoIncrement: boolean;
}

export const CURRENT_VERSION = 1;
export const APP_DB_NAME = 'QUIZ_DB'

export const defaultObjectStoreOptions: ObjectStoreOptions = {
    keyPath: 'id',
    autoIncrement: true
}

export interface InitStoreModel {
    name: string;
    keys: string[];
}

export const INIT_STORE_MODELS = [initAuthModel];