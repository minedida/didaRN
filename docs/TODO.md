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
- 1.~~抽屉打开后背景太黑了~~
- 2.`autogrow-textinput`和`keyboard-view`，这两个库出现的问题
    - 安卓上为什么点击button就crash？，这块和升级RN没什么关系才对啊
    - iOS上除了podspec外，RN060还移除了一些API如UIViewManager，这个API还在这两个库上使用着，需要升级这些api
- 3.完善todo-item


### 2019/10/27
- ~~重构demo部分的路由，保证应用只有一个AppContainer，方便demo部分后续扩展~~
- 重构demo部分内容，有选择性的放置文件目录/层级，大致分类：UI相关、重要依赖相关、动效相关、测试相关。ui和依赖库大都有example/，直接拷贝过来，达到查看效果的目的即可
- 继续探索已有依赖库的能力。
- 升级依赖后，对应库的`DefinitelyTyped`还未更新。
- 3.完善todo-item

### 2019/11/3
- 处理Android的虚拟导航栏的黑色区域
- 尝试增加更多的错误收集工具在trello中有记录
- 处理nested-navigator返回不正确的问题
