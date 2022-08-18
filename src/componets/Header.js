import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                {/* <input type="search" placeholder="Search" />
               <button className="btn btn-primary"></button> */}
                {/* <div class="input-group">
                    <input type="search" class="rounded" placeholder="Search Note's"/>
                    <button type="button" class="btn btn-outline-primary">search</button>
                </div> */}
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Note</a>
                        <form class="d-flex input-group w-auto">
                            <input
                                type="search"
                                class="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header