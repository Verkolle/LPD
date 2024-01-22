<?xml version="1.0" encoding="UTF-8"?>
<plannerBenchmark xmlns="https://timefold.ai/xsd/benchmark" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="https://timefold.ai/xsd/benchmark https://timefold.ai/xsd/benchmark/benchmark.xsd">
    <benchmarkDirectory>local/benchmarkReport</benchmarkDirectory>


    <inheritedSolverBenchmark>
        <solver>
            <environmentMode>REPRODUCIBLE</environmentMode>
            <!-- Define the model -->
            <solutionClass>lv.lu.df.combop.domain.RoutingSolution</solutionClass>
            <entityClass>lv.lu.df.combop.domain.Vehicle</entityClass>
            <entityClass>lv.lu.df.combop.domain.Visit</entityClass>

            <!-- Define the score function -->
            <scoreDirectorFactory>
                <constraintProviderClass>lv.lu.df.combop.solver.StreamCalculator</constraintProviderClass>
            </scoreDirectorFactory>

            <!-- Configure the optimization algorithms (optional) -->
            <termination>
                <secondsSpentLimit>10</secondsSpentLimit>
            </termination>

            <constructionHeuristic />
        </solver>
        <problemBenchmarks>
            <solutionFileIOClass>lv.lu.df.combop.domain.RoutingSolutionJsonIO</solutionFileIOClass>
            <writeOutputSolutionEnabled>true</writeOutputSolutionEnabled>
            <inputSolutionFile>data/classExample_0_5.json</inputSolutionFile>
            <inputSolutionFile>data/classExample_1_10.json</inputSolutionFile>
            <inputSolutionFile>data/classExample_2_25.json</inputSolutionFile>
            <inputSolutionFile>data/classExample_3_50.json</inputSolutionFile>
            <inputSolutionFile>data/classExample_4_100.json</inputSolutionFile>
            <inputSolutionFile>data/classExample_5_200.json</inputSolutionFile>
        </problemBenchmarks>
    </inheritedSolverBenchmark>

    <#list [5, 10, 15, 20] as entityTabuSize>
    <#list [250, 500, 1000, 2000] as acceptedCountLimit>
    <solverBenchmark>
        <name>Tabu ${entityTabuSize} ${acceptedCountLimit}</name>
        <solver>
            <localSearch>
                <unionMoveSelector>
                    <subListChangeMoveSelector />
                    <listChangeMoveSelector />
                    <listSwapMoveSelector />
                </unionMoveSelector>
                <acceptor>
                    <valueTabuSize>${entityTabuSize}</valueTabuSize>
                </acceptor>
                <forager>
                    <acceptedCountLimit>${acceptedCountLimit}</acceptedCountLimit>
                </forager>
            </localSearch>
        </solver>
    </solverBenchmark>
    </#list>
    </#list>
</plannerBenchmark>