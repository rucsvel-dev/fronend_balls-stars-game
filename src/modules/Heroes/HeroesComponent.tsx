import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ heroes }: RootState) => ({
    ...heroes,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const HeroesComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Heroes = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeroesComponent);
