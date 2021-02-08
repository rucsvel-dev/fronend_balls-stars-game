import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ leaderboard }: RootState) => ({
    ...leaderboard,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const LeaderboardComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Leaderboard = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LeaderboardComponent);
