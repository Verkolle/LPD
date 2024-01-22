package lv.lu.df.combop;

import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.solver.EnvironmentMode;
import ai.timefold.solver.core.config.solver.SolverConfig;
import ai.timefold.solver.core.config.solver.termination.TerminationConfig;

import lv.lu.df.combop.domain.*;

import lv.lu.df.combop.solver.StreamCalculator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class Main {
    private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        System.out.println("Hello world!");
        LOGGER.info("Hello world from Logger!");
        LOGGER.debug("Hello world from Logger debug!");

        RoutingSolution problem = RoutingSolution.generateData(100);
        problem.print();

        SolverFactory<RoutingSolution> solverFactoryFromXML = SolverFactory
                .createFromXmlResource("SolverConfig.xml");

        SolverFactory<RoutingSolution> solverFactory = SolverFactory.create(
                new SolverConfig()
                        .withSolutionClass(RoutingSolution.class)
                        .withEntityClasses(Vehicle.class, Visit.class)
                        .withConstraintProviderClass(StreamCalculator.class)
                        .withTerminationConfig(new TerminationConfig()
                                .withSecondsSpentLimit(10L))
                        .withEnvironmentMode(EnvironmentMode.FULL_ASSERT)
        );

        Solver<RoutingSolution> solver = solverFactoryFromXML.buildSolver();
        RoutingSolution solution = solver.solve(problem);

        SolutionManager<RoutingSolution, HardSoftScore> solutionManager = SolutionManager.create(solverFactory);
        ScoreExplanation<RoutingSolution, HardSoftScore> scoreExplanation = solutionManager.explain(solution);
        LOGGER.info(scoreExplanation.getSummary());

        solution.print();
    }
}
