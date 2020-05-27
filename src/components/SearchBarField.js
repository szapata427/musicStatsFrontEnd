import React, {Component} from 'react'


class SearchBarField extends Component {
    state = {
        searchValue: null
    }

    render() {
        return(
            <React.Fragment>
                <div>
                <input type="text" placeholder="Search..." />

                </div>
            </React.Fragment>
        )
        
    }
}

export default SearchBarField