'use client';
import { useState } from 'react';

export default function TableOfContents({ sections, title = "विषय सूची (Table of Contents)" }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!sections || sections.length === 0) return null;

  return (
    <div className="my-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-750 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span>📑</span> {title}
        </h3>
        <span className={`text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={index} className="flex">
                <a 
                  href={`#${section.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
