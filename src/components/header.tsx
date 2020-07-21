import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }: { siteTitle: string }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <header>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        {siteTitle}
                    </Link>

                    <a
                        onClick={() => setIsActive(!isActive)}
                        role="button"
                        className={`navbar-burger burger ${
                            isActive ? "is-active" : ""
                        }`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? "is-active" : ""}`}
                >
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/blog">
                            Latest Blogs
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a
                                    href="https://github.com/ejazahm3d"
                                    className="button is-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>Github</strong>
                                </a>
                                <a
                                    href="https://linkedin.com/in/ejazahm3d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button is-light"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
