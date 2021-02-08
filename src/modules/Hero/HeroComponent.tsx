import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ hero }: RootState) => ({
    ...hero,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const HeroComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Hero = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeroComponent);
