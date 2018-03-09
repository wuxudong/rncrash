package com.rncrash;

import android.view.ViewGroup;
import android.widget.TextView;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.ArrayList;
import java.util.List;

public class DummyManager extends SimpleViewManager<TextView> {

    @Override
    public String getName() {
        return "RNTypes";
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        TextView textView = new TextView(reactContext);
        return textView;
    }

    @ReactProp(name = "data")
    public void setData(TextView textView, ReadableArray data) {
        if (data.size() > 0) {
            textView.setText(data.getType(0).toString());
        }
    }

}
