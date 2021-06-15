import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "87vh",
    }
    return (
        <div style={myStyle}>
            <p className="text-center" style={{ padding: "40vh" }}>
                This app has been created as a self-learning React project. This app is useful to
                keep track of one's daily tasks.
            </p>
        </div>
    )
}
