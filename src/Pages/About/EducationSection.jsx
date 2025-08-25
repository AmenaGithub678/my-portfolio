export default function EducationSection() {
  const educationData = [
    {
      title: "MSc in Computer Science & Engineering",
      institution: "Jagannath University",
      duration: "Aug 2025 – Ongoing",
      description:
        "Currently pursuing my Master's degree, focusing on advanced computing concepts, research in AI, and exploring innovative solutions to modern-day challenges in technology.",
    },
    {
      title: "BSc in Computer Science & Engineering",
      institution: "Central Women's University",
      duration: "Jan 2019 – Dec 2023",
      description:
        "Completed my Bachelor's degree with a strong foundation in programming, algorithms, database systems, and software engineering principles.",
    },
    {
  title: "Higher Secondary Certificate (2017)",
  institution: "Begum Badrunnesa Government Girls' College",
  duration: "2015 – 2017",
  description:
    "Completed my HSC with a focus on Science, developing analytical and problem-solving skills.",
},
{
  title: "Secondary School Certificate ",
  institution: "Dolairpar High School",
  duration: "2010 – 2015",
  description:
    "Achieved SSC in the Science group with strong academic performance and active participation in school activities.",
},
    {
      title: "Web Development – Self Learning",
      institution: "YouTube, Google Docs & Online Resources",
      duration: "2024 – Current",
      description:
        "Continuously enhancing my skills through online learning, building real-world projects, and keeping up-to-date with the latest web technologies.",
    },
    {
      title: "Web Development (Level 1)",
      institution: "Programming Hero",
      duration: "Jan 2025 – Current",
      description:
        "Learning structured and project-based web development covering HTML, CSS, JavaScript, React, and backend basics to build complete MERN stack applications.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Education & Professional Growth
          </h1>
          <p className="text-lg text-white mt-2">
            A journey of learning, growth, and constant innovation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 border-l-8 border-[#AD56C4]"
            >
              <h2 className="text-xl font-semibold text-[#2B1E70]">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 italic">{item.institution}</p>
              <p className="text-sm text-gray-400 mb-3">{item.duration}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
