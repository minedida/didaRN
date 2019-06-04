package com.dida_rn;

import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "dida_RN";
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
            // View decorView = getWindow().getDecorView();
            //         int uiOptions = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            //                 | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            //                 | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            //                 | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
            //                 | View.SYSTEM_UI_FLAG_IMMERSIVE;
            //         decorView.setSystemUiVisibility(uiOptions);
            //         getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
    }
}
