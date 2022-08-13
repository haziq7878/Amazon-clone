import React, { useRef } from 'react'
import "../css/home.css"
import Project from "./Product";

function Home() {

    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='background' />

                <div className='home__row'>
                    <Project index={0} id={1}
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg" rating={5} />
                </div>

                <div className='home__row'>
                    <Project index={1} id={2} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" rating={4} />
                    <Project index={2} id={3} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                </div>

                <div className='home__row'>
                    <Project index={3} id={4} title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={5} />

                    <Project index={4} id={5} title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={589.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={4} />


                    <Project index={5} id={6} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export { Home };