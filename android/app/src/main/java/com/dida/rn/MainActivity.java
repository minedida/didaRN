package com.dida.rn;

import android.content.res.Configuration;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import org.devio.rn.splashscreen.SplashScreen;


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
        //if (application.theme != 0)
        //    setTheme(application.theme);

        //if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        //    Window window = getWindow();
        //    View decorView = window.getDecorView();
        //    decorView.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
        //        @TargetApi(Build.VERSION_CODES.KITKAT_WATCH)
        //        @Override
        //        public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
        //            WindowInsets defaultInsets = v.onApplyWindowInsets(insets);
        //            return defaultInsets.replaceSystemWindowInsets(
        //                    defaultInsets.getSystemWindowInsetLeft(),
        //                    0,
        //                    defaultInsets.getSystemWindowInsetRight(),
        //                    defaultInsets.getSystemWindowInsetBottom());
        //        }
        //    });
        //    //ViewCompat.requestApplyInsets(decorView);
        //    //将状态栏设成透明，如不想透明可设置其他颜色
        //    window.setStatusBarColor(ContextCompat.getColor(this, android.R.color.transparent));
        //
        //}


        //setContentView(R.layout.launch_screen);
        SplashScreen.show(this, R.style.SplashScreenTheme);
        //SplashScreen.show(this, true);
        super.onCreate(savedInstanceState);
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
