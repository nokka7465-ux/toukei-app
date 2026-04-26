import type { DiagramKind } from "@/types/content";
import { NormalCurve } from "./NormalCurve";
import { NormalRejectionRegion } from "./NormalRejectionRegion";
import { HistogramVsBar } from "./HistogramVsBar";
import { ScatterRegression } from "./ScatterRegression";
import { RocCurve } from "./RocCurve";
import { BiasVariance } from "./BiasVariance";
import { CltConvergence } from "./CltConvergence";
import { BinomialShape } from "./BinomialShape";
import { BoxplotAnatomy } from "./BoxplotAnatomy";
import { ConfidenceInterval } from "./ConfidenceInterval";
import { TvsNormal } from "./TvsNormal";
import { TypeIIIErrors } from "./TypeIIIErrors";
import { BayesUpdate } from "./BayesUpdate";
import { LearningCurve } from "./LearningCurve";
import { LikelihoodMle } from "./LikelihoodMle";
import { PValueArea } from "./PValueArea";
import { AcfPlot } from "./AcfPlot";
import { TimeSeriesDecomposition } from "./TimeSeriesDecomposition";
import { PcaAxes } from "./PcaAxes";
import { McmcTrace } from "./McmcTrace";
import { SurvivalKm } from "./SurvivalKm";
import { ChiSquaredDistribution } from "./ChiSquaredDistribution";
import { AnovaFDistribution } from "./AnovaFDistribution";
import { RandomWalk } from "./RandomWalk";
import { ActivationFunctions } from "./ActivationFunctions";
import { GradientDescentPaths } from "./GradientDescentPaths";
import { CnnArchitecture } from "./CnnArchitecture";
import { ControlChart } from "./ControlChart";
import { OcCurve } from "./OcCurve";

const REGISTRY: Record<DiagramKind, () => React.ReactElement> = {
  "normal-curve": NormalCurve,
  "normal-rejection-region": NormalRejectionRegion,
  "histogram-vs-bar": HistogramVsBar,
  "scatter-regression": ScatterRegression,
  "roc-curve": RocCurve,
  "bias-variance": BiasVariance,
  "clt-convergence": CltConvergence,
  "binomial-shape": BinomialShape,
  "boxplot-anatomy": BoxplotAnatomy,
  "confidence-interval": ConfidenceInterval,
  "t-vs-normal": TvsNormal,
  "type-i-ii-errors": TypeIIIErrors,
  "bayes-update": BayesUpdate,
  "learning-curve": LearningCurve,
  "likelihood-mle": LikelihoodMle,
  "p-value-area": PValueArea,
  "acf-plot": AcfPlot,
  "time-series-decomposition": TimeSeriesDecomposition,
  "pca-axes": PcaAxes,
  "mcmc-trace": McmcTrace,
  "survival-km": SurvivalKm,
  "chi-squared-distribution": ChiSquaredDistribution,
  "anova-f-distribution": AnovaFDistribution,
  "random-walk": RandomWalk,
  "activation-functions": ActivationFunctions,
  "gradient-descent-paths": GradientDescentPaths,
  "cnn-architecture": CnnArchitecture,
  "control-chart": ControlChart,
  "oc-curve": OcCurve,
};

export function Diagram({
  kind,
  caption,
}: {
  kind: DiagramKind;
  caption?: string;
}) {
  const Component = REGISTRY[kind];
  if (!Component) return null;
  return (
    <figure className="my-6 paper rounded-lg p-4 not-prose">
      <div className="flex justify-center">
        <Component />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-center text-[var(--muted)] ui-sans">
          図: {caption}
        </figcaption>
      )}
    </figure>
  );
}
