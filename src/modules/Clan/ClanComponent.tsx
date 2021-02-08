import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ clan }: RootState) => ({
    ...clan,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const ClanComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Clan = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClanComponent);
