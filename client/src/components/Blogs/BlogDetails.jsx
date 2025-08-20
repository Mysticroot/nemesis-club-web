// src/pages/BlogDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    date: '12 JUL 2024',
    category: 'WEC',
    title: 'THE 499PS IN ACTION IN SÃO PAULO',
    mainImage: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo.jpg',
    secondaryImage: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo-2.jpg',
    content: [
      'The 499PS showcased incredible performance during the São Paulo event, thrilling fans with its speed and agility on the track.',
      "Team engineers highlighted the car's improvements in aerodynamics and handling, which allowed for more competitive lap times.",
      'Drivers commented on how the car’s setup optimized tire usage and overall performance in varying weather conditions.',
    ],
  },
  {
    id: 2,
    date: '09 JUL 2024',
    category: 'WEC',
    title: 'COMMENTS IN THE RUN-UP TO THE 6 HOURS OF SÃO PAULO',
    mainImage: 'https://www.ferrari.com/images/2024/07/09/499p-team-photo.jpg',
    content: [
      'Team principals and drivers shared insights ahead of the 6 Hours of São Paulo, emphasizing strategy and preparation.',
      'Focus was on maintaining consistency and extracting maximum performance while managing endurance and pit stops.',
      'Fans were eager to see how the team’s recent improvements would affect race performance and standings.',
    ],
  },
  {
    id: 3,
    date: '08 JUL 2024',
    category: 'HYPERCAR',
    title: 'GIOVINAZZI RENEWS HIS CONTRACT WITH FERRARI',
    mainImage: 'https://www.ferrari.com/images/2024/07/08/giovinazzi.jpg',
    content: [
      'Antonio Giovinazzi has renewed his contract with Ferrari, continuing to contribute to the team’s hypercar program.',
      'The contract reflects Ferrari’s confidence in Giovinazzi’s technical feedback and consistent performance.',
      'Fans look forward to seeing him in upcoming races and how his expertise will influence car development.',
    ],
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Blog not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image with Title */}
      {blog.mainImage && (
        <div className="relative w-full h-[500px] md:h-[600px]">
          <img src={blog.mainImage} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 md:p-12 max-w-4xl">
              <p className="text-red-500 font-semibold text-sm mb-2">
                {blog.category} | {blog.date}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-12">
        {/* Content Paragraphs */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          {blog.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Optional Secondary Image */}
        {blog.secondaryImage && (
          <div className="mt-10">
            <img
              src={blog.secondaryImage}
              alt={`${blog.title} secondary`}
              className="w-full h-80 md:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Back to Blogs Button */}
        <div className="mt-16 text-center">
          <Link
            to="/blogs"
            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
