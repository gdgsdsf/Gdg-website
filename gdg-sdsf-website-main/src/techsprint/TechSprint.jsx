// import React from "react";

// const TechSprint = () => {
//   return (
//     <div className="container my-5">

//       {/* Page Title */}
//       <h1 className="text-center fw-bold mb-4">
//         TechSprint Hackathon 2025-26
//       </h1>

//       {/* About Section */}
//       <div className="card shadow-sm border-0 mb-5">
//         <div className="card-body">
//           <h3 className="mb-3">About the Hackathon</h3>
//           <p>
//             TechSprint Hackathon was an innovation-driven event organized by
//             GDG On Campus – SDSF DAVV. The hackathon encouraged students to
//             build impactful tech solutions, collaborate with peers, and
//             showcase their creativity.
//           </p>
//           <p>
//             Participants worked on real-world problems, developed working
//             prototypes, and presented their ideas before mentors and judges.
//           </p>
//         </div>
//       </div>

//       {/* Winners Section */}
//       <h2 className="text-center fw-semibold mb-4">🏆 Winners</h2>

//       <div className="row">

//         {/* Winner 1 */}
//         <div className="col-md-4 mb-4">
//           <div className="card h-100 shadow-sm">
//             <div className="card-body text-center">
//               <h4 className="card-title">🥇 1st Place</h4>
//               <h5>Team DevNova</h5>
//               <p className="text-muted">Project: InfraSense</p>
//               <p>
//                 An AI-powered solution designed to improve accessibility and
//                 emergency response systems.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Winner 2 */}
//         <div className="col-md-4 mb-4">
//           <div className="card h-100 shadow-sm">
//             <div className="card-body text-center">
//               <h4 className="card-title">🥈 2nd Place</h4>
//               <h5>Team InnovateX</h5>
//               <p className="text-muted">Project: EcoTrack</p>
//               <p>
//                 A sustainability tracking platform that helps monitor and
//                 reduce carbon footprints effectively.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Winner 3 */}
//         <div className="col-md-4 mb-4">
//           <div className="card h-100 shadow-sm">
//             <div className="card-body text-center">
//               <h4 className="card-title">🥉 3rd Place</h4>
//               <h5>Team ByteBuilders</h5>
//               <p className="text-muted">Project: HealthSync</p>
//               <p>
//                 A healthcare coordination platform connecting patients and
//                 local clinics through real-time scheduling.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default TechSprint;














import React from "react";

const TechSprint = () => {
  return (
    <div className="container my-5">

      {/* Banner Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">TechSprint Hackathon 2025-26</h1>
        <p className="lead text-muted">
          An Innovation-Driven Hackathon by GDG On Campus – SDSF DAVV
        </p>
                   {/* About Section */}
       <div className="card shadow-sm border-0 mb-5">
         <div className="card-body">
           <h3 className="mb-3">About the Hackathon</h3>
           <p>
             TechSprint Hackathon was an innovation-driven event organized by
             GDG On Campus – SDSF DAVV. The hackathon encouraged students to
             build impactful tech solutions, collaborate with peers, and
             showcase their creativity.
           </p>
           <p>
             Participants worked on real-world problems, developed working
             prototypes, and presented their ideas before mentors and judges.
           </p>
         </div>
       </div>
      </div>


      {/* Stats Section */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body text-center">
          <h3 className="mb-3">Event Highlights</h3>
          <p className="fs-5">
            🎉 220+ Registrations <br />
            💡 40+ Project Submissions <br />
            🏆 Tier 1 Recognition
          </p>
        </div>
      </div>

      {/* Winners Section */}
      <h2 className="text-center fw-semibold mb-4">🏆 Winners</h2>

      <div className="row">

        {/* 1st Position */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h4 className="text-warning">🥇 1st Position</h4>
              <h5 className="fw-bold">Team DevNova</h5>
              <p className="text-muted">Jahnavi Mishra (SDSF, DAVV)</p>
              <p>
                <strong>Project:</strong> [InfraSense]
              </p>
              <p>
                An AI-powered solution designed to improve accessibility and emergency response systems.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Position */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h4 className="text-secondary">🥈 2nd Position</h4>
              <h5 className="fw-bold">Team RX</h5>
              <p className="text-muted">RouneetRaj Sinha (IET, DAVV)</p>
              <p>
                <strong>Project:</strong> [Project Name]
              </p>
              <p>
                Brief description of the project explaining the problem solved
                and its practical application.
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Position */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h4 className="text-danger">🥉 3rd Position</h4>
              <h5 className="fw-bold">[Team Name]</h5>
              <p className="text-muted">[Winner Name]</p>
              <p>
                <strong>Project:</strong> [Project Name]
              </p>
              <p>
                Brief description of the solution developed by the team.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TechSprint;
