import React from 'react'

export default function Form() {
    return (
        <div >
            <form className="text-white mt-3 text-center">
                <label for="contact-content" className="block font-bold mb-2">Cuéntame de esa idea que quieres hacer realidad:</label>
                <div className="flex">
                <textarea
                id="contact-content"
                name="contact-content"
                className="rounded mr-2 flex-1 py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline"></textarea>
                <button
                className="btn"
                >Enviar</button>
                </div>
            </form>
        </div>
    )
}
