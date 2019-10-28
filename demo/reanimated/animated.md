### Animated合成动画
- add 相加
- subtract 相减
- multiply 相乘
- divide 取商
- module 取模

- stagger 一个动画数组，里面的动画有可能会同时执行（重叠），不过会以指定的延迟来开始。适用于制作拖尾效果。
- diffClamp // 返回一个介于min和max之间动画值
```
Create a new Animated value that is limited between 2 values. It uses the difference between the last value so even if the value is far from the bounds it will start changing when the value starts getting closer again. (value = clamp(value + diff, min, max)).
            
This is useful with scroll events, for example, to show the navbar when scrolling up and to hide it when scrolling down
创建一个限制在2个值之间的新动画值。它使用最后一个值之间的差值，因此即使该值远离边界，它也会在值开始再次接近时开始变化。（value = clamp(value + diff, min, max)）。

这对于滚动事件很有用，例如，在向上滚动时显示导航栏并在向下滚动时隐藏它。

// 对`diffClamp`的讲解
https://medium.com/@andi.gu.ca/a-collapsing-navbar-with-tabs-in-react-native-e80790588830
https://medium.com/appandflow/react-native-collapsible-navbar-e51a049b560a
```
            
- forkEvent 
```
Advanced imperative API for snooping on animated events that are passed in through props. It permits to add a new javascript listener to an existing AnimatedEvent. 
If animatedEvent is a simple javascript listener, it will merge the 2 listeners into a single one, and if animatedEvent is null/undefined, it will assign the javascript listener directly. Use values directly where possible.
```


### scrollview解析
http://blog.voyz.vip/2019/07/10/RN-scrollview触摸滚动事件/
