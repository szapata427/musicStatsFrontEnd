import React, {Component} from 'react'
import HeadersCss from '.././css/HeadersCss.css'







class Header extends Component {



    render() {
        return(
            <React.Fragment>
                <div class="main-header-wrapper">
                    <div class="header-option-div-name">
                        <span class="span-title-header">Home</span>
                        
                    </div>
                    <div class="header-option-div-name">
                        <span class="span-title-header">Artist</span>
                        
                    </div>
                    <div class="header-option-div-name">
                    <span class="span-title-header">Song</span>

                    </div>
                    <div class="header-option-div-name">
                    <span class="span-title-header">Country</span>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Header