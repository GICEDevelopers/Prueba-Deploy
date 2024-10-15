import { IUserRegister } from "@/interfaces/interfaces";

export const fetchRegisterUser = async (user: IUserRegister) => {
    console.log('Datos del usuario a enviar:', user);
  
    const response = await fetch(``, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
  
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error desconocido'); 
    }
  
    const data = await response.json();
    return data;
  }