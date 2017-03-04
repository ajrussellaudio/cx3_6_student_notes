package com.example.user.canvasexample;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by user on 05/09/2016.
 */
public class CanvasExample extends AppCompatActivity {

    private CanvasView mCustomCanvas;
    private Button mClearCanvasButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mCustomCanvas = (CanvasView) findViewById(R.id.signature_canvas);
        mClearCanvasButton = (Button) findViewById(R.id.clear_button);

        mClearCanvasButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mCustomCanvas.clearCanvas();
            }
        });

    }

}
