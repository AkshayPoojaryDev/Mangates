import { Link } from "react-router-dom";
import { Plus, Settings } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Add Course */}
          <Link to="/admin/add-course" className="group block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700 group-hover:text-blue-600">Add New Course</h2>
                <p className="text-sm text-gray-500">Create and publish a new training program.</p>
              </div>
            </div>
          </Link>

          {/* Manage Courses */}
          <Link to="/admin/manage-courses" className="group block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700 group-hover:text-green-600">Manage Courses</h2>
                <p className="text-sm text-gray-500">Edit or delete existing courses in the system.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
