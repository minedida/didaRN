# dida_RN

>  用rn写的滴答清单客户端

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
### 制作icon
- 根据反编译资源制作icon素材
    - apk解包后将logo.xxxhdpi.png文件用ps打开
    - 选择导出为图片，设置尺寸为1024
    - 将1024的logo用[appicon](https://icon.wuruihong.com)进行制作，得到通用icon
- 制作仿滴答icon素材
    - 滴答官网给出了[icon素材](https://s3.cn-north-1.amazonaws.com.cn/appest-public/download/press.zip)
    - 将500*500的icon用ps打开，选择导出为图片；勾选透明度，图像宽高900，画布宽高1024
    - 此时得到效果较好的ios下的icon，android可以使用adaptive icon制作图标
- 制作iOS的icon
    - [参考](https://www.jianshu.com/p/2e6756c4c7be)：选中项目、target、项目、general、下拉到appicon、点击右箭头，拖动对应的icon
- 制作android的icon
    - 由于滴答已经实现了adaptive icon，可以直接反编译后将icon拿来用。下面是adaptive icon的制作
    - command+shft+A 快捷键，并输入Image Asset，选择path为icon的前景色，选择背景色为白色，然后就好了
### 制作启动图
- [在线制作](https://icon.wuruihong.com/splash)启动图素材
    - 上传滴答logo，调整大小和坐标至合适
    - 取消掉横屏设备，下载图片。删除无用资源（iOS下ipad的splash）
- 制作iOS启动图
    - xcode中appicon处，选择launch screen，然后将LaunchImage.launchimage文件替换即可
    - 将 `launch screen file`这里删掉，留空
    - 卸载app，重新运行
- 制作Android的启动图
    - 这里借助[react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

### 关于[typography](react-native-typography)
- 项目中坚持使用[typography](react-native-typography)指定文字
- 该库保证所有文字看起来的效果在两个平台下极其一致

### 关于[modal-translucent](react-native-modal-translucent)
- 项目中使用了[modal-translucent](react-native-modal-translucent)来去除安卓平台下，弹出modal时尴尬的状态栏
- 在每次重新安装依赖时，注意运行修复脚本`yarn fix-modal`

### 关于抽屉
- 抽屉有几个问题
- 1。样式：安卓和iOS的抽屉样式不同，手势不同
    - 安卓的抽屉在zIndex上是高于内容区域，触发时抽屉从左侧向右被拉出来，内容区域没有位置变化，同时右侧内容区域覆盖一层蒙版；收回时触摸抽屉拉回
    - iOS的抽屉在zIndex上是低于内容区域，触发时触摸内容区域向右滑动，抽屉没有位置变化。
- 2.路由结构：抽屉应该有一个上级路由
    - 在路由结构上，抽屉在Stack路由中应该有一个容器，里面包含子页面A、B
    - 切换到抽屉容器的Stack路由时，由代码控制显示A或者显示B
- 3。push行为
    - 当打开抽屉时，选择B的item，此时抽屉回收，显示B页面。这里A、B页面只是做了replace
    - 当打开抽屉时，选择C的item，要求抽屉不回收，push一个C页面，从C页面返回能看到抽屉打开的状态。
    - 但是目前的行为是push 一个C页面，该页面不能覆盖抽屉，只是右侧内容区域发生了变化
- 4.抽屉组件的备选方案
    - 1.react-native-slide-menu
    - 2.react-native-paper的Drawer
    - 3.react-native-gesture-handler的Drawer

### todo
- 1.在`onConfigurationChanged`方法中监听刘海儿是否存在，将正确的状态栏信息发送到js侧，从而app能刘海正确根据响应
- 2.处理安卓平台下抽屉组件，手势拖出
- 3.处理抽屉切换动画，当抽屉打开时，push一个路由，发现新页面不能覆盖抽屉




### 组件
- toast组件，带有原生质感。
    - [react-native-simple-toast](https://github.com/vonovak/react-native-simple-toast.git)星星更多一些，但是配置简单，自定义能力弱
    - [react-native-toast-native](https://github.com/onemolegames/react-native-toast-native)星星相对少一些，但是自定义能力强大
- 目前使用了`simple-toast`，若后续发现toast能力不足可以切换



## Mobx
### 改变store中某一数据，观察该store的React组件会发生怎样的变化
#### 情况1：2个页面作为父子组件在页面中
```jsx harmony
 withAppStore(App.tsx)
   withAppStore(DashBoard.tsx)
     withAppStore(ThemeSetting.tsx)
```
- 在`DashBoard`页面中修改AppStore的值，此时只有DashBoard.tsx重新渲染
- 在`ThemeSetting`页面中修改AppStore的值，此时只有App.tsx重新渲染

#### 情况2：2个页面作为兄弟组件在页面中
```jsx harmony
 withAppStore(App.tsx)
   withAppStore(DashBoard.tsx)
   withAppStore(ThemeSetting.tsx)
```
- 在`DashBoard`页面中修改AppStore的值，此时DashBoard.tsx重新渲染
- 在`ThemeSetting`页面中修改AppStore的值，此时只有App.tsx重新渲染

## 已知BUg🐛
- `onNavigationStateChange` 和 动态Tab有冲突


