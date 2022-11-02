import {localesMap} from "./locales";
import {getInitLang} from "./initLang";

export const getLanguagePlatformValue = (lang = getInitLang()) => {
    // 抹平多语言平台json文件名与本地多语言变量不一致的差异
    const langPlatformMap = {
        [localesMap.en]: 'en',
        [localesMap.zhCn]: 'zh-hans-cn',
        [localesMap.zhHant]: 'zh-hant-tw',
        [localesMap.vi]: 'vi',
        [localesMap.th]: 'th',
        [localesMap.ms]: 'ms',
        [localesMap.id]: 'id',
    };
    return langPlatformMap[lang];
};
