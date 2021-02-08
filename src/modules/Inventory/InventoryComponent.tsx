import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ inventory }: RootState) => ({
    ...inventory,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const InventoryComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InventoryComponent);
