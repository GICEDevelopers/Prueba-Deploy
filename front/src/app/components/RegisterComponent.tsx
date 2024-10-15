"use client"
import { IUserRegister } from '@/interfaces/interfaces';
import React, { useState } from 'react'

export default function RegisterComponent() {

    const [userRegister, setUserRegister] = useState<IUserRegister>({
        email: "",
        password: "",
        phone: "",
      });
    
      
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const updatedUser = {
      ...userRegister,
      [name]: value,
    };
    setUserRegister(updatedUser);
  };

    
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: IUserRegister = {
      email: userRegister.email,
      password: userRegister.password,
      phone: userRegister.phone
    };

    try {
      const isRegistered = await fetchRegister(user);
      if (isRegistered) {
       alert("Registro exitoso");
        
      } else  (error) {
        error instanceof Error ? error.message : "Error desconocido."
    }
  };

  return (
    <div>
        <h1>RegisterComponent</h1>
        <form>
        <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  name="email"
                  type="email"
                  value={userRegister.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
        <div className="md:col-span-1 lg:col-span-1">
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  name="password"
                  type="password"
                  value={userRegister.password}
                  onChange={handleChange}
                  placeholder="Contraseña"
                />
        <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  name="phone"
                  type="string"
                  value={userRegister.phone}
                  onChange={handleChange}
                  placeholder="Celular"
                />
                </form>
    </div>
  )
}
