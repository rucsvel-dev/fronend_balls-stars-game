import React, { FC } from 'react';

import {NavbarSectionProps} from "@modules/Home/components/navbarSection/navbarSectionTypes";
import storePng from '@/assets/shopping-cart.png';
import clanPng from '@/assets/shield.png';
import inventoryLogo from '@/assets/box.png';
import tasksLogo from '@/assets/clipboard.png';


export const NavbarSection: FC<NavbarSectionProps> = ({
        onStoreClick,
        onClanClick,
        onInventoryClick,
        onTasksClick
    }) => {

    const NavbarIconClass = 'bg-gray-200 m-3 p-4 w-20 rounded-full py-3 px-6';

    return (
        <div className="absolute left-0 p-5 w-100 mt-20">
            <img className={NavbarIconClass} onClick={onStoreClick} src={storePng} alt="Store"/>
            <img className={NavbarIconClass} onClick={onClanClick} src={clanPng} alt="Clan"/>
            <img className={NavbarIconClass} onClick={onInventoryClick} src={inventoryLogo} alt="Inventory"/>
            <img className={NavbarIconClass} onClick={onTasksClick} src={tasksLogo} alt="Store"/>
        </div>
    );
};
