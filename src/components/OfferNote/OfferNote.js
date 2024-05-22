import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OfferNote.css";
import { faCircle, faCircleUser, faClock, faFaceSmile, faImage, faIndianRupeeSign, faStar, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";




const OfferNote = ()=>{


    

    const design = (
        <>
        <div className="offernote">
            <div><h1><span className="L1">Don't miss out on this</span> <span className="L2">limited-time<br /> opportunity</span> <span className="L3">to learn for</span> <span className="L4">Free!</span></h1></div>
        </div>
        <div className="offer-box">
            
            <div className="refund">
                <div className="offer-icon">100% Refund Offer <FontAwesomeIcon icon={faFaceSmile} className="smile" /></div>
                <div className="inpu"><input type="range" className="slider" /></div>
                <div  className="offer-time">< FontAwesomeIcon icon={faClock} /> Offer ends in 10:00Mins</div>
                </div>
        </div>

        <div className="working">
            <div className="working-how">
                <div><h1>How does it work?</h1></div>
            </div>
            <div className="step">
                <div className="img-step">
                    <img src="img-step.png" alt="img-step" />
                </div>
            </div>
            <div className="step-desc">
                <div className="step-1">
                    <div><h3>Step 1: Enroll into your favorite<br /> course for only <FontAwesomeIcon icon={faIndianRupeeSign} /> 1,499</h3></div>
                    <div><img src="learn.png" alt="learn" /></div>
                    <div><p><span className="start-learning">Start Learning with</span> <span className="courses-access">Lifetime Courses Access</span></p></div>
                </div>
                <div className="step-1">
                    <div><h3>Step 2: Complete course &<br /> Assignment within two years</h3></div>
                    <div className="ticket">
                        <div className="tecket-text">2</div>
                        <div className="tecket-desc">Years time from the date of<br /> enrollment</div>
                    </div>
                    <div><p><span className="start-learning">Finish the course within 2 years to ualify</span> <span className="courses-access">for Refund</span></p></div>
                </div>
                <div className="step-1">
                    <div><h3>Step 3: Receive 100% Refund<br /> upon completion</h3></div>
                    <div className="ticket">
                        <div className="tecket-text">100%</div>
                        <div className="tecket-desc">Enrllment fee is refunded</div>
                    </div>
                    <div><p><span className="start-learning">Upon Course Completion within 2 Years,<br /></span> <span className="courses-access">Get Your <FontAwesomeIcon icon={faIndianRupeeSign} />1,499 Back.</span></p></div>
                </div>
                
                </div>  
        </div>

        <div className="top-company">
            <div className="top-name"><span className="top-cmp">Top Companies hiring</span> <span className="data-scientist">Data Scientist</span></div>
            <div className="top-logo">
                <div className="logo-text">Logo</div>
                <div className="logo-text">Logo</div>
                <div className="logo-text">Logo</div>
                <div className="logo-text">Logo</div>
                <div className="logo-text">Logo</div>
            </div>
        </div>

        <div className="certification">
            <p className="unlock"><span className="unlock-text">Unlock</span> <span className="certificate">6 certificates</span> <span className="and">&</span> <span className="certificate">Internship opportunities!</span></p>
            <div className="certificates-name">
            <div className="certificate-box">
                <div className="caption">Get 6 Industry Recognized<br /> Certificates!</div>
                <div><img src="certificate.png" /></div>
                <div className="verified">
                <button className="btn btn-verified"><FontAwesomeIcon icon={faStar} /> Official and Verified</button>
                <button className="btn btn-verified"><FontAwesomeIcon icon={faStar} /> Enhances Credibility</button>
                </div>
            </div>
            <div className="opportunities-box">
                <div className="caption">Bag Intership opportunities
                <p className="op-desc">With every course, we make not only industry-read but<br /> also help you crack your forst intership</p>
                </div>
                <div><img src="pics.png" /></div>
            </div>
            </div>
        </div>

        <div className="bundal-box">
       <div className="left-data">
       <div><p>Enroll For DataScience<br />Bundal @1,499</p></div>
        <div><small>Beacome an Export in the data science field by enrolling<br /> into 6 Extensive courses!</small></div>
        <div><button className="btn btn-enroll"><FontAwesomeIcon icon={faTag} /> Enroll Now</button></div>
       </div>
       <div className="right-data">
        <div><p>Total number of courses<br /> 6</p></div>
        <div><p>Total number of certificates<br /> 6</p></div>
        <div><p>Access to Courses<br />Lifetime</p></div>
       </div>
        </div>

        <div className="bundal-box-2">
       <div className="left-data">
       <div><p>Enroll For DataScience<br />Bundal @1,499</p></div>
        <div><small>Beacome an Export in the data science field by enrolling<br /> into 6 Extensive courses!</small></div>
        <div><button className="btn btn-enroll"><FontAwesomeIcon icon={faTag} /> Enroll Now</button></div>
       </div>
       <div className="right-data">
        <div><p>Total number of courses<br /> 6</p></div>
        <div><p>Total number of certificates<br /> 6</p></div>
        <div><p>Access to Courses<br />Lifetime</p></div>
       </div>
        </div>


        <div className="highlights">
            <div className="key-hi">
                <div>Key Highlights</div>
            </div>
            <div className="key-box">
                <div className="industry-standard">
                    <div className="tag-courses">Industry standard<br /> courses</div>
                    <div><FontAwesomeIcon icon={faUserTie} className="user-tie" /></div>
                </div>
                <div className="industry-standard">
                    <div className="tag-courses">Guaranteed vertification<br /> on completion</div>
                    <div><FontAwesomeIcon icon={faUserTie} className="user-tie" /></div>
                </div>
                <div className="industry-standard">
                    <div className="tag-courses">Guaranteed internship</div>
                    <div><FontAwesomeIcon icon={faUserTie} className="user-tie" /></div>
                </div>
                <div className="industry-standard">
                    <div className="tag-courses">Personal Mentor</div>
                    <div><FontAwesomeIcon icon={faUserTie} className="user-tie" /></div>
                </div>
                <div className="industry-standard">
                    <div className="tag-courses">Industry standard<br /> Project</div>
                    <div><FontAwesomeIcon icon={faUserTie} className="user-tie" /></div>
                </div>
                <div className="industry-standard">
                    <div className="tag-courses">24X7 support <br /> over chat</div>
                    <div><FontAwesomeIcon icon={faUserTie} className="user-tie" /></div>
                </div>
            </div>
        </div>

        <div className="work-flow">
             <div className="method-1">
                <div><p>Learn from our structured pre <br /> recorded courses made by<br /> export to meet industry need</p></div>
                <div><p>Personal mentor to guid and <br /> help you throughout your <br /> jurny as a friend</p></div>
                <div><p>Get guaranteed paid interships <br /> after completion of the program<br /> along with course completion certificates</p></div>
             </div>
             <div className="method-2">
                <div><p>Learn from our structured pre <br /> recorded courses made by<br /> export to meet industry need</p></div>
                <div><p>Personal mentor to guid and <br /> help you throughout your <br /> jurny as a friend</p></div>
               </div>

               <div className="apply-now"><div><button className="btn">Apply now for <FontAwesomeIcon icon={faIndianRupeeSign} /> 2999 </button></div></div>
             </div>

        </>
    );
    return design;
}

export default OfferNote;