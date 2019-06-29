import formatJson from 'format-json'


function prettyLog(args: any, key: string = '', color = 'black') {
  if (arguments.length === 1) {
    return  __DEV__ && console.log(`%c${formatJson.plain(args)}`, `color: ${color}`)
  }
  __DEV__ && console.log(key ? `%c${key}:${formatJson.plain(args)}` : formatJson.plain(args), `color: ${color}`)
}


export {
  prettyLog
}
