package com.automation.student22F3636.performance;

import org.apache.jmeter.engine.StandardJMeterEngine;
import org.apache.jmeter.testelement.TestPlan;
import org.apache.jmeter.threads.ThreadGroup;
import org.apache.jmeter.util.JMeterUtils;
import org.apache.jorphan.collections.HashTree;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.File;

public class ActivityLoadTestRunner {
    private final ActivityLoadTest activityLoadTest = new ActivityLoadTest();

    @BeforeTest
    public void setupJMeter() {
        // Set JMeter Home directory (use project root as JMeter home)
        File jmeterHome = new File(System.getProperty("user.dir"));
        String slash = System.getProperty("file.separator");

        // Initialize JMeter
        JMeterUtils.setJMeterHome(jmeterHome.getPath());
        JMeterUtils.loadJMeterProperties(jmeterHome.getPath() + slash + "jmeter.properties");
        JMeterUtils.initLocale();
    }

    @Test
    public void runLoadTest() {
        StandardJMeterEngine engine = new StandardJMeterEngine();

        TestPlan testPlan = new TestPlan("Activity Load Test Plan");
        ThreadGroup threadGroup = activityLoadTest.createThreadGroup();

        HashTree testPlanTree = new HashTree();
        HashTree threadGroupTree = testPlanTree.add(testPlan, threadGroup);

        threadGroupTree.add(threadGroup, activityLoadTest.createGetActivitiesSampler());
        threadGroupTree.add(threadGroup, activityLoadTest.createHeaderManager());
        threadGroupTree.add(threadGroup, activityLoadTest.createTimer());

        engine.configure(testPlanTree);
        engine.run();
    }
}