import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ shop }: RootState) => ({
    ...shop,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const ShopComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Shop = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShopComponent);
