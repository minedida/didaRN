package com.dida.rn;

import android.content.res.Configuration;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "dida";
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        MainApplication application = (MainApplication) getApplication();

        //setContentView(R.layout.launch_screen);
        //SplashScreen.show(this, R.style.SplashScreenTheme);// 此时只能自定义`statusBarColor`为白色来遮掩，不能解决根本问题
        //SplashScreen.show(this, true); // 如果单纯的设置为`true`全屏的话，状态栏会有灰条。
        //SplashScreen.show(this); // 如果普通的使用一下，状态栏会有黑条。
        super.onCreate(savedInstanceState);
        Util.adapt(this);
        RNBootSplash.show(R.drawable.bootsplash, MainActivity.this);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
