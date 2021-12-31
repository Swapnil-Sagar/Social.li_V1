import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage1 from '../images/img_illu-02@1x.png'
import featureimage2 from '../images/img_illu-03@1x.png'
import featureimage3 from '../images/img_illu-04@1x.png'
import featureimage4 from '../images/img_illu-05@1x.png'

function Feature() {

    const content1 = 'No two communities are the same and neither should be their tokens. With Social.li you can create a cryptocurrency customised to the unique needs of your community.';
    const content2 = 'Join our entrepreneur cohorts for workshops and playbooks designed for your industry. Create utility for your token. Learn from peers and experts. ';
    const content3 = 'Your social token is only as valuable as your community thinks it is. Use our guides to help your community members get crypto savvy.  ';
    const content4 = 'Crypto is the native currency of the Metaverse. Build your presence in your own or popular virtual worlds, and guide your community to follow suit.';




    return (
        <div id='features'>
            <div className='a-container'>
                <div className='a-cards-row'>
              <FeatureBox image={featureimage1} title='Launch your own Cryptocurrency' content={content1}/>
              <FeatureBox image={featureimage2} title='Design your Economy' content={content2}/>
              </div>
              <div className='a-cards-row'>
              <FeatureBox image={featureimage3} title='Train your Community' content={content3}/>
              <FeatureBox image={featureimage4} title='Migrate to the Metaverse' content={content4}/>
              </div>
            </div>      
        </div>
    )
}

export default Feature
