import { Cacher } from "./Cacher";

export default function (instance, option) {
  const cacher = new Cacher(option);
  const unCacheMethods = [
    'post',
    'put',
    'delete',
    'patch',
    'head',
    'options',
  ]

  function axiosWithCache(...arg) {
    if (arg.length === 1 &&
      (arg[0].method === 'get' || arg[0].method === undefined)
    ) {
      return requestWithCacheCheck(arg[0], instance, ...arg);
    }
    return instance(...arg);
  }

  function requestWithCacheCheck(option, func, ...arg) {
    if (cacher.needCache(option)) {
      if (cacher.hasCache(option)) {
        return Promise.resolve({
          __fromAxiosCache: false,
          ...cacher.getCache(option)
        });
      } else {
        return func(...arg).then(response => {
          cacher.setCache(option, response);
          return response;
        })
      }
    } else {
      return instance(...arg);
    }
  }

  axiosWithCache.get = function (...arg) {
    if (arg.length === 1) {
      return requestWithCacheCheck({
        url: arg[0]
      }, instance, ...arg);
    }
    if (arg.length === 2) {
      return requestWithCacheCheck({
        url: arg[0],
        ...arg[1],
      }, instance, ...arg);
    }

    return instance.get(...arg);
  }

  axiosWithCache.__addFilter = function (filter) {
    cacher.addFilter(filter);
  }
  axiosWithCache.__removeFilter = function (filter) {
    cacher.removeFilter(filter);
  }

  axiosWithCache.__cacher = cacher

  axiosWithCache.__clearCache = function () {
    cacher.clear();
  }

  unCacheMethods.forEach(method => {
    axiosWithCache[method] = function (...arg) {
      return instance[method](...arg);
    }
  })

  return axiosWithCache

}
