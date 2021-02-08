import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';

const mapStateToProps = ({ tasks }: RootState) => ({
    ...tasks,
});

const mapDispatchToProps = {

};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const TasksComponent: React.FC<Props> = ({}: Props) => {

    return (
        <>

        </>
    )
};

export const Tasks = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TasksComponent);
