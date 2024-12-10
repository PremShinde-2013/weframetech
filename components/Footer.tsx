/* eslint-disable prettier/prettier */
import React from 'react';
import logo from '../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LinkedIn } from '@mui/icons-material';
import { Divider } from '@nextui-org/react';

type Props = {};

const Footer = (props: Props) => {
    return (
        <>

            <Divider />
            <div className="w-full flex md:flex-row flex-col  justify-center py-3 px-5 mt-20   ">

                <div className="w-2/3 flex lg:flex-row flex-col  gap-20 mb-20">
                    <div>
                        <Image src={logo} alt="logo" height={65} width={133} />
                    </div>

                    <div>
                        <p className='text-xl font-medium'>INFOS PRATIQUES</p>
                        <Link href="/a-propos" className="block text-gray-700 cursor-pointer">
                            À propos
                        </Link>
                        <Link href="/livraisons-reprises" className="block text-gray-700 cursor-pointer">
                            Livraisons & Reprises
                        </Link>
                        <Link href="/mode-demploi" className="block text-gray-700 cursor-pointer">
                            Mode d’emploi
                        </Link>
                        <Link href="/faq" className="block text-gray-700 cursor-pointer">
                            F.A.Q
                        </Link>
                    </div>
                    <div>
                        <p className='text-xl font-medium'>LÉGAL</p>

                        <Link href="/livraisons-reprises" className="block text-gray-700 cursor-pointer">
                            Mentions légales
                        </Link>
                        <Link href="/mode-demploi" className="block text-gray-700 cursor-pointer">
                            CGU
                        </Link>
                        <Link href="/faq" className="block text-gray-700 cursor-pointer">
                            CGV
                        </Link>
                        <Link href="/a-propos" className="block text-gray-700 cursor-pointer">
                            Politique de confidentialité
                        </Link>
                    </div>
                    <div>
                        <p className='text-xl font-medium'>MON COMPTE</p>

                        <Link href="/livraisons-reprises" className="block text-gray-700 cursor-pointer">
                            Accéder à mon compte
                        </Link>
                        <Link href="/mode-demploi" className="block text-gray-700 cursor-pointer">
                            Ma liste d’envie
                        </Link>
                        <Link href="/faq" className="block text-gray-700 cursor-pointer">
                            Créer un compte
                        </Link>
                        <Link href="/a-propos" className="block text-gray-700 cursor-pointer">
                            Mot de passe oublié
                        </Link>
                    </div>
                </div>
                <div className='flex lg:justify-end justify-items-end  w-2/5'>
                    <div className='flex flex-col lg:items-end' >
                        <p className='mb-4 uppercase font-medium text-medium' >NOUS SUIVRE</p>
                        <div className=' flex gap-2'>
                            <Button isIconOnly aria-label="Like" color="default" className='bg-transparent border-1 rounded-md'>
                                <TwitterIcon />
                            </Button>
                            <Button isIconOnly aria-label="Like" color="default" className='bg-transparent border-1 rounded-md'>
                                <InstagramIcon />
                            </Button>
                            <Button isIconOnly aria-label="Like" color="default" className='bg-transparent border-1 rounded-md'>
                                <LinkedIn />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
