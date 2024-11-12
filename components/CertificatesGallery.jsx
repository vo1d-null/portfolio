"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const CertificatesGallery = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Memoize certificates array to avoid unnecessary re-renders
  const certificates = useMemo(() => [
    {
      id: 1,
      title: "Diploma for Python Web Developer",
      image: "/assets/resume/certificates/Diploma for Python Web Developer.jpeg",
      description: "Diploma for completion of Python Web Developer course.",
      downloadLink: "/assets/resume/certificates/Diploma for Python Web Developer.pdf",
    },
    {
      id: 2,
      title: "Software Engineering and DevOps - September 2024",
      image: "/assets/resume/certificates/Software Engineering and DevOps - September 2024 - Certificate.jpeg",
      description: "Software Engineering and DevOps certification, completed in September 2024.",
      downloadLink: "/assets/resume/certificates/Software Engineering and DevOps - September 2024 - Certificate.pdf",
    },
    {
      id: 3,
      title: "Python ORM - June 2024",
      image: "/assets/resume/certificates/Python ORM - June 2024 - Certificate.jpeg",
      description: "Python ORM certification, completed in June 2024.",
      downloadLink: "/assets/resume/certificates/Python ORM - June 2024 - Certificate.pdf",
    },
    {
      id: 4,
      title: "PostgreSQL - May 2024",
      image: "/assets/resume/certificates/PostgreSQL - May 2024 - Certificate.jpeg",
      description: "Certificate in PostgreSQL database management, issued in May 2024.",
      downloadLink: "/assets/resume/certificates/PostgreSQL - May 2024 - Certificate.pdf",
    },
    {
      id: 5,
      title: "Django Advanced - February 2024",
      image: "/assets/resume/certificates/Django Advanced - February 2024 - Certificate.jpeg",
      description: "Advanced Django certification, earned in February 2024.",
      downloadLink: "/assets/resume/certificates/Django Advanced - February 2024 - Certificate.pdf",
    },
    {
      id: 6,
      title: "Django Basics - January 2024",
      image: "/assets/resume/certificates/Django Basics - January 2024 - Certificate.jpeg",
      description: "Basic Django certification, earned in January 2024.",
      downloadLink: "/assets/resume/certificates/Django Basics - January 2024 - Certificate.pdf",
    },
    {
      id: 7,
      title: "IT Career Booster - October 2023",
      image: "/assets/resume/certificates/IT Career Booster - October 2023 - Certificate.jpeg",
      description: "IT Career Booster program certificate from October 2023.",
      downloadLink: "/assets/resume/certificates/IT Career Booster - October 2023 - Certificate.pdf",
    },
    {
      id: 8,
      title: "JS Front-End - October 2023",
      image: "/assets/resume/certificates/JS Front-End - October 2023 - Certificate.jpeg",
      description: "JavaScript Front-End course completion certificate from October 2023.",
      downloadLink: "/assets/resume/certificates/JS Front-End - October 2023 - Certificate.pdf",
    },
    {
      id: 9,
      title: "Algorithms with Python - July 2023",
      image: "/assets/resume/certificates/Algorithms with Python - July 2023 - Certificate.jpeg",
      description: "Certificate for Algorithms with Python, achieved in July 2023.",
      downloadLink: "/assets/resume/certificates/Algorithms with Python - July 2023 - Certificate.pdf",
    },
    {
      id: 10,
      title: "Python Advanced - May 2023",
      image: "/assets/resume/certificates/Python Advanced - May 2023 - Certificate.jpeg",
      description: "Advanced Python course completion certificate, earned in May 2023.",
      downloadLink: "/assets/resume/certificates/Python Advanced - May 2023 - Certificate.pdf",
    },
    {
      id: 11,
      title: "Python OOP - June 2023",
      image: "/assets/resume/certificates/Python OOP - June 2023 - Certificate.jpeg",
      description: "Object-Oriented Programming in Python certificate, completed in June 2023.",
      downloadLink: "/assets/resume/certificates/Python OOP - June 2023 - Certificate.pdf",
    },
    {
      id: 12,
      title: "HTML & CSS - September 2023",
      image: "/assets/resume/certificates/HTML & CSS - September 2023 - Certificate.jpeg",
      description: "HTML & CSS certification, completed in September 2023.",
      downloadLink: "/assets/resume/certificates/HTML & CSS - September 2023 - Certificate.pdf",
    },
    {
      id: 13,
      title: "Programming Fundamentals with Java - January 2023",
      image: "/assets/resume/certificates/Programming Fundamentals with Java - January 2023 - Certificate.jpeg",
      description: "Programming Fundamentals with Java certification from January 2023.",
      downloadLink: "/assets/resume/certificates/Programming Fundamentals with Java - January 2023 - Certificate.pdf",
    },
    {
      id: 14,
      title: "Programming Basics - September 2022",
      image: "/assets/resume/certificates/Programming Basics - September 2022 - Certificate.jpeg",
      description: "Programming Basics certification from September 2022.",
      downloadLink: "/assets/resume/certificates/Programming Basics - September 2022 - Certificate.pdf",
    },
  ], []);
  
  return (
    <section className="py-8 xl:py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={200}
                className="object-cover w-full"
                layout="responsive"
                priority={cert.id === 1} // Set priority only for first image
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center scale-75 bg-primary bg-opacity-70 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full mx-4 sm:mx-8 md:mx-12 max-w-full sm:max-w-[75%] md:max-w-[50%] lg:max-w-[30%] flex flex-col justify-start"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center">{selectedCert.title}</h2>
                <div className="overflow-auto flex-grow mt-4">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    width={600}
                    height={400}
                    className="rounded mb-4 w-full object-contain"
                    layout="responsive"
                  />
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{selectedCert.description}</p>
                <div className="text-center">
                  <Link href={selectedCert.downloadLink} passHref>
                    <Button as="a" download>
                      Download Certificate
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificatesGallery;