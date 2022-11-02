# @sl/ads-sp-language

> `@sl/ads-sp-language`是服务于[smart-push-new](https://git.duowan.com/webs/ecom-oversea/frontend/smart-push-new) 的多语言包

### Installation

```shell
yarn add @sl/ads-sp-language
```

### ReleaseNotes

```shell
npm login --registry=https://npm-registry.duowan.com

sh build.sh
```

### Documentation


| 功能               | 方法                            | 参数               |
|------------------|-------------------------------|------------------|
| 获取sp的默认语言(默认为en) | getDefaultLanguage()          | 无                |
| 获取此时sp的初始化语言     | getInitLang()                 | 无                |
| 获取多语言平台的语种       | getLanguagePlatformValue()    | 参数为可选传i18n的语言    |
| 获取Moment的时间      | getMomentLanguage()           | 参数为可选传i18n的语言    |
| i18n映射到后端多语言的key | getServiceLanguage()          | 参数必传  i18n的语言    |
| 后端返回的语言key映射i18n | getAdminLanguageFromService() | 参数必传  后端返回的语言key |
