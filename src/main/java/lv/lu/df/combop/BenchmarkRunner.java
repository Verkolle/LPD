package lv.lu.df.combop;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import lv.lu.df.combop.domain.RoutingSolution;
import lv.lu.df.combop.domain.RoutingSolutionJsonIO;

import java.io.File;

public class BenchmarkRunner {
    public static void main(String[] args) {
//        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory
//                .createFromSolverConfigXmlResource("SolverConfig.xml");
//
//        PlannerBenchmarkFactory benchmarkFactoryFromXML = PlannerBenchmarkFactory
//                .createFromXmlResource("BenchmarkConfig.xml");


//        PlannerBenchmarkFactory plannerBenchmarkTemplateFactoryFromXML = PlannerBenchmarkFactory
//                .createFromFreemarkerXmlResource("BenchmarkConfigTabu.xml.ftl");
//        PlannerBenchmarkFactory plannerBenchmarkTemplateFactoryFromXML = PlannerBenchmarkFactory
//                .createFromFreemarkerXmlResource("BenchmarkConfigSA.xml.ftl");
        PlannerBenchmarkFactory plannerBenchmarkTemplateFactoryFromXML = PlannerBenchmarkFactory
                .createFromFreemarkerXmlResource("BenchmarkConfigLAHC.xml.ftl");

//        RoutingSolutionJsonIO routingSolutionJsonIO = new RoutingSolutionJsonIO();
//        routingSolutionJsonIO.write(RoutingSolution.generateData(5), new File("data/classExample_0_5.json"));
//        routingSolutionJsonIO.write(RoutingSolution.generateData(10), new File("data/classExample_1_10.json"));
//        routingSolutionJsonIO.write(RoutingSolution.generateData(25), new File("data/classExample_2_25.json"));
//        routingSolutionJsonIO.write(RoutingSolution.generateData(50), new File("data/classExample_3_50.json"));
//        routingSolutionJsonIO.write(RoutingSolution.generateData(100), new File("data/classExample_4_100.json"));
//        routingSolutionJsonIO.write(RoutingSolution.generateData(200), new File("data/classExample_5_200.json"));

//        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark();
        PlannerBenchmark benchmark = plannerBenchmarkTemplateFactoryFromXML.buildPlannerBenchmark();
        benchmark.benchmarkAndShowReportInBrowser();

    }
}
