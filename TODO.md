### 2019/09/08
- ~~使用`react-native-stack`修改安卓的过度动画为安卓9效果~~
- 使用`papers`修改安卓bottom-tab的点击效果
    - 这个`'react-navigation-material-bottom-tabs'`能力实在有点弱，taboptions对象必须展开来用
    - 开发到目前tab动态化到功能竟然失效了
    - 这个玩意想要用好还是得自己写。
    - ~~不需要shifting效果，最起码有顶部到阴影即可~~
- ~~使用`react-navigation`实现drawer，~~主要是为了保证cached view in drawerstack
- 完善todo-item

---

### 2019/09/14
- 重构drawer，保证cache
- ~~升级RN060~~
- 完善todo-item

### 2019/09/22
- 解决upgrade RN060带来的bug
- 1.抽屉打开后背景太黑了
- 2.`autogrow-textinput`和`keyboard-view`，这两个库出现的问题
    - 安卓上为什么点击button就crash？，这块和升级RN没什么关系才对啊
    - iOS上除了podspec外，RN060还移除了一些API如UIViewManager，这个API还在这两个库上使用着，需要升级这些api
- 3.完善todo-item
