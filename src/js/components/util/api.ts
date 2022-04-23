const baseUrl = "https://api.spotify.com/v1";


export async function getUser(token) {
    const url = `${baseUrl}/me`;

    try {
        let data = await fetch(url, {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json'
        }
        });
        data = await data.json();
    
        return data;
        
    } catch (error) {
        console.error(error);
    }
}

