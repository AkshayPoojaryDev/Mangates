import { useState, useEffect } from "react";
import { db } from "../../firebase"; // adjust path as needed
import { collection, addDoc } from "firebase/firestore";
import { FaPlus, FaTrash } from "react-icons/fa";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    duration: "",
    level: "",
    rating: "",
    overview: "",
    longDescription: "",
    certification: "",
    eligibility: "",
    highlights: [""],
    topics: [""],
    features: [""],
    faqs: [{ question: "", answer: "" }],
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const handleFaqChange = (index, key, value) => {
    setFormData((prev) => {
      const newFaqs = [...prev.faqs];
      newFaqs[index] = { ...newFaqs[index], [key]: value };
      return { ...prev, faqs: newFaqs };
    });
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => {
      const newArray = [...prev[field]];
      newArray.splice(index, 1);
      return {
        ...prev,
        [field]: newArray.length ? newArray : [""],
      };
    });
  };

  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const removeFaq = (index) => {
    setFormData((prev) => {
      const newFaqs = [...prev.faqs];
      newFaqs.splice(index, 1);
      return {
        ...prev,
        faqs: newFaqs.length ? newFaqs : [{ question: "", answer: "" }],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    // Clean and prepare data
    const cleanedData = {
      ...formData,
      highlights: formData.highlights.filter((item) => item.trim() !== ""),
      topics: formData.topics.filter((item) => item.trim() !== ""),
      features: formData.features.filter((item) => item.trim() !== ""),
      faqs: formData.faqs.filter(
        (faq) => faq.question.trim() || faq.answer.trim()
      ),
    };

    try {
      await addDoc(collection(db, "trainingCourses"), cleanedData);
      setSuccessMessage("✅ Course created successfully!");
      setFormData({
        title: "",
        subtitle: "",
        duration: "",
        level: "",
        rating: "",
        overview: "",
        longDescription: "",
        certification: "",
        eligibility: "",
        highlights: [""],
        topics: [""],
        features: [""],
        faqs: [{ question: "", answer: "" }],
      });
    } catch (error) {
      console.error("Firestore error:", error);
      setSuccessMessage("❌ Failed to save course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border"
    >
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
        Add New Course
      </h2>

      {/* Alerts */}
      {loading && <p className="text-blue-600 font-medium">Saving course...</p>}
      {successMessage && (
        <p
          className={`${
            successMessage.startsWith("✅")
              ? "text-green-600"
              : "text-red-600"
          } font-medium`}
        >
          {successMessage}
        </p>
      )}

      {/* Title + Subtitle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Duration, Level, Rating */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>All Levels</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Overview & Description */}
      <div>
        <label className="block mb-1 font-medium">Overview</label>
        <textarea
          name="overview"
          value={formData.overview}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Long Description</label>
        <textarea
          name="longDescription"
          value={formData.longDescription}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      {/* Array Inputs */}
      {["highlights", "topics", "features"].map((field) => (
        <div key={field}>
          <div className="flex justify-between items-center mb-1">
            <label className="font-medium capitalize">{field}</label>
            <button
              type="button"
              onClick={() => addArrayItem(field)}
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              <FaPlus /> Add
            </button>
          </div>
          {formData[field].map((item, index) => (
            <div key={`${field}-${index}`} className="flex gap-2 mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleArrayChange(field, index, e.target.value)
                }
                className="w-full px-3 py-2 border rounded-md"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(field, index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* Certification & Eligibility */}
      <div>
        <label className="block mb-1 font-medium">Certification Details</label>
        <textarea
          name="certification"
          value={formData.certification}
          onChange={handleChange}
          rows="3"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Eligibility</label>
        <textarea
          name="eligibility"
          value={formData.eligibility}
          onChange={handleChange}
          rows="3"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      {/* FAQs */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">FAQs</label>
          <button
            type="button"
            onClick={addFaq}
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            <FaPlus /> Add FAQ
          </button>
        </div>
        {formData.faqs.map((faq, index) => (
          <div
            key={`faq-${index}`}
            className="p-4 border rounded-md space-y-2 mb-3"
          >
            <input
              type="text"
              placeholder="Question"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              className="w-full px-3 py-2 border rounded-md"
            />
            <textarea
              placeholder="Answer"
              value={faq.answer}
              onChange={(e) =>
                handleFaqChange(index, "answer", e.target.value)
              }
              className="w-full px-3 py-2 border rounded-md"
              rows={2}
            />
            <button
              type="button"
              onClick={() => removeFaq(index)}
              className="text-red-600 text-sm hover:underline"
            >
              <FaTrash className="inline" /> Remove FAQ
            </button>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
        >
          {loading ? "Submitting..." : "Create Course"}
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
