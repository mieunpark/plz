package com.acorn;

import com.facebook.react.ReactActivity;

import android.os.Bundle;//navigation 6.x version

public class MainActivity extends ReactActivity {

  @Override//navigation 6.x version
  protected void onCreate(Bundle savedInstanceState) {//navigation 6.x version
    super.onCreate(null);//navigation 6.x version
  }//navigation 6.x version
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "acorn";
  }
}
