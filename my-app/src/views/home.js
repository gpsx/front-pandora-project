import React from 'react';
import Button from './../components/Button'

class Home extends React.Component{

    render(){
        return(
            <div>
                <Button href='#/login' label='CADASTRAR'></Button>
            </div>
        )
    }

}

export default Home;