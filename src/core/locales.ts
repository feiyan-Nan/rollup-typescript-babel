export interface LocalesConfig {
  en: string;
  zhCn: string;
  zhHant: string;
  'zh-hans-cn': string;
  'zh-hant-tw': string;
  de: string;
  fr: string;
  ja: string;
  th: string;
  ru: string;
  es: string;
  id: string;
  it: string;
  pt: string;
  nl: string;
  pl: string;
  ko: string;
  el: string;
  bg: string;
  ro: string;
  hu: string;
  lt: string;
  vi: string;
  ms: string;
  sv: string;
  nb: string;
  cs: string;
  fi: string;
  da: string;
  lv: string;
  et: string;
  hr: string;
  hi: string;
  tr: string;
  sk: string;
  sl: string;
}

export const localesMap: LocalesConfig = {
  // 英语
  en: 'en',
  // 中文简体
  zhCn: 'zhCn',
  // 繁体中文
  zhHant: 'zhHant',
  'zh-hans-cn': 'zh-hans-cn',
  'zh-hant-tw': 'zh-hant-tw',
  de: 'de',
  fr: 'fr',
  ja: 'ja',
  th: 'th',
  ru: 'ru',
  es: 'es',
  id: 'id',
  it: 'it',
  pt: 'pt',
  nl: 'nl',
  pl: 'pl',
  ko: 'ko',
  el: 'el',
  bg: 'bg',
  ro: 'ro',
  hu: 'hu',
  lt: 'lt',
  vi: 'vi',
  ms: 'ms',
  sv: 'sv',
  nb: 'nb',
  cs: 'cs',
  fi: 'fi',
  da: 'da',
  lv: 'lv',
  et: 'et',
  hr: 'hr',
  hi: 'hi',
  tr: 'tr',
  sk: 'sk',
  sl: 'sl',
};

// 后端返回的key映射到i18n
export const mainAdminLocaleMap = {
  en: localesMap.en,
  'en-US': localesMap.en,
  'zh-cn': localesMap.zhCn,
  'zh-hans-cn': localesMap.zhCn,
  'zh-hant': localesMap.zhHant,
  'zh-hant-hk': localesMap.zhHant,
  'zh-hant-tw': localesMap.zhHant,
  [localesMap.zhHant]: localesMap.zhHant,
  [localesMap.zhCn]: localesMap.zhCn,
  [localesMap.vi]: 'vi',
  [localesMap.th]: 'th',
  [localesMap.ms]: 'ms',
  [localesMap.id]: 'id',
};


export const urlLocaleMap = {
  'zh-CN': localesMap.zhCn,
  'zh-TW': localesMap.zhHant,
  en: localesMap.en,
  [localesMap.vi]: 'vi',
  [localesMap.th]: 'th',
  [localesMap.ms]: 'ms',
  [localesMap.id]: 'id',
};

export const urlLocaleMapPush = {
  'zh-hans-cn': localesMap['zh-hans-cn'],
  'zh-hant-tw': localesMap['zh-hant-tw'],
  'zh-cn': localesMap['zh-hans-cn'],
  'zh-hant': localesMap['zh-hant-tw'],
  'zh-CN': localesMap.zhCn,
  'zh-TW': localesMap.zhHant,
  en: localesMap.en,
  de: localesMap.de,
  fr: localesMap.fr,
  ja: localesMap.ja,
  th: localesMap.th,
  ru: localesMap.ru,
  es: localesMap.es,
  id: localesMap.id,
  it: localesMap.it,
  pt: localesMap.pt,
  nl: localesMap.nl,
  pl: localesMap.pl,
  ko: localesMap.ko,
  el: localesMap.el,
  bg: localesMap.bg,
  ro: localesMap.ro,
  hu: localesMap.hu,
  lt: localesMap.lt,
  vi: localesMap.vi,
  ms: localesMap.ms,
  sv: localesMap.sv,
  nb: localesMap.nb,
  cs: localesMap.cs,
  fi: localesMap.en,
  da: localesMap.da,
  lv: localesMap.lv,
  et: localesMap.et,
  hr: localesMap.hr,
  hi: localesMap.hi,
  tr: localesMap.tr,
  sk: localesMap.sk,
  sl: localesMap.sl,
};
