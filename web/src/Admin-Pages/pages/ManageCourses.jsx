// src/pages/Admin/ManageCourses.jsx
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

  const fetchCourses = async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCourses(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "courses", id));
    fetchCourses();
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional UX improvement
  };

  const handleUpdate = async (updatedData) => {
    try {
      await updateDoc(doc(db, "courses", editingCourse.id), updatedData);
      setEditingCourse(null);
      fetchCourses();
      alert("Course updated successfully!");
    } catch (err) {
      console.error("Error updating course:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        {editingCourse ? "Edit Course" : "Manage Courses"}
      </h2>

      {editingCourse && (
        <div className="mb-6">
          <CourseForm
            initialData={editingCourse}
            onSubmit={handleUpdate}
            isEditing={true}
            onCancel={() => setEditingCourse(null)}
          />
        </div>
      )}

      <CourseTable
        courses={courses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ManageCourses;
