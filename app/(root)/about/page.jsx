import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="p-8 bg-gray-100 dark:bg-gray-950 min-h-screen">
      <section className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover more about my journey, mission, and skills as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/profile.jpeg"
              alt="Profile picture"
              width={250}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My mission is to build impactful and innovative web solutions that
              help people and businesses thrive in the digital age. I strive to
              write clean, efficient code and stay updated with the latest
              technologies to provide the best possible solutions.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I envision a future where technology seamlessly integrates into
              daily life, making it easier and more enjoyable. My goal is to be
              at the forefront of this technological evolution, contributing
              through creative and effective web development.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            My Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                HTML, CSS, JavaScript, React, Next.js
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Backend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Express, MongoDB
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Other Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Git, Docker, SEO, Agile
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
