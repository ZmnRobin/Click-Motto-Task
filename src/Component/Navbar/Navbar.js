import React from 'react';

const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={{color:'#D67200'}}>CLICK MOTTO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Discover</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">For Professionals</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ....
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">About Click Motto</a></li>
                        <li><a class="dropdown-item" href="#">Pricing</a></li>
                        <li><a class="dropdown-item" href="#">License</a></li>
                        <li><a class="dropdown-item" href="#">Partnerships</a></li>
                        <li><a class="dropdown-item" href="#">Blog</a></li>
                        <li><a class="dropdown-item" href="#">Help</a></li>
                        <li><a class="dropdown-item" href="#">Join The Team</a></li>
                    </ul>
                    </li>
                    <li class="nav-item submit-photos">
                    <button class="btn btn-outline-success me-4" type="submit">Submit Photos</button>
                    </li>
                    <li class="nav-item">
                    <button class="btn btn-outline-success me-3" type="submit">Login</button>
                    </li>
                    <li class="nav-item">
                    <button class="btn btn-danger" type="submit">Join Free</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;