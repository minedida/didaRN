# dida_RN

- 用rn写的滴答清单客户端
### 处理navigationbar组件
- 考虑iphonex的适配，iphonex下切换页面连带状态栏(应不应该连带呢)
    - 需要SafeAreaView配合，永远不插入上面部分视图，上面部分的视图由navigationbar添加
- 考虑安卓透明状态栏的适配
    - 目前在navigationbar中添加了`<StatusBar backgroundColor="transparent" translucent/>`透明属性
    - 在不需要navigationbar的页面中，单独拷贝上述代码到页面中即可
    - 做到全局状态栏透明，使用navigationbar的页面中不需要处理状态栏透明带来的副作用；在不使用navigationbar页面中单独添加`StatusBar`，不影响iOS，需要在页面中添加`paddingTop`
- 考虑安卓下设备的真实高度获取不正确(考虑onConfigurationChange回调方法)
    - 使用`react-native-extra-dimensions-android`获取真实高度
    - 上述组件没有在onConfigurationChange回调方法监听高度变化
    - 考虑onConfigurationChange回调方法监听，减少bug //TODO
    - 考虑增加`isNotch`方法 //TODO
