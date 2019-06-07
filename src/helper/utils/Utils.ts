import formatJson from 'format-json'



function prettyLog(key: string, args: any, color = 'black') {
  if (arguments.length === 1) {
    return __DEV__ && console.log(`%c${key}:${formatJson.plain(key)}`, `color: ${color}`);
  }
  __DEV__ && console.log(`%c${key}:${formatJson.plain(args)}`, `color: ${color}`)
}



export {
  prettyLog
}
