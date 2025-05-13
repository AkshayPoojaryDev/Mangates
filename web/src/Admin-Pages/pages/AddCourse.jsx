import CourseForm from "../components/CourseForm";

const AddCourse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add a New Course
        </h2>
        <CourseForm />
      </div>
    </div>
  );
};

export default AddCourse;
