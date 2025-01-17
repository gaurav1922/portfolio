// Mock data for portfolio
const fetchPortfolioData = () => {
    return {
        details: {
            name: "Gaurav Gehlot",
            email: "gauravgehlot1922@gmail.com",
            description: "A passionate developer skilled in Swift, Flutter, React, and Node.js.",
            linkedin: "https://www.linkedin.com/in/gaurav-gehlot-8816b2212",

        },
        projects: [
            {
                id: 1,
                title: "Portfolio Website",
                description: "A personal portfolio showcasing my skills and projects.",
                techStack: ["React", "Node.js", "Express"],
                link: "https://github.com/ashishparmar/portfolio"
            },
            {
                id: 2,
                title: "E-commerce App",
                description: "An e-commerce app for online shopping.",
                techStack: ["Flutter", "Firebase"],
                link: "https://github.com/ashishparmar/ecommerce-app"
            }
        ],
        "skills": [
            {
                "category": "Mobile Development",
                "technologies": ["Flutter", "Swift"]
            },
            {
                "category": "Frontend",
                "technologies": ["React", "HTML", "CSS", "JavaScript"]
            },
            {
                "category": "Backend",
                "technologies": ["Node.js", "Express", "MongoDB"]
            }
        ],
        resume: {
            url: "http://localhost:5000/Gaurav_resume.pdf",  // or your online URL
            fileName: "Gaurav_resume.pdf"
        }
    };
};

module.exports = { fetchPortfolioData };
