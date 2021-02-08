import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ profile }: RootState) => ({
    ...profile,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const ProfileComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Profile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileComponent);
