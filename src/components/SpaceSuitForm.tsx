import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseMake, chooseModel, chooseColor, 
choosePlanetUsedOn, choosePrice, chooseSerialNum, chooseYear } from '../redux/slices/RootSlice'

interface SpaceSuitFormProps{
    id?: string[];
    onClose: () => void;
}

const SpaceSuitForm = ( props:SpaceSuitFormProps ) => {
    const { register, handleSubmit } =  useForm({})
    const dispatch = useDispatch()
    const store = useStore();

const onSubmit = (data: any, event: any) => {
    console.log(`ID ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0){
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data.name } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 2000)
        event.target.reset()
    } else {
        dispatch(chooseName(data.name));
        dispatch(chooseMake(data.make));
        dispatch(chooseModel(data.model));
        dispatch(chooseColor(data.color));
        dispatch(chooseYear(data.year));
        dispatch(choosePrice(data.price));
        dispatch(choosePlanetUsedOn(data.planet_used_on));
        dispatch(chooseSerialNum(data.serial_num));

        server_calls.create(store.getState())
    }
}

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <   div>
                    <label htmlFor="name">Name of Spacesuit</label>
                    <Input {...register('name')} name='name' placeholder='Suit Name'></Input>
                </div>
                <div>
                    <label htmlFor="make">Make of Spacesuit</label>
                    <Input {...register('make')} name='make' placeholder='Suit Make'></Input>
                </div>
                <div>
                    <label htmlFor="model">Model of Spacesuit</label>
                    <Input {...register('model')} name='model' placeholder='Suit Model'></Input>
                </div>
                <div>
                <label htmlFor="planet_used_on">Planet Used On</label>
                <Input {...register('planet_used_on')} name='planet_used_on' placeholder='Planet Used On'></Input>
            </div>
            <div>
                <label htmlFor="color">Color of Spacesuit</label>
                <Input {...register('color')} name='color' placeholder='Suit Color'></Input>
            </div>
            <div>
                <label htmlFor="pripce">Suit price</label>
                <Input {...register('price')} name='price' placeholder='Suit Price'></Input>
            </div>
            <div>
                <label htmlFor="serial_num">Name of Spacesuit</label>
                <Input {...register('serial_num')} name='serial_num' placeholder='Serial number'></Input>
            </div>
            <div>
                <label htmlFor="year">Suit Production Year</label>
                <Input {...register('year')} name='year' placeholder='Suit Year of Production'></Input>
                <div className="h-screen justfiy-content-center place-content-center">
                    <Button className="flex flex-row justify-center items-center bg-slate-800 hover:bg-purple-500 m-3 p-1 rounded">Submit</Button>
                </div>
            </div>
        </form>
    </div>
)
}


export default SpaceSuitForm