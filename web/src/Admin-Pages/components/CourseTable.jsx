import React from "react";

const CourseTable = ({ courses, onDelete, onEdit }) => {
  if (!courses.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No courses found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow rounded-lg bg-white">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600">
          <tr>
            <th className="px-6 py-3 border-b">Title</th>
            <th className="px-6 py-3 border-b">Level</th>
            <th className="px-6 py-3 border-b">Duration</th>
            <th className="px-6 py-3 border-b">Rating</th>
            <th className="px-6 py-3 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-gray-50 border-b">
              <td className="px-6 py-4">{course.title}</td>
              <td className="px-6 py-4">{course.level}</td>
              <td className="px-6 py-4">{course.duration}</td>
              <td className="px-6 py-4">{course.rating}</td>
              <td className="px-6 py-4 text-center space-x-2">
                {onEdit && (
                  <button
                    onClick={() => onEdit(course)}
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDelete(course.id)}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
