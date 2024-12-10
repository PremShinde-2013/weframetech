'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Image from 'next/image'; // Import Next.js Image component

// Import images
import step1 from '../public/images/Groupe_25.png';
import step2 from '../public/images/dish.png';
import step3 from '../public/images/Groupe_56.png';
import step4 from '../public/images/Groupe_123.png';

const steps = [
    { sublabel: 'Selon vos besoins', label: 'Livraison & Reprise', icon: step1 },
    { sublabel: 'Selon vos besoins', label: 'Nettoyage', icon: step2 },
    { sublabel: 'Tout est possible', label: 'Commande Illimitée', icon: step3 },
    { sublabel: 'On s’occupe de tout.', label: 'Transport & Enlèvement', icon: step4 }, // Added an additional step for four images
];

export default function Banner() {

    return (




        <div
            style={{
                background: "linear-gradient(180deg, rgba(238, 65, 151, 0.067) 0%, rgba(255, 255, 255, 1) 100%)",

                marginTop: "80px",
                marginBottom: "180px"
            }}
        >
            <div className='flex justify-center items-center flex-col  ' >
                <h1 className='lg:text-4xl text-2xl mt-32
                ' >On s’occupe de <span style={{
                        color: "#5CD2DD"
                    }} >tout</span> </h1>
                <h1 className='lg:text-base text-sm flex justify-center text-center ' >Office ipsum you must be muted. It meeting commitment busy pain.</h1>
            </div>

            <div className='flex justify-center mt-20'>



                <Box sx={{ width: '100%', overflow: "hidden" }}>
                    <Stepper activeStep={4} alternativeLabel >
                        {steps.map((step, index) => (
                            <Step key={step.label} className=''>
                                <StepLabel
                                    StepIconComponent={() => (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                            <Image
                                                src={step.icon}
                                                alt={`Step ${index + 1}`}
                                                width={50}
                                                height={50}
                                                className='sm:w-10 sm:h-10'

                                            />
                                        </Box>
                                    )}
                                >
                                    <h1 className='lg:text-2xl text-base font-medium mt-10' >
                                        {step.label}
                                    </h1>
                                    <h1 className='lg:text-lg text-xm' >
                                        {step.sublabel}
                                    </h1>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

            </div>


        </div>
    );
}
