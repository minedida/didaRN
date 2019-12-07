import { Platform } from "react-native";


export default {
  play: Platform.select({
    ios: require('./play.html'),
    android: { uri: 'file:///android_asset/play.html' }
  })
}
