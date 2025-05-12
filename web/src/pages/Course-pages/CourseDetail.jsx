import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { LoaderCircle } from "lucide-react";
import TrainingTypeCards from "../../Components/Sections/TrainingTypeCards"
import Highlights from "../../Components/Sections/Highlights";
import CourseTabs from "../../Components/Sections/CourseTabs";
import CourseOverview from "../../Components/Sections/CourseOverview"; // ✅ NEW

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "courses", courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          console.log("No such course!");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );
  }

  if (!course) {
    return <div className="text-center py-10">Course not found.</div>;
  }

  return (
    <div className="bg-gray-50">
      <section className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="mt-2 text-lg">{course.subtitle}</p>
      </section>

      {/* ✅ Inserted Course Overview */}
      <CourseOverview
        duration={course.duration}
        level={course.level}
        rating={course.rating}
        overview={course.overview}
      />

      <TrainingTypeCards />
      <Highlights highlights={course.highlights} />
      <CourseTabs course={course} />
    </div>
  );
};

export default CourseDetail;
