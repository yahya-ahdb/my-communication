export function useHeaders (){
    const token =localStorage.getItem("token")
    return {
        'Accept': 'application/json',
        'Content-Type' : "application/json" ,
        'Authorization': `bearer ${token}`
    }
}