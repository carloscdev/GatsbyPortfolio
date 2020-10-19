import React, { useState, useEffect } from 'react'
import Repo from './Repo'
// import repos from '../data/repos'
// componentDidMount componentDidUpdate (forma antigua)
export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1,7);
            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/carloscdev/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchRepos();
    },[]);
    return (
        <div className="container mx-auto p-12 max-w-6xl flex justify-center item-center mt-12">
            <div>
            <header>
            <h2>Mi trabajo como Front-end</h2>
            <p>Colaboración y contribución de código</p>
            </header>
            <ul className="repos-list mt-12">
                {
                    repos.map((repo)=> {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-12 text-center">
                <a href="https://github.com/carloscdev" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver ({reposCount}) repositorios - Git Hub
                </a>
            </div>
            </div>
        </div>
    )
}
