package lv.lu.df.combop.rest;


import ai.timefold.solver.core.api.score.analysis.ScoreAnalysis;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.constraint.Indictment;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.SolverManager;
import lv.lu.df.combop.domain.RoutingSolution;
import lv.lu.df.combop.solver.SimpleIndictmentObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/routes")
public class RoutingController {
    @Autowired
    private SolverManager<RoutingSolution, String> solverManager;
    @Autowired
    private SolutionManager<RoutingSolution, HardSoftScore> solutionManager;

    private static final Logger LOGGER = LoggerFactory.getLogger(RoutingController.class);

    private Map<String, RoutingSolution> solutionMap = new HashMap<>();

    @PostMapping("/solve")
    public void solve(@RequestBody RoutingSolution problem) {
        solverManager.solveAndListen(
                problem.getSolutionId(), id-> problem, solution -> {
                    solutionMap.put(solution.getSolutionId(), solution);
                }
        );
    }

    @GetMapping("/solution")
    public RoutingSolution solution(@RequestParam String id) {
        return solutionMap.getOrDefault(id, null);
    }

    @GetMapping("/list")
    public List<RoutingSolution> list() {
        return solutionMap.values().stream().toList();
    }

    @GetMapping("/score")
    public ScoreAnalysis<HardSoftScore> score(@RequestParam String id) {
        return solutionManager.analyze(solutionMap.get(id));
    }

    @GetMapping("/indictments")
    public List<SimpleIndictmentObject> indictments(@RequestParam String id) {
        return solutionManager.explain(solutionMap.getOrDefault(id, null)).getIndictmentMap().entrySet().stream()
                .map(entry -> {
                    Indictment<HardSoftScore> indictment = entry.getValue();
                    return
                            new SimpleIndictmentObject(entry.getKey(), // indicted Object
                                    indictment.getScore(),
                                    indictment.getConstraintMatchCount(),
                                    indictment.getConstraintMatchSet());
                }).collect(Collectors.toList());
    }

}