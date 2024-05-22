import logo from './logo.svg';
import Header from "./components/Header/Header";
import Description from './components/Description/Description';
import Courses from './components/CoursesCurriculum/CoursesCurriculum';
import OfferNote from './components/OfferNote/OfferNote';

function Homepage() {
  return (
    <>
      <Header />
      <Description />
      <Courses />
      <OfferNote />
    </>
  );
}
export default Homepage;




