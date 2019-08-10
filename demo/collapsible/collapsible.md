### conclusion
- 要想实现nested listview有一个跟随滚动事件改变的头部，需要将最外层的scrollview的onscroll事件绑定到头部的位移动画中。
这个动画怎么实现可以由RN自带的Animated完成，也可以由ReAnimated来完成。效率理论上来说ReAnimated更高，但是demo中没有看出来。
在demo的实现程度中，ReactNativeScrollableHeader完成度最高，包含头部动画和列表的上拉下拉（这里列表的Refresh和ScrollView的Refresh有冲突，需要将Refresh解耦），
ReanimatedCollapsibleNavbar虽然使用了ReAnimated，但是demo中没有自带头部刷新的效果，暂时认为他不完整
- 在实现该效果的组件中，还有一个hoook了react-navigation的[组件](https://github.com/benevbright/react-navigation-collapsible)，可以非常方便的绑定onscroll事件
- 上面的结论是单个列表的情况，下面讨论多个列表的情况
- 当考虑多个nested listview时，目前有react-navigation-collapsible和https://github.com/austenLacy/react-native-collapsible-header-with-tabs-demo/.
react-navigation-collapsible实现得相当完美，使用简洁。要写react-navigation的静态路由恐怕是他最大的缺点了。但是demo中还没有上拉下拉，而且在多tab的情况下，安卓会有严重的闪烁（也许这个连接可以解决这个闪烁问题：https://github.com/facebook/react-native/issues/15445#issuecomment-321721259）


