/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
'use client';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./Carousal";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import furniture1 from "../public/images/Location Cheese big picture 1.png";

export function SimilarArticles() {
    return (

        <div className="flex flex-col justify-center  mt-20 mb-32" >

            <div className="flex flex-row justify-between ">
                <h1 className="lg:text-3xl font-bold text-lg">Articles similaires</h1>
                <h1 className="lg:text-lg text-base underline">
                    Voir toute la collection
                </h1>
            </div>

            <div className="mt-10 flex justify-center   ">


                <Carousel
                    opts={{
                        align: "start",

                    }}
                    className="w-full flex justify-center lg:max-w-[1420px] md:max-w-[600px] sm:max-w-[300px]  "
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card className="py-4 bg-gray-50  shadow-none  ">
                                        <CardHeader className="pb-0 pt-2 px-4 justify-between flex-row ">
                                            <Button isIconOnly aria-label="Like" variant="light">
                                                <FavoriteBorderOutlinedIcon />
                                            </Button>
                                            <Chip className="bg-white" radius="sm">Art de la table</Chip>
                                        </CardHeader>
                                        <CardBody className="overflow-visible p-4">
                                            <Image
                                                alt="Card background"
                                                className="object-cover rounded-xl"
                                                src={furniture1}
                                                width={270}
                                                height={160}
                                            />
                                        </CardBody>
                                        <CardFooter className="flex flex-col">
                                            <div className="flex flex-row justify-between items-center w-full">


                                                <h1 className="lg:text-xl text-base font-semibold">Title</h1>



                                                <h1 className="flex items-baseline lg:text-xl text-base font-semibold">
                                                    0<sup>€</sup>
                                                </h1>

                                            </div>
                                            <div className="w-full flex flex-row justify-between mt-4" >
                                                <h1 className="flex justify-start lg:text-sm  ">
                                                    0,35€/Pièce · RÉF : VABGN5
                                                </h1>
                                                <Chip className="bg-slate-100" radius="sm">20 pièces</Chip>



                                            </div>
                                        </CardFooter>

                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent  ><div className="hidden sm:flex">
                        <CarouselPrevious style={{ backgroundColor: "#5CD2DD", color: "white" }} />
                        <CarouselNext style={{ backgroundColor: "#5CD2DD", color: "white" }} />
                    </div>
                </Carousel>
            </div>
        </div>

    );
}
