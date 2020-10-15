import React from 'react'
import Principal from '../images/principal.svg'
import Form from "../components/Form"
export default function Header() {
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto p-12 max-w-4xl flex justify-center item-center">
                <div className="flex-1 text-white  self-center">
                    <h2>Carlos C.</h2>
                 <p>Front-end Developer</p>
                </div>
                 <img width="40%" src={Principal} alt="Imagen Header" />                 
            </div>
            <div className="container mx-auto p-12 max-w-4xl flex justify-center item-center">
            <Form />
            </div>
        </header>
    )
}
