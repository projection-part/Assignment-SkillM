import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CoursesCurriculum.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Courses = ()=>{
    const design = (
        <>
            <div className="courses-container">
                <div className="learning-path">
                    <div className="btn btn-path">DATASCIENCE COURSE LEARNING PATH</div>
                </div>
                <div className="learning-curriculum">
                    <div className="curriculum-name"><span className="data-science">Data Science</span> <span className="courses-curriculum">Course Curriculum</span></div>
                </div>
                <div className="tech-box">
                    <div className="courses-box">
                        <div className="cpp"><h2>C++</h2><div className="cpp-desc">Learn C++ for strong programming fundamentals</div></div>
                        <div className="view-cpp"><div className="btn btn-view"><FontAwesomeIcon icon={faEye} /> View Curriculum</div></div>
                    </div>
                    <hr className="styled-hr" />
                    
                    <div className="courses-box">
                        <div className="cpp"><h2>MEARN Stack</h2><div className="cpp-desc">Master the MEARN Stack for hight-demand projects</div></div>
                        <div className="view-cpp"><div className="btn btn-view"><FontAwesomeIcon icon={faEye} /> View Curriculum</div></div>
                    </div><hr className="styled-hr" />
                    <div className="courses-box">
                        <div className="cpp"><h2>Data Structure & Algorithm</h2><div className="cpp-desc">Exel in Data Structures and Algorithms for interview process</div></div>
                        <div className="view-cpp"><div className="btn btn-view"><FontAwesomeIcon icon={faEye} /> View Curriculum</div></div>
                    </div><hr className="styled-hr" />
                    <div className="courses-box">
                        <div className="cpp"><h2>Competitive Programming</h2><div className="cpp-desc">Exel in Data Structures and Algorithms for interview process</div></div>
                        <div className="view-cpp"><div className="btn btn-view"><FontAwesomeIcon icon={faEye} /> View Curriculum</div></div>
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default Courses;