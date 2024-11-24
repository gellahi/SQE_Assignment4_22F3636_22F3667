package com.automation.student22F3667.performance;

import org.apache.jmeter.engine.StandardJMeterEngine;
import org.apache.jmeter.testelement.TestPlan;
import org.apache.jmeter.threads.ThreadGroup;
import org.apache.jmeter.util.JMeterUtils;
import org.apache.jorphan.collections.HashTree;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.File;

public class BookLoadTestRunner {
    private final BookLoadTest bookLoadTest = new BookLoadTest();

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

        TestPlan testPlan = new TestPlan("Book Load Test Plan");
        ThreadGroup threadGroup = bookLoadTest.createThreadGroup();

        HashTree testPlanTree = new HashTree();
        HashTree threadGroupTree = testPlanTree.add(testPlan, threadGroup);

        threadGroupTree.add(threadGroup, bookLoadTest.createGetBooksSampler());
        threadGroupTree.add(threadGroup, bookLoadTest.createHeaderManager());
        threadGroupTree.add(threadGroup, bookLoadTest.createTimer());

        engine.configure(testPlanTree);
        engine.run();
    }
}