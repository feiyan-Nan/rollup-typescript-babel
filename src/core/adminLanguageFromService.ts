import {mainAdminLocaleMap} from "./locales";

export const getAdminLanguageFromService = (key: string) => {
    return mainAdminLocaleMap[key]
}
