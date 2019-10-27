### 发布应用时注意
- 1. 移除Child.tsx
- 2. 将`enableSeparateBuildPerCPUArchitecture`置为true

### 对源码对hook
- 1.`"react-native-screens": "^2.0.0-alpha.6"`开始，适配了iOS13，源码中有不少相关代码。貌似是因为我的XCode还没有升级对缘故，自带的Api都会报错导致编译失败。暂时注释了该代码保证允许。
位置: `react-native-screens/ios/RNSScreenStackHeaderConfig.m#L195`
