import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterStep1 } from "./register/RegisterStep1";
import { RegisterStep2 } from "./register/RegisterStep2";
import { RegisterStep3 } from "./register/RegisterStep3";
import { RegisterStep4 } from "./register/RegisterStep4";
import { allData, updStorage } from '../Service/LocalStorageManager';

const steps = {
    1: RegisterStep1,
    2: RegisterStep2,
    3: RegisterStep3,
    4: RegisterStep4,
};

const RegisterPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const nextStep = () => {
        setStep(step + 1);

        if (step === 4) { // After the last step
            // Get the current data from localStorage
            let data = allData();

            // Prepare the new user object
            let newUser = {
                id: data.users.length + 1,
                username: formData.username,
                password: formData.password,
                favLang: formData.favLang,
                favGenre: formData.favGenre,
                voice: formData.voice,
                favGallery: Number(formData.gallery), // Save as a number
                viewedMovies: []
            };

            // Add the new user to the users array
            data.users.push(newUser);

            // Set this user as the loggedUser
            data.loggedUser = newUser.id;

            // Save the updated data back to localStorage
            updStorage(data);

            // Redirect to the user page
            navigate("/user/:id");
        }
    };

    const Step = steps[step];

    return (
        <Step 
            formData={formData} 
            setFormData={setFormData} 
            navigation={{ next: nextStep }}
        />
    );
};

export default RegisterPage;