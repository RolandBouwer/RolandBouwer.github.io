import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Bootstrap",
    "React",
    "HTML/CSS",
    "TailwindCSS",
    "Power Platform",
  ];

  const backendSkills = ["Flask", "Python", "AWS", "Azure", "Selenium"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Johannesburg-based Software Developer and Quality Engineer with a strong background in automation, cloud engineering, and quality delivery. I bring a practical, hands-on approach to building scalable test frameworks, automation pipelines, and cloud-native services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6 border border-white/10 bg-slate-950/30 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl p-6 border border-white/10 bg-slate-950/30 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-6">📚 Experience</h3>
            
            {/* Education Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Education</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold">Post Graduate Diploma in Information Technology Management</p>
                  <p className="text-sm text-blue-300">Mancosa · In Progress</p>
                </div>
                <div>
                  <p className="font-semibold">B.Tec. in Information Technology</p>
                  <p className="text-sm text-blue-300">Central University of Technology, FS (2008-2012)</p>
                  <p className="text-sm mt-2">Relevant Coursework: Software Development, Project Management, Database Administration</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-6"></div>

            {/* Work Experience Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Work Experience</h4>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h5 className="font-semibold">Cloud Engineer at Standard Bank Group</h5>
                  <p className="text-sm text-blue-300 mb-2">Mar 2023 - Present · 3 yrs 2 mos · Hybrid · Johannesburg Metropolitan Area</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Design and develop cloud-native applications on Azure using .NET (ASP.NET Core, Razor Pages, Web APIs) and Python (FastAPI, Flask).</li>
                    <li>Build and maintain microservices and background workers, including event-driven and containerized workloads.</li>
                    <li>Implement authentication and authorization using Azure Entra ID (Azure AD), MSAL, and SSO integrations.</li>
                    <li>Develop infrastructure-as-code using Bicep / ARM, enabling repeatable and secure cloud deployments.</li>
                    <li>Deploy and manage applications using Azure App Services, Container Apps, and Azure Functions.</li>
                    <li>Implement CI/CD pipelines with Azure DevOps / GitHub Actions.</li>
                    <li>Use Dapr, Redis, SQL Server, Blob Storage, Key Vault, and other Azure services to build resilient systems.</li>
                    <li>Develop low-code solutions using Power Platform (Power Apps, Power Automate, Logic Apps) to automate business processes and integrate cloud systems.</li>
                    <li>Monitor and troubleshoot systems using Application Insights, Log Analytics, and Azure Monitor.</li>
                    <li>Collaborate with cross-functional teams to modernize legacy systems and improve cloud maturity.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Senior Quality Engineer at Standard Bank Group</h4>
                  <p className="text-sm text-blue-300 mb-2">Apr 2018 - Apr 2023 · 5 yrs 1 mo · City of Johannesburg, Gauteng, South Africa</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Developed cloud-first applications using React, .NET, and Python frameworks for Standard Bank Group.</li>
                    <li>Conducted test analysis and execution using JIRA, Confluence, and Azure Test Plans for functional, regression, and end-to-end testing.</li>
                    <li>Implemented Azure DevOps Build pipelines for test automation and Power Apps applications to optimize process automation.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Test Analyst at Command Quality (Pty) Ltd</h4>
                  <p className="text-sm text-blue-300 mb-2">Oct 2015 - Mar 2018 · 2 yrs 6 mos · Johannesburg Area, South Africa</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Analyzed business requirements to create test documents and cases for FNB Premium Core Banking.</li>
                    <li>Established test plans adhering to testing strategies and timelines.</li>
                    <li>Created and executed automated test frameworks using Java, Selenium, and Spring Boot.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Test Analyst at Larsen & Toubro Infotech Ltd</h4>
                  <p className="text-sm text-blue-300 mb-2">Feb 2013 - Oct 2015 · 2 yrs 9 mos · Johannesburg Metropolitan Area · On-site</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Completed an internship program at L&T Infotech Johannesburg to support Standard Bank testing initiatives.</li>
                    <li>Performed functional and non-functional testing across banking applications.</li>
                    <li>Worked with HP Quality Center and test planning tools to manage test assets.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Lab Assistant at Central University of Technology, Free State</h4>
                  <p className="text-sm text-blue-300 mb-2">Sep 2012 - Dec 2012 · 4 mos · Bloemfontein, Free State, South Africa</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Assisted students with e-learning materials and lab workflows.</li>
                    <li>Maintained computer lab systems and ensured proper usage of equipment.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm">
              <div className="space-y-2">
                <p>• AWS Certified Cloud Practitioner</p>
                <p>• ISTQB Certified Tester Foundation Level</p>
                <p>• Microsoft Certified: Azure Fundamentals</p>
              </div>
              <div className="space-y-2">
                <p>• Microsoft Certified: Azure AI Fundamentals</p>
                <p>• Microsoft Certified: Power Platform Fundamentals</p>
                <p>• Microsoft Certified: Azure Data Fundamentals</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-3xl border border-blue-400/20 bg-blue-500/5 backdrop-blur-sm shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-white">GitHub Guide</h3>
            <p className="text-gray-300 mb-4">
              My GitHub repos contain the code behind these projects and instructions for running them locally. Use the links below to explore source, clone a project, or review CI pipeline examples.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Clone a repository: <code className="bg-slate-900 px-2 py-1 rounded">git clone https://github.com/RolandBouwer/&lt;repo-name&gt;.git</code>
              </li>
              <li>
                Install dependencies: <code className="bg-slate-900 px-2 py-1 rounded">npm install</code> or <code className="bg-slate-900 px-2 py-1 rounded">pip install -r requirements.txt</code>
              </li>
              <li>
                Run locally: <code className="bg-slate-900 px-2 py-1 rounded">npm run dev</code> or follow the repo README for Python projects.
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://github.com/RolandBouwer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                View GitHub profile
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};