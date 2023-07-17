import React, { useState } from "react";
import { RegisterStep1 } from "./register/RegisterStep1";
import { RegisterStep2 } from "./register/RegisterStep2";
import { RegisterStep3 } from "./register/RegisterStep3";
import { RegisterStep4 } from "./register/RegisterStep4";

const steps = {
    1: RegisterStep1,
    2: RegisterStep2,
    3: RegisterStep3,
    4: RegisterStep4,
};

const RegisterPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => {
        setStep(step + 1);
    };

    const Step = steps[step];

    if (!Step) {
        return <p>Registration complete!</p>; // or any other component / redirect action
    }

    return (
        <Step 
            formData={formData} 
            setFormData={setFormData} 
            navigation={{ next: nextStep }}
        />
    );
};

export default RegisterPage;
