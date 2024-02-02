import Button from "./Button";
import Modal from "./Modal";
import { useState } from 'react'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom_hooks/Fetch'


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70, hide: true},
    {field: 'color', headerName:'Color of Suit', flex:1},
    {field: 'make', headerName: 'Make of Suit', flex:1},
    {field: 'model', headerName: 'Suit Model', flex: 1},
    {field: 'name', headerName: 'Suit Name', flex:1},
    {field: 'planet_used_on', headerName: 'Planet Suit is Used On', flex:1},
    {field: 'price', headerName:'Price of the Suit', flex:1},
    {field: 'serial_num', headerName: "Serial Number", flex:1},
    {field: 'year', headerName: "Suit Year", flex:1}
]

function SpaceDataTable(){
    let [ open, setOpen] = useState(false);
    const { spaceData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([])

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection Model: ${selectionModel}`)
    }

    return(
        <>
        <Modal
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <Button className="p-5 rounded bg-blue-700 m-3 hover:bg-purple-700"
                onClick={() => handleOpen()}>
                    Add in a New Suit
                    </Button>
            </div>
            <Button onClick={handleOpen} className="p-5 bg-blue-700 rounded m-3 hover:bg-purple-700">Update Suit</Button>
            <Button onClick={deleteData} className="p-5 bg-blue-700 rounded m-3 hover:bg-purple-700">Delete Suit</Button>
        </div>
        <div className={open ? "hidden": 'container mx-8 my-5 flex flex-col bg-blue-700 bg-opacity-25 rounded-xl' }
        style={{ height: 400, width: '95%'}}>
            <h2 className="p-5 bg-blue-700 my-2 rounded-xl place-items-center">The Spacesuit collective:</h2>
            <DataGrid rows={spaceData} columns={columns} rowsPerPageOptions = {[5]}
            checkboxSelection={true}
            onSelectionModelChange={ (items:any) => {
                setSelectionModel(items)
            }}/>
        </div>
        </>
    )
}

export default SpaceDataTable