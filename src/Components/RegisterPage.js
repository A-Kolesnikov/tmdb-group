import React, { useState } from "react";
import RegisterStep1 from "./register/RegisterStep1";
import RegisterStep2 from "./register/RegisterStep2";
import RegisterStep3 from "./register/RegisterStep3";
import RegisterStep4 from "./register/RegisterStep4";

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => {
        setStep(step + 1);
    };

    const handleChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handleSubmit = () => {
        // Save to local storage here or in individual step depending on the requirement
        localStorage.setItem('userData', JSON.stringify(formData));
        nextStep();
    };

    switch (step) {
        case 1:
            return <RegisterStep1 nextStep={nextStep} handleChange={handleChange} values={formData} handleSubmit={handleSubmit} />;
        case 2:
            return <RegisterStep2 nextStep={nextStep} handleChange={handleChange} values={formData} handleSubmit={handleSubmit} />;
        case 3:
            return <RegisterStep3 nextStep={nextStep} handleChange={handleChange} values={formData} handleSubmit={handleSubmit} />;
        case 4:
            return <RegisterStep4 nextStep={nextStep} handleChange={handleChange} values={formData} handleSubmit={handleSubmit} />;
        default:
            return null;
    }
};

export default RegistrationForm;
