import React, {useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';
import {BottomSection} from "@modules/Home/components/bottomSection/BottomSection";
import {NavbarSection} from "@modules/Home/components/navbarSection/NavbarSection";
import {TopSection} from "@modules/Home/components/topSection/TopSection";

const mapStateToProps = ({ home }: RootState) => ({
    ...home,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const HomeComponent: React.FC<Props> = (props) => {
    const dispatch = useDispatch()

    const user = useSelector(
        (state: RootState) => state.home.username
    )

    useEffect(() => {
        if (!user) {

        }
    })

    const onStartBattleClick = () => {};
    const onSelectModeClick = () => {};

    const onClanClick = () => {};
    const onInventoryClick = () => {};
    const onStoreClick = () => {};
    const onTasksClick = () => {};

    return (
        <div className="h-screen relative">
            <TopSection
                username={props.username}
                level={props.level}
                rating={props.rating}
                golds={props.coins}
                gems={props.gems}
                specialValutes={props.specialValutes}
            />
            <NavbarSection
                onClanClick={onClanClick}
                onInventoryClick={onInventoryClick}
                onStoreClick={onStoreClick}
                onTasksClick={onTasksClick}
            />
            <BottomSection
                selectedMode={props.selectedMode}
                onSelectModeClick={onSelectModeClick}
                onStartBattleClick={onStartBattleClick}
            />
        </div>
    )
};

export const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeComponent);
