import React, { FC } from 'react';

import {TopSectionInterfaces} from "@modules/Home/components/topSection/topSectionTypes";


export const TopSection: FC<TopSectionInterfaces> = ({
    username,
    rating,
    level,
    golds,
    gems,
    specialValutes
}) => {
    return (
        <div className="absolute top-0 p-8 w-screen">
            <span className="float-left">
                <span className="bg-gray-200 m-3 p-5 rounded-full">
                    <span className="m-3">{username}</span>
                    <span className="m-3">level: {level}</span>
                    <span className="m-3">rating: {rating}</span>
                </span>
            </span>
            <span className="float-right">
                <span className="bg-gray-200 m-3 p-5 rounded-full">
                    <span className="m-3">golds: {golds}</span>
                    <span className="m-3">gems: {gems}</span>
                    <span className="m-3">sv: {specialValutes}</span>
                </span>
            </span>
        </div>
    );
};
