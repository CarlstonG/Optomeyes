import React from 'react'
import Img4 from '../images/AdobeStock_145594219@2x.png'

export default function SubHero() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col col-md-6 mt-5 nopadding">
                    <p>About </p>
                    <h1 className="font-weight-bold text-info">Optomeyes Eyewear</h1>
                    <p>Optomeyes Eyewear has been servicing the local area of Auburn for over 15 years. We pride ourselves on our high levels of customer service, frame selection and comprehensive eye exams.</p>
                    <button type="button" class="btn btn-primary btn-lg">Learn More</button>
                </div>
                <div className="col col-md-6 nopadding">
                <img src={Img4} className="img-fluid" alt="Responsive"/>
                </div>
            </div>
        </div>
    )
}
