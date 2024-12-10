/* eslint-disable padding-line-between-statements */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
'use client';
import React from 'react';



import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import furniture1 from "../public/images/Location Cheese big picture 1.png";
type Props = {};

const IntrestCards = (props: Props) => {

    const cardData = [
        { title: "Title 1", price: "0", chipText: "Art de la table", pieces: "20 pièces", ref: "RÉF : VABGN5" },
        { title: "Title 2", price: "0", chipText: "Art de la table", pieces: "30 pièces", ref: "RÉF : VABGN6" },
        { title: "Title 3", price: "0", chipText: "Art de la table", pieces: "40 pièces", ref: "RÉF : VABGN7" },
    ];
    return (
        <div className='flex flex-col mt-10 '>
            <div className="flex flex-row justify-between ">
                <h1 className="lg:text-3xl font-bold text-lg">Ces produits pourraient vous intéresser</h1>
                <h1 className="lg:text-lg text-base underline">
                    Voir toute la collection
                </h1>
            </div>

            <div className="flex lg:flex-row flex-col  mt-10 gap-4 mb-20">
                {cardData.map((card, index) => (
                    <Card key={index} className="py-4 bg-gray-50 shadow-none w-full">
                        <CardHeader className="pb-0 pt-2 px-4 justify-between flex-row ">
                            <Button isIconOnly aria-label="Like" variant="light">
                                <FavoriteBorderOutlinedIcon />
                            </Button>
                            <Chip className="bg-white" radius="sm">{card.chipText}</Chip>
                        </CardHeader>
                        <CardBody className="overflow-visible p-4 flex justify-center items-center">
                            <Image
                                alt={`Card background ${index + 1}`}
                                className="object-cover rounded-xl"
                                src={furniture1} // Replace with a dynamic image source if needed
                                width={270}
                                height={160}
                            />
                        </CardBody>
                        <CardFooter className="flex flex-col">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className="lg:text-xl text-base font-semibold">{card.title}</h1>
                                <h1 className="flex items-baseline lg:text-xl text-base font-semibold">
                                    {card.price}<sup>€</sup>
                                </h1>
                            </div>
                            <div className="w-full flex flex-row justify-between mt-4">
                                <h1 className="flex justify-start lg:text-sm">
                                    {card.price},35€/Pièce · {card.ref}
                                </h1>
                                <Chip className="bg-slate-100" radius="sm">{card.pieces}</Chip>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default IntrestCards;