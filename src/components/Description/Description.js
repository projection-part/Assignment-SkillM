import "./Description.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, 
        faGraduationCap, 
        faStar, 
        faPaperPlane, 
        faCircleQuestion,
        faChalkboard,
        faUserGraduate,
        faCloudQuestion,
        faBusinessTime

} from '@fortawesome/free-solid-svg-icons';


const Description = ()=>{
    const design = (
        <>
            <div className="tag">
                <div className="initiative-tag"><h3><FontAwesomeIcon icon={faGraduationCap} /> <span className="tag-line">An</span> <span className="iit-d">IIT Delhi</span> <span className="tag-line">Alumini Initiative</span></h3></div>
            </div>
            <div className="desc">
                <h1><span className="L1">Become an Expert in the<br /> field of</span> <span className="L2">Data Science<br /> with 6 courses</span></h1>
                <h6><span className="L3">A specially crafted Tech Kickstarter, with</span> <span className="L4">5+ extensive online courses.</span></h6>
            </div>
            <div className="courses">
                <button className="btn"><FontAwesomeIcon icon={faStar} /> Personal Mentorship</button>
                <button className="btn"><FontAwesomeIcon icon={faStar} /> Internship Assistance</button>
                <button className="btn"><FontAwesomeIcon icon={faStar} /> Industry Certify Courses</button>
            </div>
            
            <div className="buy-btn">
                <button className="btn"> Enroll Now <FontAwesomeIcon icon={faPaperPlane} /></button>
                <button className=" btn btn-more"> Know More <FontAwesomeIcon icon={faCircleQuestion} /></button>
            </div>
            <div className="edu-hub">
                
                <div className="clsd-box">
                    <div className="course-box">
                        <div className="courses-box">
                            <FontAwesomeIcon icon={faChalkboard} className="faChalkboard" />
                        </div>
                        <div className="crs-box">
                        <div className="crs-count">24</div>
                        <div className="crs-name">Courses</div>
                        </div>
                        
                    </div>
                    <div className="learners-box">
                    <div className="courses-box">
                            <FontAwesomeIcon icon={faUserGraduate} className="faUserGraduate" />
                        </div>
                        <div className="crs-box">
                        <div className="crs-count">30K+</div>
                        <div className="crs-name">Learners</div>
                        </div>
                    </div>
                    <div className="doubt-box">
                    <div className="courses-box">
                            <FontAwesomeIcon icon={faCircleQuestion} className="faChalkboard" />
                        </div>
                        <div className="crs-box">
                        <div className="crs-count">100K+</div>
                        <div className="crs-name">Doubts Solved</div>
                        </div>
                    </div>
                    <div className="project-box">
                    <div className="courses-box">
                            <FontAwesomeIcon icon={faBusinessTime} className="faChalkboard" />
                        </div>
                        <div className="crs-box">
                        <div className="crs-count">10K+</div>
                        <div className="crs-name">Student Projects</div>
                        </div>
                    </div>
                </div>
                   
            </div>
        </>
    );
    return design;
}

export default Description;