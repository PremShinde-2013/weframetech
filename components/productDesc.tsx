/* eslint-disable prettier/prettier */
'use client';
import { Add } from '@mui/icons-material';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';

type Props = {};

const productDesc = (props: Props) => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className='flex lg:flex-row flex-col mt-20 mb-32'>

            <div className='lg:w-1/2 mr-4 ml-2 min-h-[300px]'>
                <h1 className='lg:text-2xl text-lg mr-2'>Description produit</h1>
                <h1 className='lg:text-base text-sm mt-5'>
                    Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d&apos;autre produit à louer de ce type dans la catégorie &quot;Art de la Table&quot;.
                </h1>
            </div>

            <div className='lg:w-1/2'>
                <Accordion className='bg-slate-50 rounded-lg'>
                    <AccordionItem key="1" aria-label="Livraisons" indicator={<Add />} title="Livraisons">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Questions" indicator={<Add />} title="Questions">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default productDesc;
