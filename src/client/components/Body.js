import React, { useState, useEffect } from 'react'
import { headerCards, social } from './data'
import Header from './Header'
import MainRouter from './mainRouter'
import Footer from './Footer'


const Body = (props) => {

    const [state, setState] = useState ({
        headerComponents: headerCards,
        facebook: social[0],
        instagram: social[1],
        youtube: social[2],
        rss: 'https://anchor.fm/patrick-thurston'
      })

    


    return (
        <div>
            <Header headerData={state.headerComponents} />
                <MainRouter />
            <Footer
            facebook={state.facebook}
            instagram={state.instagram}
            youtube={state.youtube}
            rss={state.rss}
            />
        </div>
    ) 
}

export default Body