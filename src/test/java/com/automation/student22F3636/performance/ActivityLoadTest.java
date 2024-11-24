package com.automation.student22F3636.performance;

import com.automation.config.ApiConfig;
import org.apache.jmeter.protocol.http.control.HeaderManager;
import org.apache.jmeter.protocol.http.sampler.HTTPSampler;
import org.apache.jmeter.threads.ThreadGroup;
import org.apache.jmeter.timers.ConstantTimer;

public class ActivityLoadTest {
    private static final String BASE_URL = ApiConfig.BASE_URL;

    public ThreadGroup createThreadGroup() {
        ThreadGroup threadGroup = new ThreadGroup();
        threadGroup.setNumThreads(100); // Number of users
        threadGroup.setRampUp(10); // Ramp-up period in seconds
        threadGroup.setDuration(60); // Test duration in seconds
        return threadGroup;
    }

    public HTTPSampler createGetActivitiesSampler() {
        HTTPSampler sampler = new HTTPSampler();
        sampler.setDomain("fakerestapi.azurewebsites.net");
        sampler.setPath("/api/v1/Activities");
        sampler.setMethod("GET");
        sampler.setProtocol("https");
        return sampler;
    }

    public HeaderManager createHeaderManager() {
        HeaderManager headerManager = new HeaderManager();
        headerManager.add();
        return headerManager;
    }

    public ConstantTimer createTimer() {
        ConstantTimer timer = new ConstantTimer();
        timer.setDelay("1000"); // 1 second delay between requests
        return timer;
    }
}