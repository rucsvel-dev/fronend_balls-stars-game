import React, { FC } from 'react';

import {BottomSectionProps} from "@modules/Home/components/bottomSection/bottomSectionTypes";


export const BottomSection: FC<BottomSectionProps> = ({
    selectedMode,
    onSelectModeClick,
    onStartBattleClick
}) => {
    return (
        <div className="absolute bottom-0 p-5 w-screen">
            <span className="float-right">
                <span className="bg-gray-200 m-3 p-4 rounded-full py-3 px-6" onClick={onSelectModeClick}>
                    {selectedMode}
                </span>
                <span className="bg-gray-200 m-3 p-4  rounded-full py-3 px-6" onClick={onStartBattleClick}>
                    Go battle
                </span>
            </span>
        </div>
    );
};
