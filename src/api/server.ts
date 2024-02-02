const token = '9b5b58d919647aeec8db'

export const server_calls = {
    get: async() => {
        const response = await fetch(`https://space-flask-app.onrender.com/api/spacesuits`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to retrieve data')
        }

        return await response.json()
    },

    update: async (id: string, data: any={}) => {
        const response = await fetch(`https://space-flask-app.onrender.com/api/spacesuits/${id}`,
        {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok){
            throw new Error('Failed to update data')
        }
    },
    
    create: async (data: any ={}) => {
        const response = await fetch(`https://space-flask-app.onrender.com/api/spacesuits`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token':`Bearer ${token}`  
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok){
            throw new Error('Failed to enter new data for the server')
        }
    },
    

    delete: async (id: string) =>{
        const response = await fetch(`https://space-flask-app.onrender.com/api/spacesuits/${id}`,
        {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token':token
            },
    
        });
            if (!response.ok){
                throw new Error("Failed to delete data from server")
            }
            return;
    }
}
