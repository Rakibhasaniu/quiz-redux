import React, { ReactNode } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
 
type TSteps ={
    steps:{
        value: number;
        name:string;
        component: ReactNode;

    }[]
}
export function DefaultStepper({steps}:TSteps) {
    const {activeStep} = useAppSelector((state) => state.stepper)
    const dispatch = useAppDispatch();
  return (
    <div className="w-full py-4 px-8">
      <Stepper
      placeholder={""}
        activeStep={activeStep}
        
      >
        <Step placeholder={""}
 onClick={() => dispatch(setActiveStepper(0))} className="w-fit px-8">Quiz List</Step>
        <Step placeholder={""} onClick={() => dispatch(setActiveStep(1))}
        className="w-fit px-8"
        >Add Quiz</Step>
        
      </Stepper>
       
    </div>
  );
}