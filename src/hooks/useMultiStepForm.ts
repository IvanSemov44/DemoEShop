import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currectStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currectStepIndex,
    step: steps[currectStepIndex],
    steps,
    isFirstStep: currectStepIndex === 0,
    isLastStep:currectStepIndex === steps.length-1,
    goTo,
    next,
    back,
  };
}
