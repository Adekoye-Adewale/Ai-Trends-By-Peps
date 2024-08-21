import React from 'react'
import BackgroundVideo from 'next-video/background-video';
import meet from '../../../videos/meet.mp4';

export default function TestVid() {
        return (
                <>
                        {/* <Video src={meet} /> */}
                        <BackgroundVideo src={meet}>
                                <h1>next-video</h1>
                                <p>
                                        A React component for adding video to your Next.js application.
                                        It extends both the video element and your Next app with features
                                        for automatic video optimization.
                                </p>
                        </BackgroundVideo>
                </>
        )
}
