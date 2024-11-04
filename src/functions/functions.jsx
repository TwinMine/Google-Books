const url = import.meta.env.VITE_URL; 
const key = import.meta.env.VITE_KEY;

export async function bookFetch(search) {
    try {
        const response = await fetch(`${url}?key=${key}&q=${(search)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }  
          
        });
        
        const data = await response.json();
        if (!response.ok) {
            return alert(`HTTP error! status: ${response.status}`); 
        }
        return data; 
    } catch (error) {
        console.error("Error appeared:", error);
    }
}
