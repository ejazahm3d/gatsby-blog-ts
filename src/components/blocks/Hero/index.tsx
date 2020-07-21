import React from "react"

interface Props {}

const Hero = (props: Props) => {
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Gatsby Contentful</h1>
                    <h2 className="subtitle">
                        “All our dreams can come true, if we have the courage to
                        pursue them.” – Walt Disney
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero
