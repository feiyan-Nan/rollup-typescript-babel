import {localesMap} from "./locales";

const mailServiceLocaleMap = {
    zh_CN: 'zh-CN',
    zh_TW: 'zh-TW',
    [localesMap.zhCn]: 'zh-CN',
    [localesMap.zhHant]: 'zh-TW',
    [localesMap.en]: 'en',
    [localesMap.vi]: 'vi',
    [localesMap.th]: 'th',
    [localesMap.ms]: 'ms',
    [localesMap.id]: 'id',
};

export const getServiceLanguage = (key: string) => {
    return mailServiceLocaleMap[key]
}
