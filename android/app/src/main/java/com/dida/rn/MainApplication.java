package com.dida.rn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import cl.json.RNSharePackage;
import com.syanpicker.RNSyanImagePickerPackage;
import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;
import com.bolan9999.SpringScrollViewPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import me.listenzz.modal.TranslucentModalReactPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.wix.reactnativekeyboardinput.KeyboardInputPackage;
import com.wix.autogrowtextinput.AutoGrowTextInputPackage;

import java.util.Arrays;
import java.util.List;
import cl.json.ShareApplication;

public class MainApplication extends Application implements ReactApplication, ShareApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSharePackage(),
          new RNSyanImagePickerPackage(),
          new ReactNativeDialogsPackage(),
          new SpringScrollViewPackage(),
          new BlurViewPackage(),
          new RNGestureHandlerPackage(),
          new ReanimatedPackage(),
          new RNCWebViewPackage(),
          new TranslucentModalReactPackage(),
          new SplashScreenReactPackage(),
          new ExtraDimensionsPackage(),
          new VectorIconsPackage(),
          new KeyboardInputPackage(MainApplication.this),
          new AutoGrowTextInputPackage()
      );
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
  }

  @Override
   public String getFileProviderAuthority() {
      return BuildConfig.APPLICATION_ID + ".share.provider";
   }

}
