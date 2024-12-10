'use client';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button } from "@nextui-org/react";
import connectImage from "../public/images/BUFFET_037 1.png";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export default function Connect() {
    return (

        <div className="flex lg:flex-row flex-col gap-2 w-full mb-32" >


            <div className="w-full ">


                <div className="shadow-sm rounded-3xl">
                    <Image
                        alt="Furniture image"

                        radius="lg"
                        src={connectImage.src}

                    />                </div>


            </div>
            <Card className="w-full shadow-sm rounded-3xl" style={{ backgroundColor: "#FFF3F9" }}  >
                <CardHeader className="flex gap-3">

                    <div className="flex flex-col">
                        <p className="lg:text-4xl text-2xl">S’inscrire & économiser  <span style={{
                            color: "#5CD2DD"
                        }} >10%</span> </p>
                        <p className="text-small text-default-500 mt-2">Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
                    </div>
                </CardHeader>

                <CardBody className="flex flex-row gap-3 "  >
                    <Input placeholder="john@doe.com" size="lg" height="60px" type="text" radius="sm" className="bg-white size-8 border-none  " variant="bordered" />

                    <Button style={{
                        backgroundColor: "#5CD2DD"
                    }}
                        size="lg" radius="sm" className="text-white h-14" endContent={<EastOutlinedIcon />}>S’inscrire</Button>
                </CardBody>


            </Card>

        </div >
    );
}
