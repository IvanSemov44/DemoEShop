import { ReactElement, useState } from "react";

export function useMultiStepFormSecond(steps: ReactElement[]) {
  const [currectStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((i) => {
      if (i >= steps.length) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStep(index);
  }

  return {
    currectStep,
    step: steps[currectStep],
    steps,
    isFirstStep: currectStep === 0,
    isLastStep: currectStep === steps.length - 1,
    goTo,
    next,
    back,
  };
}
