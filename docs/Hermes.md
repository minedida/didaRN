# Hermes
> [what is hermes](https://facebook.github.io/react-native/docs/hermes/)  
only run with android application
### hermes带来的好处：
- 显著提升安卓应用(release)冷启动速度。
### hermes带来的问题：
- hermes跑的太快，一些需要和native交互的代码还来不及执行，此时可能会发生上下文相关报错。[smt like](https://github.com/kmagiera/react-native-gesture-handler/issues/320)
- 由于hermes是一个JS引擎，在chrome上还不能完全实现对应的功能，所以RN项目在debug在chrome上的JS运行时和release包在Android设备上的JS运行时不相同。  
这部分带来的差异总是难以发觉。
- [Known issues with Hermes](https://github.com/microsoft/vscode-react-native/issues/1099)、[crash list when enabled Hermes ](https://github.com/facebook/react-native/issues/25601)


