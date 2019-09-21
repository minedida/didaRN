package com.dida.rn;

import android.app.Application;
import android.webkit.WebView;

import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;
import com.bolan9999.SpringScrollViewPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.dida.rn.generated.BasePackageList;
import com.dida.rn.plugin.update.UpgradePackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactcommunity.rnlocalize.RNLocalizePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.wix.autogrowtextinput.AutoGrowTextInputPackage;
import com.wix.reactnativekeyboardinput.KeyboardInputPackage;

import org.devio.rn.splashscreen.SplashScreenReactPackage;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.SingletonModule;

import java.util.Arrays;
import java.util.List;

import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import io.sentry.RNSentryPackage;
import me.listenzz.modal.TranslucentModalReactPackage;

//import com.syanpicker.RNSyanImagePickerPackage;
//import com.dida.rn.plugin.theme.ThemePackage;

public class MainApplication extends Application implements ReactApplication, ShareApplication {
    public int theme = R.style.BlueTheme;
    private final ReactModuleRegistryProvider mModuleRegistryProvider =
            new ReactModuleRegistryProvider(new BasePackageList().getPackageList(), Arrays.<SingletonModule>asList());
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            @SuppressWarnings("UnnecessaryLocalVariable")
            List<ReactPackage> packages = new PackageList(this).getPackages();
            //packages.add(new MainReactPackage());
            packages.add(new RNScreensPackage());
            packages.add(new ModuleRegistryAdapter(mModuleRegistryProvider));
            packages.add(new RNSentryPackage());
            packages.add(new RNDeviceInfo());
            packages.add(new RNLocalizePackage());
            packages.add(new RNSharePackage());
            packages.add(new ReactNativeDialogsPackage());
            packages.add(new SpringScrollViewPackage());
            packages.add(new BlurViewPackage());
            packages.add(new RNGestureHandlerPackage());
            packages.add(new ReanimatedPackage());
            packages.add(new RNCWebViewPackage());
            packages.add(new TranslucentModalReactPackage());
            packages.add(new SplashScreenReactPackage());
            packages.add(new ExtraDimensionsPackage());
            packages.add(new VectorIconsPackage());
            packages.add(new KeyboardInputPackage(MainApplication.this));
            packages.add(new AutoGrowTextInputPackage());
            packages.add(new UpgradePackage());
            return packages;
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);

        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);

    }

    @Override
    public String getFileProviderAuthority() {
        return "com.dida.rn.file.provider";
    }

}
