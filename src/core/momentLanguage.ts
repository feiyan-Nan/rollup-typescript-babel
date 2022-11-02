import {localesMap} from "./locales";
import {getInitLang} from "./initLang";

export const getMomentLanguage = (lang = getInitLang()) => {
    // 抹平多语言平台json文件名与本地多语言变量不一致的差异
    const momentLocalesMap = {
        [localesMap.zhHant]: 'zh-tw',
        [localesMap.zhCn]: 'zh-cn',
        [localesMap.en]: 'en-gb',
        [localesMap.vi]: 'vi',
        [localesMap.th]: 'th',
        [localesMap.ms]: 'ms',
        [localesMap.id]: 'id',
    };
    return momentLocalesMap[lang];
};
