import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ clans }: RootState) => ({
    ...clans,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const ClansComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Clans = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClansComponent);
