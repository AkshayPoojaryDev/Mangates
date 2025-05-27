import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { LoaderCircle } from "lucide-react";

// Section Components
import TrainingTypeCards from "../../Components/Sections/TrainingTypeCards";
import Highlights from "../../Components/Sections/Highlights";
import CourseTabs from "../../Components/Sections/CourseTabs";
import CourseOverview from "../../Components/Sections/CourseOverview";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
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

  useEffect(() => {
    if (course?.title) {
      document.title = `${course.title} | Course Details`;
    }
  }, [course]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-2xl font-semibold mb-2">Course Not Found</h2>
        <p>Please check the course ID or try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-12 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
        {course.subtitle && (
          <p className="mt-2 text-lg font-light">{course.subtitle}</p>
        )}
      </section>

      {/* Course Overview */}
      <CourseOverview
        duration={course.duration || "N/A"}
        level={course.level || "Beginner"}
        rating={course.rating || "N/A"}
        overview={course.overview || "No overview available."}
      />

      {/* Training Formats */}
      <TrainingTypeCards />

      {/* Key Highlights */}
      {course.highlights && course.highlights.length > 0 && (
        <Highlights highlights={course.highlights} />
      )}

      {/* Tabs (Curriculum, FAQs, etc.) */}
      <CourseTabs course={course} />
    </div>
  );
};

export default CourseDetail;
