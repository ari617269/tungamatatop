// newsData.js

const business = [
  {
    id: 'b1',
    heading: 'Reliance Industries Reports 12% YoY Revenue Growth',
    text:
      'Reliance Industries Ltd (RIL) announced a 12% year-on-year increase in consolidated revenues for Q4 FY2024-25, driven primarily by robust performance in the retail and digital services segments. Jio Platforms saw a 15% jump in subscriber additions, while Reliance Retail expanded its footprint across tier-2 and tier-3 cities. Analysts predict continued momentum as RIL invests further in renewable energy projects and telecom infrastructure.',
    image: 'https://picsum.photos/400/200?random=101',
    author: 'Priya Sharma',
    date: 'March 2, 2025',
    medium: 'Economic Times',
  },
  {
    id: 'b2',
    heading: 'Tata Motors Q4 Profit Surges on Strong Utility Vehicle Sales',
    text:
      'Tata Motors posted a 20% increase in net profit for Q4 FY2024-25, attributing the gain to higher volumes of utility vehicles (UVs) and improved operating margins in its Jaguar Land Rover division. Domestic UV sales grew 18%, with the Nexon and Harrier models leading the charge. The company also announced plans to launch two new electric vehicle (EV) models by mid-2025.',
    image: 'https://picsum.photos/400/200?random=102',
    author: 'Rohit Verma',
    date: 'March 5, 2025',
    medium: 'Business Standard',
  },
  {
    id: 'b3',
    heading: 'Infosys Secures $500 Million Digital Transformation Contract',
    text:
      'Infosys Ltd has secured a $500 million digital transformation engagement with a leading global bank, focusing on cloud migration, AI-driven analytics, and cybersecurity. The three-year contract will see Infosys deploy its Finacle core banking solution and NexGen AI platform to modernize the client’s infrastructure. This deal marks Infosys’ largest financial services win in India this quarter.',
    image: 'https://picsum.photos/400/200?random=103',
    author: 'Ananya Rao',
    date: 'March 8, 2025',
    medium: 'Mint',
  },
  {
    id: 'b4',
    heading: 'Adani Group to Invest ₹10,000 Crore in Renewable Energy Projects',
    text:
      'Adani Group announced plans to invest ₹10,000 crore in renewable energy projects across Rajasthan and Gujarat. The group aims to add 1,500 MW of solar capacity and 500 MW of wind capacity by December 2025. This ambitious expansion is part of Adani’s target to reach 25 GW of renewable energy capacity by FY2025-26.',
    image: 'https://picsum.photos/400/200?random=104',
    author: 'Vikram Singh',
    date: 'March 15, 2025',
    medium: 'The Hindu BusinessLine',
  },
  {
    id: 'b5',
    heading: 'HDFC Bank Launches Digital Lending Platform for SMEs',
    text:
      'HDFC Bank introduced a new digital lending platform aimed at small and medium enterprises (SMEs). The platform offers instant loan approvals up to ₹50 lakh with competitive interest rates and minimal documentation. The bank expects to disburse over ₹2,000 crore in SME loans through the platform by the end of FY2024-25.',
    image: 'https://picsum.photos/400/200?random=105',
    author: 'Deepa Nair',
    date: 'March 22, 2025',
    medium: 'Times of India',
  },
];

const politics = [
  {
    id: 'p1',
    heading: 'Parliament Passes Bill to Amend Data Privacy Rules',
    text:
      'Lok Sabha passed the Data Privacy (Amendment) Bill, 2025, aimed at strengthening user data protection by introducing stricter consent requirements and higher penalties for breaches. The bill mandates localization of certain categories of sensitive personal data on Indian servers. Civil society groups have welcomed the move, though some industry bodies have raised concerns about increased compliance costs.',
    image: 'https://picsum.photos/400/200?random=201',
    author: 'Sunita Kulkarni',
    date: 'March 3, 2025',
    medium: 'Hindustan Times',
  },
  {
    id: 'p2',
    heading: 'West Bengal Assembly Elections Scheduled for May 2025',
    text:
      'The Election Commission has announced that the West Bengal Assembly elections will be held in May 2025 over seven phases. The ruling Trinamool Congress (TMC) is gearing up to defend its stronghold, while the Bharatiya Janata Party (BJP) and Left Front aim to make significant inroads. Analysts predict a closely contested battle, with caste dynamics and economic issues taking center stage.',
    image: 'https://picsum.photos/400/200?random=202',
    author: 'Arvind Menon',
    date: 'March 6, 2025',
    medium: 'India Today',
  },
  {
    id: 'p3',
    heading: 'Centre Announces ₹1,200 Crore Relief Package for Flood-Affected States',
    text:
      'The Central Government approved a ₹1,200 crore relief package for Assam, Bihar, and Uttar Pradesh following severe floods that displaced thousands. Funds will be used for rebuilding infrastructure, providing temporary shelters, and supplying essential commodities. Prime Minister addressed the nation, assuring swift assistance and coordination with state authorities.',
    image: 'https://picsum.photos/400/200?random=203',
    author: 'Meera Desai',
    date: 'March 11, 2025',
    medium: 'NDTV',
  },
  {
    id: 'p4',
    heading: 'Opposition Leaders Meet to Form Pre-Poll Alliance in Tamil Nadu',
    text:
      'Several regional party leaders in Tamil Nadu convened in Chennai to discuss forming a pre-poll alliance ahead of the 2026 Assembly polls. The meeting, attended by DMK, CPI(M), and smaller regional outfits, focused on seat-sharing arrangements and a common minimum program. Analysts note the alliance’s potential to challenge the incumbent AIADMK government.',
    image: 'https://picsum.photos/400/200?random=204',
    author: 'Kavita Nair',
    date: 'March 17, 2025',
    medium: 'The Hindu',
  },
  {
    id: 'p5',
    heading: 'Supreme Court to Hear Challenge on Farm Laws Next Week',
    text:
      'The Supreme Court has scheduled hearings for April 1, 2025, on petitions challenging the Centre’s recent farm laws. Farmers’ unions, which have staged nationwide protests, argue that the laws undermine minimum support price (MSP) mechanisms. The government contends that the reforms will modernize agriculture and boost farmer incomes.',
    image: 'https://picsum.photos/400/200?random=205',
    author: 'Raghav Bahl',
    date: 'March 24, 2025',
    medium: 'Scroll.in',
  },
];

const sports = [
  {
    id: 's1',
    heading: 'India Wins ODI Series Against Australia in Melbourne',
    text:
      'India clinched the 3-match ODI series against Australia 2–1 after a convincing 45-run victory in Melbourne. Virat Kohli starred with an unbeaten 112, while Jasprit Bumrah took 3 wickets. This is India’s first series win in Australia since 2018 and bolsters their confidence ahead of the World Cup.',
    image: 'https://picsum.photos/400/200?random=301',
    author: 'Sanjay Aggarwal',
    date: 'March 4, 2025',
    medium: 'ESPNcricinfo India',
  },
  {
    id: 's2',
    heading: 'IPL 2025 Auction Sees Record ₹15 Crore Bid for KL Rahul',
    text:
      'The IPL 2025 player auction witnessed a record hammer price of ₹15 crore for batsman KL Rahul, making him the most expensive player in this season’s auction. Rajasthan Royals secured his services after a fierce bidding war with Mumbai Indians. The auction also saw several uncapped players grab attention with competitive bids.',
    image: 'https://picsum.photos/400/200?random=302',
    author: 'Nidhi Gupta',
    date: 'March 9, 2025',
    medium: 'Cricbuzz',
  },
  {
    id: 's3',
    heading: 'Indian Women’s Hockey Team Qualifies for Paris 2025 Olympics',
    text:
      'The Indian women’s hockey team secured their berth for the Paris 2025 Olympics by defeating Japan 3–2 in the Asian Olympic Qualifiers final held in Tokyo. Captain Rani Rampal scored a brace, while Savita Punia made crucial saves in goal. This marks India’s third consecutive Olympics qualification in women’s hockey.',
    image: 'https://picsum.photos/400/200?random=303',
    author: 'Anita Bhardwaj',
    date: 'March 14, 2025',
    medium: 'The Hindu Sportstar',
  },
  {
    id: 's4',
    heading: 'PV Sindhu Announces Retirement from Professional Badminton',
    text:
      'Two-time Olympic medallist PV Sindhu announced her retirement from professional badminton at the age of 28. Sindhu, who won the gold at the 2023 World Championships, cited recurring injuries and a desire to focus on mentoring young talent. Tributes poured in from across the sporting fraternity.',
    image: 'https://picsum.photos/400/200?random=304',
    author: 'Rajesh Menon',
    date: 'March 18, 2025',
    medium: 'Hindustan Times',
  },
  {
    id: 's5',
    heading: 'Asian Games: India Tops Medal Tally on Day 3',
    text:
      'India led the medal tally at the 2025 Hangzhou Asian Games after Day 3, securing 15 medals (6 gold, 5 silver, 4 bronze). Notable performances included Neeraj Chopra’s gold in javelin and Lakshya Sen’s bronze in badminton singles. The contingent aims to surpass its 2018 medal haul with strong showings in shooting and wrestling.',
    image: 'https://picsum.photos/400/200?random=305',
    author: 'Mehul Dhir',
    date: 'March 27, 2025',
    medium: 'NDTV Sports',
  },
];

const tech = [
  {
    id: 't1',
    heading: 'Tata Consultancy Services Launches Quantum Computing Lab',
    text:
      'Tata Consultancy Services (TCS) inaugurated its first quantum computing research lab in Bengaluru. The facility aims to develop quantum algorithms for banking, healthcare, and logistics. TCS has partnered with IIT Madras and the Centre for Development of Advanced Computing (C-DAC) to accelerate quantum research in India.',
    image: 'https://picsum.photos/400/200?random=401',
    author: 'Sneha Kapoor',
    date: 'March 1, 2025',
    medium: 'The Hindu Tech',
  },
  {
    id: 't2',
    heading: 'JioMart Rolls Out Drone Delivery in Rural Karnataka',
    text:
      'Reliance Retail’s JioMart launched a pilot drone delivery service in select villages of Karnataka, promising same-day delivery of essential goods. The drones can carry up to 5 kg and operate within a 20 km radius. This initiative is part of JioMart’s plan to enhance supply chain efficiency in remote areas.',
    image: 'https://picsum.photos/400/200?random=402',
    author: 'Arjun Mehta',
    date: 'March 7, 2025',
    medium: 'FactorDaily',
  },
  {
    id: 't3',
    heading: 'Google India Unveils AI-Based Agricultural Tool for Farmers',
    text:
      'Google India introduced “KrishiGPT,” an AI-powered chatbot designed to help farmers with crop diagnostics, weather forecasts, and market price predictions. Available in five Indian languages, the tool leverages Google’s TensorFlow models and satellite imagery to provide real-time insights. Early pilots in Punjab have shown a 12% increase in yield accuracy.',
    image: 'https://picsum.photos/400/200?random=403',
    author: 'Kavya Nair',
    date: 'March 13, 2025',
    medium: 'YourStory',
  },
  {
    id: 't4',
    heading: 'Flipkart Partners with Ola Electric for EV Charging Stations',
    text:
      'Flipkart announced a partnership with Ola Electric to install EV charging stations at Flipkart warehouses and fulfillment centers across India. The move supports Flipkart’s goal to transition 40% of its logistics fleet to electric vehicles by 2026. Initial installations will begin in Maharashtra and Karnataka.',
    image: 'https://picsum.photos/400/200?random=404',
    author: 'Rekha Patel',
    date: 'March 20, 2025',
    medium: 'Inc42',
  },
  {
    id: 't5',
    heading: 'BYJU’S Launches VR-Based Learning App for K-12 Students',
    text:
      'Edtech giant BYJU’S launched a new virtual reality (VR) learning application aimed at K-12 students. The app features interactive 3D modules for science and mathematics, allowing students to visualize complex concepts. BYJU’S CEO stated that early trials in Delhi and Mumbai schools have shown a 25% improvement in student engagement.',
    image: 'https://picsum.photos/400/200?random=405',
    author: 'Nikhil Desai',
    date: 'March 29, 2025',
    medium: 'Economic Times Tech',
  },
];

const economics = [
  {
    id: 'e1',
    heading: 'RBI Maintains Repo Rate at 6.50% Amid Inflation Concerns',
    text:
      'The Reserve Bank of India (RBI) announced that it will maintain the repo rate at 6.50% during its March 2025 policy review. While inflation remains above the 4% target, the RBI highlighted easing crude prices and stable monsoon forecasts as factors supporting its stance. Credit growth was reported at 13% year-on-year in February.',
    image: 'https://picsum.photos/400/200?random=501',
    author: 'Bhavika Rao',
    date: 'March 4, 2025',
    medium: 'Business Standard',
  },
  {
    id: 'e2',
    heading: 'India’s GDP Growth Projected at 7.1% for FY2025-26',
    text:
      'The Finance Ministry released its first advance estimates, forecasting India’s GDP to grow at 7.1% in FY2025-26. Key drivers include robust private consumption, increased capital expenditure by the government, and a pickup in rural demand. Analysts caution that global headwinds and crude price volatility could temper the outlook.',
    image: 'https://picsum.photos/400/200?random=502',
    author: 'Suresh Nair',
    date: 'March 10, 2025',
    medium: 'Mint',
  },
  {
    id: 'e3',
    heading: 'India’s Trade Deficit Narrows to $12 Billion in February',
    text:
      'India’s merchandise trade deficit narrowed to $12 billion in February 2025, compared to $14.5 billion in January. Exports rose 8% YoY to $37 billion, led by shipments of petroleum products and pharmaceuticals. Imports declined by 3%, reflecting lower gold and crude oil purchases. The government aims to achieve a $300 billion export target for FY2025-26.',
    image: 'https://picsum.photos/400/200?random=503',
    author: 'Lakshmi Menon',
    date: 'March 18, 2025',
    medium: 'Economic Times',
  },
  {
    id: 'e4',
    heading: 'FDI Inflows Into India Rise 20% to $75 Billion in FY2024-25',
    text:
      'Foreign direct investment (FDI) inflows into India increased by 20% to $75 billion in FY2024-25, according to the Department for Promotion of Industry and Internal Trade (DPIIT). Key sectors attracting FDI include services, computer hardware, and renewable energy. Singapore, Mauritius, and the USA continue to be the top investing countries.',
    image: 'https://picsum.photos/400/200?random=504',
    author: 'Ritika Singh',
    date: 'March 23, 2025',
    medium: 'The Hindu BusinessLine',
  },
  {
    id: 'e5',
    heading: 'Centre Revises Fiscal Deficit Target to 5.8% of GDP',
    text:
      'The Union Government revised its fiscal deficit target for FY2024-25 to 5.8% of GDP from the earlier 6%. The revision follows stronger than expected tax collections and improved disinvestment receipts. Expenditure cuts in non-priority sectors helped narrow the deficit, while capital spending increased by 12% YoY.',
    image: 'https://picsum.photos/400/200?random=505',
    author: 'Manish Gupta',
    date: 'March 30, 2025',
    medium: 'LiveMint',
  },
];

export {
  business,
  politics,
  sports,
  tech,
  economics,
};
