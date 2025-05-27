import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import CourseTable from "../../Admin-Pages/components/CourseTable";
import CourseForm from "../../Admin-Pages/components/CourseForm";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCourses = async () => {
    setLoading(true);
    setError("");
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Failed to load courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      await deleteDoc(doc(db, "courses", id));
      fetchCourses();
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete course. Try again.");
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdate = async (updatedData) => {
    try {
      await updateDoc(doc(db, "courses", editingCourse.id), updatedData);
      setEditingCourse(null);
      fetchCourses();
      alert("✅ Course updated successfully!");
    } catch (err) {
      console.error("Error updating course:", err);
      alert("❌ Failed to update course.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        {editingCourse ? "Edit Course" : "Manage Courses"}
      </h2>

      {editingCourse && (
        <div className="mb-8">
          <CourseForm
            initialData={editingCourse}
            onSubmit={handleUpdate}
            isEditing={true}
            onCancel={() => setEditingCourse(null)}
          />
        </div>
      )}

      {loading ? (
        <p className="text-center text-blue-600">Loading courses...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <CourseTable
          courses={courses}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default ManageCourses;
