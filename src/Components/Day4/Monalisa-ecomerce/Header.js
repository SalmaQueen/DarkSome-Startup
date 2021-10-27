import React, { Component } from 'react'
import './header.css'
import Navbar from './Navbar'
export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="header">
                <div className="hero-container">
                <div class="hero">
    <h1>SalmaSom Fashions</h1>
    <h4>Fashion with deen</h4>
        
  </div>
                </div>
    
                
            </div>
            </>
        )
    }
}
