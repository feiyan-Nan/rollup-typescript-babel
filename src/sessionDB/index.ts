// sessionStorage 服务
const sessionDB = {
  isSupported: (() => {
    let isSupportedFlag = true;
    try {
      window.sessionStorage.setItem('__smartpush__', '1');
      window.sessionStorage.removeItem('__smartpush__');
    } catch (error) {
      console.error('浏览器不支持 sessionStorage. 请关闭 "隐私模式" 或者升级浏览器');
      isSupportedFlag = false;
    }
    return isSupportedFlag;
  })(),

  set(key: string, value = {}): void {
    if (sessionDB.isSupported) window.sessionStorage.setItem(key, JSON.stringify(value));
  },

  get<T extends Record<string, any>>(key: string): T | null {
    const value = sessionDB.isSupported ? window.sessionStorage.getItem(key) : null;
    return value === null ? null : JSON.parse(value);
  },

  remove(...keys: string[]): void {
    if (sessionDB.isSupported) keys.forEach(key => window.sessionStorage.removeItem(key));
  },

  clear() {
    if (sessionDB.isSupported) window.sessionStorage.clear();
  },
};

export default sessionDB;
