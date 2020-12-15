import React from 'react'
import Footer from '../FooterSection/Footer'
import Banner from '../images/AdobeStock_301291062@2x.png'
import ContentBanner from '../images/AdobeStock_304537986@2x.png'
import Boy from '../images/boy-1.png'
import Girl from '../images/girl-1.png'

import './AboutUs.css'

export default function AboutUs() {
    return (
        <> 
        <div className="no-gutter">
            <img src={Banner} alt="Banner" class="no-gutter img-fluid"/>
        </div>
        <div className="content-container">
        <div className="content">
            <h2>ABOUT</h2>
            <h1><span className="text-info">O</span>ptomeyes <span className="text-info">E</span>yewear</h1>
            <p>Optomeyes Eyewear is a full scope optometry practice located in Auburn. We've been servicing the auburn area for almost 20 years. We examine patients of all ages and offer comprehensive eye exams.</p>
            <p>We also offer Orthokeratology - a specialised optometry service that gives people the freedom of clear vision without the use of their glasses or contact lenses during the day.
            </p>
            <p>
            We have the latest technology in our practice which helps make your eye exams more accurate and more comfortable.
            </p>
            <br/>
            <button className="btn btn-primary">
                Learn More
            </button>
        </div>
        <div className="content-banner">
        <img src={ContentBanner} alt="Banner" class="no-gutter img-fluid"/>
        </div>
        </div>
        <br/>
        <br/>
        <div className="info-container">
        <div className="info-banner">
        <img src={Boy} alt="Banner" class="no-gutter img-fluid"/>
        </div>
        <div className="info-content">
            <h1>B.Optom(Hons), Cert Ocular Therapeutics</h1>
            <h2>Ibrahim Is Fluent In Turkish</h2>
            <fr>
            </fr>
            <br/>
            <p>Ibrahim is the principle optometrist at Optomeyes Eyewear and graduated from UNSW with Honours. In 2015 Ibrahim believes his qualifications by completing his certificate in ocular therapeutics which allow him to prescribe ocular medication. Ibrahim Believes in high quality eye care by providing top level of service aided by the latest technology.</p>
            <br/>
            <p>Having grown up in Auburn, Ibrahim feels it is a privilege to be serving his community and he has provided professional eye care services since 2003. Apart from full scope optometry, his interests include, diagnosis, management and treatment ocular disease, complex contact lenses for keratoconus and orthokeratology.
            </p>
        </div>
        </div>

        <br/>

        <div className="info-container-2">
      
        <div className="info-content-2">
            <h1>B.Optom(Hons), Cert Ocular Therapeutics</h1>
            <h2>Ibrahim Is Fluent In Turkish</h2>
            <fr>
            </fr>
            <br/>
            <p>Ibrahim is the principle optometrist at Optomeyes Eyewear and graduated from UNSW with Honours. In 2015 Ibrahim believes his qualifications by completing his certificate in ocular therapeutics which allow him to prescribe ocular medication. Ibrahim Believes in high quality eye care by providing top level of service aided by the latest technology.</p>
            <br/>
            <p>Having grown up in Auburn, Ibrahim feels it is a privilege to be serving his community and he has provided professional eye care services since 2003. Apart from full scope optometry, his interests include, diagnosis, management and treatment ocular disease, complex contact lenses for keratoconus and orthokeratology.
            </p>
        </div>
        <div className="info-banner-2">
        <img src={Girl} alt="Banner" class="no-gutter img-fluid"/>
        </div>
        </div>
        <Footer/>
        <br/>
        </>
    )
}
