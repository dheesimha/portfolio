import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project-section">
        <h1>Projects developed</h1>
      </div>

      <div className="project-content">
        <div className="project1">
          <div className="project1-image">
            <img
              className="tr-img"
              src="/kickstarter-thumbnail.jpg"
              alt="ThoughtRoom"
            />
          </div>
          <div className="project1-content">
            <h1>
              <em> Kickstarter</em>
            </h1>
            <h2>Project Description</h2>
            <p>
              An AI tool for investors to assess startups. The investors and VCs
              can validate whether their investment in a particular company
              would turn out to be successful or not based on fundamentals and
              financial data.
            </p>
            <h2>Key features</h2>
            <ul>
              <li>
                Implementation of Random Forest Algorithm, with an accuracy of
                85.9% in the results provided. Model pickled and implemented as
                REST endpoint.
              </li>
              <li>
                A graphical comparison of the current company’s stats with the
                companies that proved to be a good investment, covering
                important parameters.
              </li>
              <li>
                A final verdict provided to the end user with an appropriate
                reasoning.
              </li>
            </ul>
            <h2>Tech stack </h2>
            <ul>
              <li>
                Languages/Frameworks: Python, scikit-learn,
                TensorFlow,uvicorn,Sveltekit, MongoDB, Mongoose, Tailwind CSS,
                Railway, FastAPI
              </li>
            </ul>
            <h2>View project</h2>
            <p>
              <a
                href="https://kickstarter-ai.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the project
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project1-image">
            <img
              className="tr-img"
              src="/thoughtroom-img.png"
              alt="ThoughtRoom"
            />
          </div>
          <div className="project1-content">
            <h1>
              <em> ThoughtRoom</em>
            </h1>
            <h2>Project Description</h2>
            <p>
              A blogging web app powered by REST architecture and a platform to
              study, comprehend, like and share thoughts and ideas. Designed
              with an elegant UI/UX and a seamless platform to blog about a
              multitude of topics.
            </p>
            <h2>Key features</h2>
            <ul>
              <li>
                An interface to create content and share ideas ,submission
                creates a POST request to the backend.
              </li>
              <li>
                Feature to like a thought which on click updates the number of
                likes via a PATCH request.
              </li>
              <li>
                Global state management via Redux and token based authentication
                and authorization via JWT
              </li>
            </ul>
            <h2>Tech stack </h2>
            <ul>
              <li>
                Languages/Frameworks:
                ReactJS,ExpressJS,NodeJS,MongoDB,Mongoose,Redux+Redux Toolkit
                for State Management
              </li>
              <li>
                Implementation: JWT token based authentication and authorization
                along with refresh tokens,database password hashing using
                bCrypt,CORS,cross-environment development,protected routes and
                deployment via Railway.
              </li>
            </ul>
            <h2>View project</h2>
            <p>
              <a
                href="https://thoughtroom.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the project
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project1-image">
            <img
              className="acl-img"
              src="/anticorruption.jpg"
              alt="AntiCorruption Ledger logo"
            />
          </div>
          <div className="project1-content">
            <h1>
              <em> AntiCorruption Ledger [Blockchain and Web3]</em>
            </h1>
            <h2>Project Description</h2>
            <p>
              An end-to-end, foolproof ledger that can track all the incoming
              and outgoing transactions pertaining to a cause.
            </p>
            <h2>Key features</h2>
            <ul>
              <li>
                This blockchain-based web app allows users to track where their
                money is being spent which is often a question mark whenever a
                user makes a donation to an NGO or a cause.
              </li>
              <li>
                The primary use case is to achieve 100% transparency and
                eliminate corruption completely in donations and legal tenders.
              </li>
            </ul>
            <h2>Tech stack </h2>
            <ul>
              <li>
                Languages/ Frameworks: ReactJS,NodeJS,Solidity,CSS,Express
              </li>
              <li>
                Other Tools: Axios Library,Truffle Suite,Ganache[Local
                Blockchain],Ethers js library,Metamask ,Remix IDE,Json- Server
              </li>
            </ul>
            <h2>View project</h2>
            <p>
              <a
                href="https://github.com/dheesimha/anticorruptionledger"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the project on Github
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project1-image">
            <img className="btc-img" src="/btc-image.jpg" alt="bitcoin" />
          </div>
          <div className="project1-content">
            <h1>
              <em> DeCrypt</em>
            </h1>
            <h2>Project Description</h2>
            <p>A customized collection of your wishlist cryptocurrencies.</p>
            <h2>Key features</h2>
            <ul>
              <li>
                This web app allows real-time and live cryptocurrency tracking
                in INR.
              </li>
              <li>
                The user can select his or her coins of interest and keep track
                of them without having to search in a stack of coins every time.
              </li>
            </ul>
            <h2>Tech stack </h2>
            <ul>
              <li>
                Languages/ Frameworks: HTML5, CSS3,Bootstrap, JavaScript,
                EJS,Express
              </li>
              <li>Other Tools: Binance Websockets, NPM packages,ROBO 3T</li>
              <li>Database: MongoDB (NoSQL)</li>
            </ul>
            <h2>View project</h2>
            <p>
              <a
                href="https://github.com/dheesimha/deCrypt"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the project on Github
              </a>
            </p>
          </div>
        </div>
        <hr />

        <div className="project1">
          <div className="project1-image">
            <img className="cfg-img" src="/m2d.png" alt="mill2door logo" />
          </div>
          <div className="project1-content">
            <h1>
              <em>Mill2Door</em>
            </h1>
            <h2>Project Description</h2>
            <p>
              Designed, developed, and managed the frontend and the backend of
              an e-commerce site using WordPress and Woocommerce. Integrated
              payment gateway via Razorpay API and embedded Facebook Pixel and
              Google Analytics to track user interactions and behavior to arrive
              at essential inferences.
            </p>
            <h2>Key features</h2>
            <ul>
              <li>
                Integrated payments feature via Razorpay API to support
                credit,debit cards,UPI and payment wallets.
              </li>
              <li>
                Ranked close to 5 products on the first page of Google's Search
                Engine Result Page in 3 months via
                <strong> Search Engine Optimization </strong>, alongside huge
                E-commerce giants such as Amazon, Flipkart, and BigBasket.
              </li>
              <li>
                Designed, Curated, and Automated Facebook and Instagram Ads to
                increase the <strong> ROI by 9 times</strong> via Facebook Pixel
                and conversion campaigns.
              </li>
            </ul>
            <h2>Tech stack </h2>
            <ul>
              <li>
                Wordpress,Elementor and Woocommerce for frontend and backend
              </li>
              <li>Keywords anywhere and Ubersuggest for SEO</li>
              <li>
                Facebook Pixel to track user behavior and Google Analytics to
                view and draw critical insights about target metrics.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project1-image">
            <img
              className="rpa-img"
              src="/rpa.jpg"
              alt="a robot automating tasks"
            />
          </div>
          <div className="project1-content">
            <h1>
              <em>Stock recommendation system</em>
            </h1>
            <h2>Project Description</h2>
            <p>
              A recommendation system based on Robotic Process Automation to
              suggest an ideal stock among NIFTY 50 for the investor to buy/sell
              at a given instant of time.
            </p>
            <h2>Key features</h2>
            <ul>
              <li>
                A recommendation system based on Robotic Process Automation to
                suggest an ideal stock among NIFTY 50 for the investor to
                buy/sell at a given instant of time.
              </li>
              <li>
                Generates report for the top 50 NIFTY stocks along with
                comprehensive overview of all the metrics.
              </li>
              <li>
                Suggestion of top 5 stocks to buy and top 5 stocks to sell at
                any given instant with a single click .
              </li>
            </ul>
            <h2>Tech stack </h2>
            <ul>
              <li>Automation anywhere community edition</li>
              <li>Automation anywhere enterprise edition</li>
              <li>Bot Lab</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project1-image">
            <img
              className="networking-img"
              src="/networking.jpg"
              alt="network of computers"
            />
          </div>
          <div className="project1-content last-content">
            <h1>
              <em>Wired Campus Network</em>
            </h1>
            <h2>Project Description</h2>
            <p>
              Designed and developed a suitable network system for universities
              in developing countries. The aim was to create a network with high
              security and low cost. This project was developed to accelerate
              the growth of education in developing countries.
            </p>
            <h2>Key features</h2>
            <ul>
              <li>
                Representation of the topology of the network to be implemented
                and configured.
              </li>
              <li>
                Implementation of VLANs,MAC address filtering and keeping the
                network up to date.
              </li>
              <li>
                Usage of protocols such as RIP v2.0 ,STP and multi layer
                switching and routing
              </li>
            </ul>
            <h2>Tech stack </h2>
            <p>Cisco Packet Tracer</p>
            <h2>View project</h2>
            <p>
              <a
                href="https://github.com/dheesimha/wired-intercampus-network"
                rel="noreferrer"
                target="_blank"
              >
                Click to view the project on Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
