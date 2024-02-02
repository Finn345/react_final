import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: "Name",
        make: "Make",
        model: "Model",
        color: "Color",
        year: "Year",
        serial_num: "Serial Number",
        price: "Price",
        planet_used_on: "Planet Used On"
    },

    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseSerialNum: (state, action) => { state.serial_num = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        choosePlanetUsedOn: (state, action) => { state.planet_used_on = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseMake, chooseModel, chooseColor, chooseYear, chooseSerialNum, choosePrice, choosePlanetUsedOn } = rootSlice.actions