/* eslint-disable prettier/prettier */
import React, { Key, useState } from "react";
import { Card, CardBody, Tabs, Tab, Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import productImage1 from "../public/images/Location Cheese big picture 1.png";
import measure1 from "../public/images/measure1.png";
import measure2 from "../public/images/measure2.png";
import { Add, RemoveOutlined } from "@mui/icons-material";

interface ProductCardProps {
    title: string;
    price: string;
    reference: string;
    dimensions: string;
    description: string;
    power: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    price,
    reference,
    dimensions,
    description,
    power,
}) => {
    const [selected, setSelected] = useState<string>("photos");
    const [selectedImage, setSelectedImage] = useState(productImage1); // Default image

    // Function to handle tab change and update image
    const handleTabChange = (key: Key) => {
        setSelected(key as string); // Cast key to string
        if (key === "image1") {
            setSelectedImage(productImage1);
        } else if (key === "image2") {
            setSelectedImage(productImage1);
        } else if (key === "image3") {
            setSelectedImage(productImage1);
        }
        else if (key === "image4") {
            setSelectedImage(productImage1);
        }
    };

    return (
        <div className="flex lg:flex-row flex-col gap-5">
            <Card className="lg:w-1/2">
                <CardBody className="w-[761px] md:h-[652px] h-auto mb-10">
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Product Images" selectedKey={selected} onSelectionChange={handleTabChange} isVertical>
                            <Tab
                                className="w-[40px] h-[40px]"
                                key="image1"
                                title={
                                    <div className="flex items-center justify-center w-[40px] h-[40px]">
                                        <Image
                                            src={productImage1}
                                            alt="Product Image 1"
                                            layout="intrinsic"
                                            width={40}
                                            height={40}
                                            className="object-cover rounded-full" // Optional: to round the image
                                        />
                                    </div>
                                }
                            >

                                <div className="flex justify-center items-center md:w-[600px] md:h-[600px] w-[250px] h-[300px] ">
                                    <Image src={selectedImage} alt="Selected Product" width={600} height={600} loading="eager"
                                    />
                                </div>

                            </Tab>
                            <Tab
                                className="w-[40px] h-[40px]"
                                key="image2"
                                title={
                                    <div className="flex items-center justify-center w-[40px] h-[40px]">
                                        <Image
                                            src={productImage1}
                                            alt="Product Image 1"
                                            layout="intrinsic"
                                            width={40}
                                            height={40}
                                            className="object-cover rounded-full" // Optional: to round the image
                                        />
                                    </div>
                                }
                            >

                                <div className="flex justify-center items-center md:w-[600px] md:h-[600px] w-[250px] h-[300px] ">
                                    <Image src={selectedImage} alt="Selected Product" width={600} height={600} loading="eager"
                                    />
                                </div>

                            </Tab>
                            <Tab
                                className="w-[40px] h-[40px]"
                                key="image3"
                                title={
                                    <div className="flex items-center justify-center w-[40px] h-[40px]">
                                        <Image
                                            src={productImage1}
                                            alt="Product Image 1"
                                            layout="intrinsic"
                                            width={40}
                                            height={40}
                                            className="object-cover rounded-full" // Optional: to round the image
                                        />
                                    </div>
                                }
                            >

                                <div className="flex justify-center items-center md:w-[600px] md:h-[600px] w-[250px] h-[300px] ">
                                    <Image src={selectedImage} alt="Selected Product" width={600} height={600} loading="eager"
                                    />
                                </div>

                            </Tab>
                            <Tab
                                className="w-[40px] h-[40px]"
                                key="image4"
                                title={
                                    <div className="flex items-center justify-center w-[40px] h-[40px]">
                                        <Image
                                            src={productImage1}
                                            alt="Product Image 1"
                                            layout="intrinsic"
                                            width={40}
                                            height={40}
                                            className="object-cover rounded-full" // Optional: to round the image
                                        />
                                    </div>
                                }
                            >

                                {/* Display the selected image */}
                                <div className="flex justify-center items-center md:w-[600px] md:h-[600px] w-[250px] h-[300px] ">
                                    <Image src={selectedImage} alt="Selected Product" width={600} height={600} loading="eager"
                                    />
                                </div>

                            </Tab>
                        </Tabs>
                    </div>

                </CardBody>
            </Card>

            <Card className="lg:w-1/2">
                <CardBody>

                    <div className="flex flex-row justify-between" >
                        <h1 className="lg:text-3xl text-lg " >{title}</h1>
                        <Button isIconOnly aria-label="Like" variant="light">
                            <FavoriteBorderOutlinedIcon />
                        </Button>
                    </div>
                    <div className="flex flex-row justify-between mt-4" >
                        <h1 className="lg:text-2xl text-lg flex flex-row " ><strong>Price:</strong> {price}<p className="ml-2 text-gray-700 lg:text-xl text-base">/pièce</p></h1>

                    </div>
                    <div className="flex flex-row justify-between mt-4" >
                        <div>


                            <Button startContent={<Image src={measure1} alt="measure1" />} variant="light">
                                <span className="text-2xl ">20</span>
                                <span className="text-sm leading-none">cm</span>
                            </Button>
                            <Button startContent={<Image src={measure2} alt="measure1" />} variant="light">
                                <span className="text-2xl ">50</span>
                                <span className="text-sm leading-none">cm</span>
                            </Button>
                        </div>

                        <div>

                            <h1 className="lg:text-xl text-sm " >{reference}</h1>
                        </div>





                    </div>
                    <div className="mt-4">
                        <h1 className="lg:text-base text-sm " >Location appareil à raclette - Raclette traditionnelle 1/2 roue <br />
                            Réglable en hauteur <br />
                            Appareil à raclette professionnel <br />
                            Boîtier de chauffe horizontal réglable en hauteur</h1>

                    </div>
                    <div className="mt-6">
                        <h1 className="lg:text-base text-sm " >220V <br /> 900W</h1>

                    </div>

                    <div className="flex gap-2 mt-60 ">


                        <div className="flex items-center justify-between w-[150px] h-[50px] border border-gray-300 rounded-md px-2">
                            <Button isIconOnly aria-label="Decrease Quantity" variant="light" radius="sm">
                                <RemoveOutlined />
                            </Button>
                            <span className="lg:text-xl text-base">1</span>
                            <Button isIconOnly aria-label="Increase Quantity" variant="light" radius="sm">
                                <Add />
                            </Button>
                        </div>


                        <Button
                            radius="sm"
                            style={{ backgroundColor: "#5CD2DD", color: "#fff" }}
                            className="md:w-[590px]  h-[50px]"
                        >
                            Ajouter au panier
                        </Button>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
};

export default ProductCard;
