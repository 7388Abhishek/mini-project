import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const courses = [
  { id: 1, title: "Web Development", description: "HTML, CSS, JavaScript complete course", price: "$100" },
  { id: 2, title: "React JS", description: "Build modern frontend apps with React", price: "$120" },
  { id: 3, title: "Python Programming", description: "Learn Python from beginner to advanced", price: "$90" }
];

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Smart Learning</h2>
        <div className="space-x-6 hidden md:block">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/courses" className="hover:text-yellow-300">Courses</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
          <Link to="/register" className="hover:text-yellow-300">Register</Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Upgrade Your Skills Online 🚀
        </h1>
        <p className="text-gray-600 mb-6">
          Learn from industry experts and boost your career.
        </p>
        <Link
          to="/courses"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600">
        We provide high-quality online education with expert instructors.
        Our mission is to make learning accessible and affordable.
      </p>
    </div>
  );
}

function Courses() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-3">{course.description}</p>
            <p className="font-bold text-blue-600">{course.price}</p>
            <Link
              to={`/courses/${course.id}`}
              className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <h2 className="text-center p-6">Course Not Found</h2>;

  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p className="text-xl font-semibold text-blue-600 mb-6">
        Price: {course.price}
      </p>
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
        Enroll Now
      </button>
    </div>
  );
}

function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input className="w-full border p-2 mb-4 rounded" type="email" placeholder="Email" />
        <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input className="w-full border p-2 mb-4 rounded" type="text" placeholder="Full Name" />
        <input className="w-full border p-2 mb-4 rounded" type="email" placeholder="Email" />
        <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="Password" />
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          Register
        </button>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <input className="w-full border p-2 mb-4 rounded" type="text" placeholder="Name" />
        <input className="w-full border p-2 mb-4 rounded" type="email" placeholder="Email" />
        <textarea className="w-full border p-2 mb-4 rounded" placeholder="Message"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}