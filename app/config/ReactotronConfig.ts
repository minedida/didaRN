import { AsyncStorage } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native'
import { Toast } from "../components";

// 在hermes-engine下，`import Reactotron`不可以放在组件的生命周期内调用(hermes会报错)，只可以在组件外部调用

Reactotron.setAsyncStorageHandler(AsyncStorage);
Reactotron.configure({
  name: 'dida',
});
Reactotron.useReactNative({
  asyncStorage: true,
  devTools: true,
  overlay: true,
  editor: true,
  errors: true,
});
if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}
Reactotron.onCustomCommand('test2333', () => alert('test2333'));
Reactotron.onCustomCommand('aler', () => Toast.show("asdsd"));
// console.tron.log("This is a log message");
// console.tron.warn("This is a warn message");
// console.tron.error("This is a error message");
// console.tron.display("This is a display message");
// console.tron.debug("This is a debug message");

// enhance console use TS -> https://stackoverflow.com/questions/44764418/extends-console-interface-for-typescript
console.tron = Reactotron;
declare global {
  interface Console {
    tron: {
      log: any,
      warn: any,
      error: any,
      display: any,
      debug: any,
    }
  }
}
