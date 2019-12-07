package com.dida.rn;


import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import com.navigationhybrid.ReactBridgeManager;

import androidx.appcompat.app.AppCompatActivity;

/**
 * Created by Listen on 2018/2/9.
 */

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ReactBridgeManager reactBridgeManager = ReactBridgeManager.get();
        boolean reactModuleRegisterCompleted = reactBridgeManager.isReactModuleRegisterCompleted();
        if (reactModuleRegisterCompleted) {
            new Handler().postDelayed(this::startMainActivity, 1500);
        } else {
            ReactBridgeManager.get().addReactModuleRegisterListener(new ReactBridgeManager.ReactModuleRegisterListener() {
                @Override
                public void onReactModuleRegisterCompleted() {
                    ReactBridgeManager.get().removeReactModuleRegisterListener(this);
                    startMainActivity();
                }
            });
        }
    }

    private void startMainActivity() {
        startActivity(new Intent(this, MainActivity.class));
        finish();
    }
}
