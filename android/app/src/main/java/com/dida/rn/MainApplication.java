package com.dida.rn;

import android.app.Application;
import android.content.Context;
import android.webkit.WebView;

import com.dida.rn.generated.BasePackageList;
import com.dida.rn.plugin.update.UpgradePackage;
import com.facebook.common.logging.FLog;
import com.facebook.drawee.view.DraweeView;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.navigationhybrid.NavigationHybridPackage;
import com.navigationhybrid.ReactBridgeManager;
import com.wix.reactnativekeyboardinput.KeyboardInputPackage;

import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.SingletonModule;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
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
            List<ReactPackage> packages = Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new NavigationHybridPackage(),
                    new UpgradePackage(),
                    new KeyboardInputPackage(MainApplication.this),
                    new ModuleRegistryAdapter(mModuleRegistryProvider)
            );

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
        initializeFlipper(this); // Remove this line if you don't want Flipper enabled

        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);

        ReactBridgeManager bridgeManager = ReactBridgeManager.get();
        bridgeManager.install(getReactNativeHost());

        DraweeView.setGlobalLegacyVisibilityHandlingEnabled(true);
        FLog.setMinimumLoggingLevel(FLog.INFO);

    }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
