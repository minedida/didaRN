export class Cacher {
  cacheMap: Map<any, any>;
  option: {
    maxCacheSize: number
    ttl: any
    excludeHeaders: boolean
  };
  maxCacheSize: number;
  ttl: any;
  filters: Array<any>;
  excludeHeaders: boolean;

  constructor(option) {
    this.cacheMap = new Map();
    this.option = option || {};
    this.maxCacheSize = this.option.maxCacheSize || 15;
    this.ttl = this.option.ttl;
    this.filters = [];
    this.excludeHeaders = this.option.excludeHeaders || false
  }

  /**
   * @function 添加匹配规则
   * @param reg
   */
  addFilter(reg) {
    this.filters.push(reg);
  }

  /**
   * @function 移除匹配规则
   * @param reg
   */
  removeFilter(reg) {
    let indexOf = this.filters.indexOf(reg);
    if (indexOf > -1) {
      this.filters.splice(indexOf, 1);
    }
  }

  /**
   * @function 添加缓存
   * @param key
   * @param value
   */
  setCache(key, value) {
    if (this.excludeHeaders) delete key.headers;

    this.cacheMap.set(JSON.stringify(key), value);
    if (this.maxCacheSize && this.cacheMap.size > this.maxCacheSize) {
      this.cacheMap.delete([...(this.cacheMap.keys())][0])
    }

    if (this.ttl) {
      setTimeout(() => {
        if (this.hasCache(key))
          this.cacheMap.delete(JSON.stringify(key));

      }, this.ttl)
    }
  }

  /**
   * @function 检查是否命中匹配规则
   * @param option
   */
  needCache(option) {
    return this.filters.some(
      v =>
        v.test(option.url)
    )
  }

  /**
   * @function 是否已有缓存
   * @param key
   */
  hasCache(key) {
    return this.cacheMap.has(JSON.stringify(key));
  }

  /**
   * @function 获取缓存内容
   * @param key
   */
  getCache(key) {
    return this.cacheMap.get(JSON.stringify(key));
  }

  /**
   * @function 清空缓存
   */
  clear() {
    this.cacheMap.clear();
  }
}
