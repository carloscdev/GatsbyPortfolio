import React from 'react'

export default function Repo(props) {
    return (
        <div>
            <li className="flex items-center shadow-lg">
                <div className="flex-1">
                    <small className="text-gray-500">id: {props.repo.id}</small>
                    <h5 className="text-green-600 font-bold">{props.repo.name}</h5>                    
                </div>
                <a href={props.repo.html_url} rel="noreferrer" target="_blank">Ver +</a>
            </li>
        </div>
    )
}
