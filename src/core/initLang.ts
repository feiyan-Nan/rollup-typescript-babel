import {getCookie, getQueryString} from "../util";
import {mainAdminLocaleMap, urlLocaleMap, urlLocaleMapPush} from "./locales";
import {getDefaultLanguage} from "./defaultLanguage";
import sessionDB from "../sessionDB";

export function getInitLang(plus = false): string {
    const locales = plus ? urlLocaleMapPush : urlLocaleMap;
    return locales[getQueryString('lang') as keyof typeof urlLocaleMap] ||
        mainAdminLocaleMap[getCookie('a_lang') as keyof typeof mainAdminLocaleMap] ||
        mainAdminLocaleMap[sessionDB.get('global_configs')?.lang] ||
        getDefaultLanguage();
}
