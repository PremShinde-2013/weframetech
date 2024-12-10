/* eslint-disable prettier/prettier */
'use client';
import { Tabs, Tab, Card, CardBody, BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import ProductCard from "./productCard";

export default function ProductTabs() {
    // Replace tabs with your categories
    const tabs = [
        {
            id: "art_de_la_table",
            label: "Art de la table",
            content: {
                title: "Cheese – appareil à raclette 1/2 roue",
                price: "39,50€ ",
                reference: "RÉF : VABGN5",
                dimensions: "20cm x 50cm",
                description: "Location appareil à raclette - Raclette traditionnelle 1/2 roue. Réglable en hauteur. Appareil à raclette professionnel. Boîtier de chauffe horizontal réglable en hauteur.",
                power: "220V 900W",
            }
        },
        {
            id: "mobilier",
            label: "Mobilier",
            content: {
                title: "Chaise moderne",
                price: "59,00€ ",
                reference: "RÉF : XYZ123",
                dimensions: "40cm x 40cm x 90cm",
                description: "Chaise moderne en bois avec dossier ergonomique.",
                power: "N/A",
            }
        },
        {
            id: "nappage",
            label: "Nappage",
            content: {
                title: "Nappes en coton",
                price: "15,00€ ",
                reference: "RÉF : ABC987",
                dimensions: "140cm x 140cm",
                description: "Nappes en coton de haute qualité, idéales pour des événements élégants.",
                power: "N/A",
            }
        },
        {
            id: "materiel_de_salle",
            label: "Matériel de salle",
            content: {
                title: "Chaise pliante",
                price: "10,00€ ",
                reference: "RÉF : EFG456",
                dimensions: "50cm x 45cm x 90cm",
                description: "Chaise pliante robuste pour un usage dans les salles de conférence.",
                power: "N/A",
            }
        },
        {
            id: "cuisine",
            label: "Cuisine",
            content: {
                title: "Grill à contact",
                price: "99,00€ ",
                reference: "RÉF : HIJ123",
                dimensions: "30cm x 30cm",
                description: "Grill à contact avec plaques antiadhésives pour une cuisson rapide et facile.",
                power: "230V 1000W",
            }
        },
        {
            id: "barbecue",
            label: "Barbecue",
            content: {
                title: "Barbecue à gaz",
                price: "250,00€ ",
                reference: "RÉF : KLM789",
                dimensions: "150cm x 60cm",
                description: "Barbecue à gaz avec 3 foyers pour des cuissons uniformes.",
                power: "230V 2000W",
            }
        },
        {
            id: "tente",
            label: "Tente",
            content: {
                title: "Tente événementielle",
                price: "300,00€ ",
                reference: "RÉF : NOP567",
                dimensions: "6m x 12m",
                description: "Tente spacieuse pour événements extérieurs.",
                power: "N/A",
            }
        },
        {
            id: "chauffage",
            label: "Chauffage",
            content: {
                title: "Chauffage mobile",
                price: "120,00€ ",
                reference: "RÉF : QRS123",
                dimensions: "30cm x 30cm",
                description: "Chauffage mobile idéal pour maintenir la chaleur pendant les événements en extérieur.",
                power: "220V 1500W",
            }
        },
        {
            id: "podium_piste_de_danse",
            label: "Podium - Piste de danse",
            content: {
                title: "Podium modulable",
                price: "500,00€ ",
                reference: "RÉF : TUV789",
                dimensions: "3m x 3m",
                description: "Podium modulable pour événements avec option de personnalisation.",
                power: "N/A",
            }
        },
        {
            id: "son_et_lumiere",
            label: "Son et lumière",
            content: {
                title: "Kit son et lumière",
                price: "750,00€ /kit",
                reference: "RÉF : WXY234",
                dimensions: "Varie selon configuration",
                description: "Kit son et lumière professionnel pour des événements de grande envergure.",
                power: "230V 1000W",
            }
        },
        {
            id: "packs",
            label: "Packs",
            content: {
                title: "Pack événement",
                price: "1500,00€ /pack",
                reference: "RÉF : ZAB123",
                dimensions: "Complet",
                description: "Pack complet pour organiser des événements (tente, mobilier, son, lumière).",
                power: "N/A",
            }
        },
        {
            id: "consommables",
            label: "Consommables",
            content: {
                title: "Assiettes jetables",
                price: "5,00€ /paquet",
                reference: "RÉF : CDE456",
                dimensions: "20cm",
                description: "Paquet de 50 assiettes jetables, idéales pour des événements à grande échelle.",
                power: "N/A",
            }
        },
    ];

    const [currentPage, setCurrentPage] = React.useState<React.Key>("song");


    return (
        <div className="flex w-full flex-col mt-0 mb-20">
            <Tabs aria-label="Product categories" items={tabs} variant="underlined" color="primary" size="lg">
                {(item) => (
                    <Tab key={item.id} title={item.label} className="mx-1">

                        <div className="my-4">


                            <Breadcrumbs underline="active" separator="•"
                            >
                                <BreadcrumbItem key="home" className="text-black font-bold" isCurrent={currentPage === "home"}>
                                    Home
                                </BreadcrumbItem>

                                <BreadcrumbItem key={item.id} isCurrent={currentPage === item.id}>
                                    {item.label}
                                </BreadcrumbItem>
                            </Breadcrumbs>
                        </div>
                        <ProductCard
                            title={item.content.title}
                            price={item.content.price}
                            reference={item.content.reference}
                            dimensions={item.content.dimensions}
                            description={item.content.description}
                            power={item.content.power}
                        />
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}
