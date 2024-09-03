
import { useDispatch, useSelector } from 'react-redux'
import { DarkFunction, LightFunction } from '../Redux/action'

function TheamBtn() {

    const dispatch = useDispatch()

    const { dark, light } = useSelector((state) => state.themeReducer)



    const LightTheam = () => {
        dispatch(LightFunction())
    }

    const DarkTheam = () => {
        dispatch(DarkFunction())
    }
    return (
        <>
            <button onClick={LightTheam} disabled={light}> Light Theam</button>
            <button onClick={DarkTheam} disabled={dark}>Dark Theam</button>
        </>
    )
}

export default TheamBtn
