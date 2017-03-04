package com.example.user.simplesynthreview;

import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTrack;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;

/**
 * Created by user on 05/09/2016.
 */
public class MainActivity extends AppCompatActivity {

    Thread t;
    int sr = 44100;
    boolean isRunning = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // start a new Thread to synthesize audio
        t = new Thread() {
            @Override
            public void run() {
                // set process priority
                setPriority(Thread.MAX_PRIORITY);

                int buffsize = AudioTrack.getMinBufferSize(
                        sr,
                        AudioFormat.CHANNEL_OUT_MONO,
                        AudioFormat.ENCODING_PCM_16BIT
                );

                // create an AudioTrack object
                AudioTrack audioTrack = new AudioTrack(
                        AudioManager.STREAM_MUSIC,      // int streamType, accesses OS audio system to find option for streaming music (same as media players)
                        sr,                             // int sampleRateInHz,
                        AudioFormat.CHANNEL_OUT_MONO,   // int channelConfig,
                        AudioFormat.ENCODING_PCM_16BIT, // int audioFormat,
                        buffsize,                       // int bufferSizeInBytes,
                        AudioTrack.MODE_STREAM          // int mode, STATIC or STREAM, but we said STREAM in first argument
                );

                short samples[] = new short[buffsize];
                    // new array of size 'buffsize'
                    // of type short
                    // can we use int?
                    // no, must be short or byte
                int amp = 10000;
                    // why?
                double twopi = 8. * Math.atan(1.);
                    // fancy maths
                    // same as 3.14 * 2?
                    // same as Math.PI * 2?
                    //
                    // irb> 4.0 * Math.atan(1.0) == Math::PI
                    // => true
                    // so yeah

                double fr = 440.f;
                double ph = 0.0;

                // start audio
                audioTrack.play();

                while(isRunning){

                    for(int i = 0; i < buffsize; i++){
                        samples[i] = (short) ( amp * Math.sin(ph) );
                        ph += twopi * fr / sr;
                            // wait what??
//                        samples[i] = (short) (amp * Math.random() * 2 - 1);
                    }
                    audioTrack.write(samples, 0, buffsize);
                }

                audioTrack.stop();
                audioTrack.release();
            }
        };
        t.start();
    }

    @Override
    public void onDestroy(){
        super.onDestroy();
        isRunning = false;
        try{
            t.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        t = null;
    }



}
