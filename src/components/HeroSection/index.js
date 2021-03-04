import React from 'react';
import "./HeroSection.css";
import { Button } from '../ButtomElement';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Travel More</h1>
            <p>Play your next trip today</p>
            <div className="hero-btns">
                <Button fontBig big primary>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection