import React from 'react'
// import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';


const Navbar = () => {
    return (
        <>
            {/* ..Navbar.. */}

            <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h4 class="d-inline bi bi-person-vcard "> Cloud Contact</h4>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav text-end endit ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-light fw-semibold" href="#">
                                    Hello Umair
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link bi bi-box-arrow-right text-light fw-semibold"
                                    href="#"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;