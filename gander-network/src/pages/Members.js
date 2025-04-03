import React, { useState } from 'react';
import './Members.css';

function Members() {
  const [activeTab, setActiveTab] = useState(0);

  const members = [
    {
      name: 'Yvonne Coady',
      title: 'Director',
      organization: 'University of Victoria',
      photo: 'yvonne.jpg',
      description: "Dr. Yvonne Coady is a full professor at the University of Victoria who is focused on performant cloud computing systems. She holds an NSERC discovery award in petabyte scale computing that leverages data from the ongoing acquisition of satellite imagery. Yvonne has a lifelong dedication to teaching and students, and finds ways to integrate high performance computing to bolster these interests. In the spring of 2024, Yvonne was successful in getting her course on Culturally Aware AI accredited by CIFAL/UNITAR, an arm of the United Nations focused on education and sustainable development goals."
    },
    {
      name: 'Will Parkinson',
      title: 'collaborator',
      organization: 'Earth Daily Analytics',
      photo: 'will.jpg',
      description: "William Parkinson is experienced in remote sensing and machine learning and has a Master of Science in Geography. William focuses on developing technically advanced products that exploit big data and remote sensing for agriculture, forestry, and water management applications. William works closely with stakeholders, including end-users and domain experts in industry, government, and academia, to build tools and services which address the information needs of the next generation of remote sensing users."
    },
    {
      name: 'Derek Jacoby',
      title: 'collaborator',
      organization: 'Pacific Coastal Computing Association',
      photo: 'derekja.jpg',
      description: "Dr. Derek Jacoby is a researcher at the University of Victoria and a board member at the Pacific Coastal Computing Association. Formerly lead program manager of the speech recognition team at Microsoft Research, Derek is interested in machine learning domains that are characterized by large minimally structured data sets. This includes audio data in speech recognition, biological data, and satellite and imagery data in geospatial analytics. Derek was the development manager on a large 3 year National Research Council project in geospatial analytics which included the development of imagery stacks that aligned data from terrestrial sources, aerial sources, and satellite imagery."
    },
    {
      name: 'nico preston',
      title: 'collaborator',
      organization: 'RCCbc',
      photo: 'nico.png',
      description: "Data scientist and paramedic with expertise in health, technology, and innovation. Nico is passionate about leveraging emerging technologies to inform situation awareness in complex emergencies. Brings expertise in data science, data-driven web applications, emergency management, software engineering, and technical project management."
    },
    {
      name: 'david obert',
      title: 'collaborator',
      organization: 'UBC',
      photo: 'david.png',
      description: "Physician and senior healthcare leader with a keen interest and expertise in realizing system-level solutions to complex challenges. Trained in emergency and prehospital medicine with an additional specialization in public policy, David combines an ED-honed approach to innovative problem-solving with the ability to effectively implement change in large organizations."
    },
    {
      name: 'julita Vassileva',
      title: 'collaborator',
      organization: 'University of Saskatchewan',
      photo: 'julita.jpg',
      description: "Julita Vassileva is a professor of computer science at the University of Saskatchewan, Canada. Her research areas involve human issues in decentralized software environments: user modeling and personalization, designing incentive mechanisms for encouraging participation and facilitating trust in decentralized software applications, such as online communities, social networks, multi-agent systems and peer-to-peer systems."
    },
    {
      name: 'rita orji',
      title: 'collaborator',
      organization: 'Dalhousie University',
      photo: 'rita.jpg',
      description: "I am a Canada Research Chair in Persuasive Technology and a Full Professor at the Faculty of Computer Science, Dalhousie University where I direct the Persuasive Computing Lab. My research areas include Human-Computer Interaction, Persuasive Technology, Games for Change, and Digital Health. My research group is particularly interested in investigating user-centered approaches to designing interactive systems to motivate people for actions and causes that are beneficial for them and their communities as well as how interactive systems can be designed for the under-served population (HCI for Development (HCI4D)). We apply our research to tackle real-life problems in various domains including to improve a wide range of health and wellness behaviours such as sexual and other health risk behaviours, healthy eating, physical activity, mental health, and smoking cessation. I am part of the Human-Computer Interaction (HCI), Visualization and Graphics. My work is funded by NSERC Discovery Grant. Previously, I was a Banting postdoctoral fellow at the University of Waterloo. I graduated with a Ph.D. in Computer Science from the University of Saskatchewan as a Vanier Scholar."
    },
    {
      name: 'Jonnie Bedall',
      title: 'collaborator',
      organization: '',
      photo: 'jonnie.jpg',
      description: "Maj Jonnie Beddall is a British military intelligence Officer with 12 years' experience tackling the defining security policy challenges. Serving with Defence Intelligence, he worked extensively in the multi-national context, deploying four times with the United Nations, NATO, and on Counter Terror operations, and directing multiple overseas operations for two years. Working with Canada in Iraq and Latvia, he has deep practitioner experience of allied and Canadian security demands. Establishing an extensive academic network at the heart of British and international security reform, he looks to leverage the network to address security policy challenges, as learnt from his lived experience. He is a Master of Public Policy graduate from Oxford's School of Government, Sword of Honour winner from the Royal Military Academy Sandhurst, and with First Class honours from the University of Exeter."
    },
    {
      name: 'Ryan Rad',
      title: 'collaborator',
      organization: 'Northeastern University',
      photo: 'ryan.jpg',
      description: "Ryan M. Rad is an assistant teaching professor at the Khoury College of Computer Sciences at Northeastern University in Vancouver. He earned his bachelor's in computer engineering from the University of Guilan, his master's in computer science from the University of Malaya, and his PhD in applied sciences from Simon Fraser University. His areas of teaching include machine learning, data analytics, and visualization software engineering algorithms. Rad is currently research active in computational biology, machine learning, and personal health informatics."
    },
    {
      name: 'Aanchan Mohan',
      title: 'collaborator',
      organization: 'Northeastern University',
      photo: 'aanchan.jpg',
      description: "Dr. Aanchan Mohan is an assistant teaching professor at the Khoury College of Computer Sciences in Vancouver. Dr. Mohan's areas of teaching are machine learning, natural language processing, and speech recognition. Along with his role at Northeastern, Dr. Mohan is a lead data scientist at Global Relay, a provider of compliant electronic communications archiving, messaging, supervision, information governance, and eDiscovery. He is also currently a research faculty member at the Indraprastha Institute of Information Technology in New Delhi, India. Until 2021, Dr. Mohan was the director of technology at Synaptitude Brain Health, where he assembled and managed a team to build a product that delivered brain health assessment and coaching. Dr. Mohan has held various research scientist roles at Mio Global, Malaspina Labs, and Nuance–all based in Canada. In 2015, he received his doctorate from McGill University in Montreal, Canada where he focused on multi-lingual speech recognition and transfer learning"
    },
    {
      name: 'Ashlin Richardson',
      title: 'collaborator',
      organization: 'BC Wildfire Service',
      photo: 'ash.png',
      description: "As an interdisciplinary data scientist, engineer, developer and communicator I compassionately seek the evidence-based insight so vital for advancement, while approaching business with a view of constantly improving relationships. Applying extensive practical expertise in computing science, mathematical statistics and information theory I work with large organizations helping to explore their large heterogeneous data, achieving rigorous understanding to support enhanced decision capability. Industry and technology agnostic, I work from a foundation in scientific computing and signal processing for environment monitoring, especially multitemporal geospatial data fusion and physical interpretation, with business accomplishments including consulting with science, engineering, financial and health services industries. I am a formidable technical writer conducting literary research for science, engineering, legal and patent applications."
    },
    {
      name: 'Riad Hartani',
      title: 'collaborator',
      organization: 'Xona Partners',
      photo: 'riad.png',
      description: "Riad is based in Vancouver. He has spent the last two decades contributing to the development of Internet, mobile and artificial intelligence technologies, mostly in Silicon Valley where he participated in building multiple leading technology startups, advising on strategic investments and rolling out innovative technologies all over the world. He led many industry firsts in the areas of wireless and Internet network design, cloud and big data architectures and artificial intelligence. He is well versed in the technology startups, innovation and investment ecosystems globally. He has lived and worked in diverse regions of the world, gaining a broad understanding of cross-cultural technology management and business development. Riad was inducted in the 'New Internet' Hall of fame in 2022. Riad brings unique expertise in a broad set of network, cloud, data center and AI technologies."
    },
    {
      name: 'Frank Rayal',
      title: 'collaborator',
      organization: 'Xona Partners',
      photo: 'frank.png',
      description: "Frank brings over 25 years of experience in the telecommunication infrastructure market having started his career building the first wireless networks in North and South America and Europe. He is a founding partner of Xona Partners. Prior to Xona, Frank co-founded BLiNQ Networks, a Nortel spin-out that developed intelligent backhaul systems for small cells. Frank held senior product management positions and global P&L responsibilities at Redline Communications, Metawave Communications and Ericsson. Prior to working with vendors he was on the very first engineering team responsible for designing and launching Clearnet's iDEN and CDMA networks (later acquired by Telus). He also participated in the buildout and optimization of mobile networks for Nextel (US, Argentina) and Cellnet (UK)."
    },
    {
      name: 'Harvey Hawes',
      title: 'collaborator',
      organization: 'LHS Labs',
      photo: 'harvey.jpg',
      description: "Dr. Harvey Hawes brings 20 years of experience as a trauma surgeon, innovator, and health systems development in diverse regions, including Canada's north, Fiji, and East Africa. He is currently serving as Provincial Trauma Medical Director for British Columbia. As former Director of ICChange, Harvey led initiatives to secure funding and support for system improvements, notably from Grand Challenges Canada. He played a pivotal role in developing Kenya's National Trauma and Injury Framework and Injury Policy."
    }
  ];

  return (
    <div className="members">
      <h1>Our Members</h1>
      <p className="members-intro">
        Our membership will expand as the network expands! Please email
         <a href="mailto:gander@coastalcomputing.ca"> gander@coastalcomputing.ca</a>
         &nbsp; if you would like to be listed on this page!
      </p>
      <div className="tabs">
        {members.map((member, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {member.name}
          </button>
        ))}
      </div>
      <div className="member-content">
        <div className="member-info">
          <div className="member-photo">
            {members[activeTab].photo ? (
              <img 
                src={`/photos/${members[activeTab].photo}`} 
                alt={members[activeTab].name}
              />
            ) : (
              <div className="placeholder-photo"></div>
            )}
          </div>
          <div className="member-details">
            <h2>{members[activeTab].name}</h2>
            {members[activeTab].title && <h3>{members[activeTab].title}</h3>}
            {members[activeTab].organization && <h4>{members[activeTab].organization}</h4>}
            <p>{members[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;