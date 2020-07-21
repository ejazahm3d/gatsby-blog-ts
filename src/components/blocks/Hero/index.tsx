import React from "react"

interface Props {}

const Hero = (props: Props) => {
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Gatsby Contentful</h1>
                    <h2 className="subtitle">Check out my blogs</h2>
                </div>
            </div>
        </section>
    )
}

export default Hero
