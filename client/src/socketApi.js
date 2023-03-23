import io from "socket.io-client"
let socket;
export const init = () => {
    socket = io('http://localhost:3002',{
        transports: ["websocket"],
    })
    socket.on("connect", () => 
    console.log("Sunucuya bağlantı başarılı"))
}

export const send = (color) => {
    socket.emit('newColor',color);
    
}
export const subscribe = (setColor) =>{
    socket.on('receive',(color)=>{setColor(color);})
    
    
}
