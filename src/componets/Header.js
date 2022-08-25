import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                {/* <input type="search" placeholder="Search" />
               <button className="btn btn-primary"></button> */}
                {/* <div className="input-group">
                    <input type="search" className="rounded" placeholder="Search Note's"/>
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div> */}
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='/'>Note</a>
                        <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header