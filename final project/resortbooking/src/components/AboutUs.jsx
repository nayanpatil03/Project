

import React from 'react';
import { FaRocket, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
// import Nitish from '../assets/imagies/nitish.jpg';
import nayan from '../assets/imagies/Nayan.jpg';
import Faisalkhan from '../assets/imagies/Faisalkhan.jpg';
import Nitish from '../assets/imagies/nitish.jpg';

export function AboutUs() {
  // Team data
  const team = [
    {
      id: 1,
      name: 'Faisalkhan Pathan',
      role: 'Backend Developer',
      bio: 'Developed secure and efficient APIs using Express and MySQL.Handled user authentication, booking logic, and database design.',
      // img: 'https://randomuser.me/api/portraits/men/32.jpg'
      img: Faisalkhan
    },
    {
      id: 2,
      name: 'Nayan Patil',
      role: 'Frontend Developer',
      bio: 'Designed an interactive and responsive UI with React and React-Bootstrap.Implemented user-friendly booking forms and dynamic content layouts.',
      // img: 'https://randomuser.me/api/portraits/men/44.jpg'
      img: nayan
    },
    {
      id: 3,
      name: 'Nitish Pawar',
      role: 'Frontend Developer',
      bio: 'Specialized in building visually appealing components with responsive design.Enhanced the user experience through smooth navigation and interactive features.',
      // img: '../'
      img: Nitish
    }
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Discover, Book, and Relax With Ease</h1>
          <p style={styles.heroText}>
            Since our launch in 2015, Resort Finder has been committed to helping travelers discover, compare, and book the perfect resort with ease. Whether you're planning a family vacation, a romantic retreat, or a corporate escape, we bring the best resort experiences to your fingertips.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Commitments to You</h2>
            <p style={styles.sectionSubtitle}>Why travelers trust us for their perfect stays</p>
          </div>

          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.iconContainer}>
                <FaRocket style={styles.icon} />
              </div>
              <h3 style={styles.cardTitle}>Seamless Booking</h3>
              <p style={styles.cardText}>
                Enjoy a smooth and secure reservation process from start to finish — no hassle, just clicks.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.iconContainer}>
                <FaUsers style={styles.icon} />
              </div>
              <h3 style={styles.cardTitle}>Trusted Stays</h3>
              <p style={styles.cardText}>
                We partner with verified resorts to ensure comfort, safety, and unforgettable experiences.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.iconContainer}>
                <FaHandshake style={styles.icon} />
              </div>
              <h3 style={styles.cardTitle}>Customer First</h3>
              <p style={styles.cardText}>
                Your satisfaction is our priority — our team is here to help before, during, and after your stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{...styles.section, backgroundColor: '#fff'}}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Meet Our Team</h2>
            <p style={styles.sectionSubtitle}>The brilliant minds behind our success</p>
          </div>

          <div style={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.id} style={styles.teamCard}>
                <div style={styles.teamImg}>
                  <img src={member.img} alt={member.name} style={styles.memberImage} />
                </div>
                <div style={styles.teamInfo}>
                  <h3 style={styles.memberName}>{member.name}</h3>
                  <p style={styles.memberRole}>{member.role}</p>
                  <p style={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: 1.6,
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
  },
  hero: {
    background: 'linear-gradient(135deg,rgb(49, 54, 82), #a777e3)',
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center',
    position: 'relative',
  },
  heroContent: {
    maxWidth: 800,
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: 700,
  },
  heroText: {
    fontSize: '1.2rem',
    maxWidth: 700,
    margin: '0 auto 30px',
  },
  section: {
    padding: '80px 0',
    backgroundColor: '#f9f9f9',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  sectionSubtitle: {
    color: '#7f8c8d',
    fontSize: '1.1rem',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  valueCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)',
    },
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    margin: '0 auto 20px',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    fontSize: '2rem',
  },
  cardTitle: {
    marginBottom: '15px',
    color: '#2c3e50',
  },
  cardText: {
    color: '#7f8c8d',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  teamCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)',
    },
  },
  teamImg: {
    height: '250px',
    overflow: 'hidden',
  },
  memberImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  teamInfo: {
    padding: '25px',
    textAlign: 'center',
  },
  memberName: {
    marginBottom: '5px',
    color: '#2c3e50',
  },
  memberRole: {
    color: '#a777e3',
    fontWeight: 600,
    marginBottom: '15px',
  },
  memberBio: {
    color: '#7f8c8d',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    textAlign: 'center',
  },
  statItem: {
    color: 'white',
  },
  statNumber: {
    fontSize: '3rem',
    margin: '20px 0 10px',
    fontWeight: 700,
  },
  statText: {
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  statIcon: {
    fontSize: '3rem',
    color: 'rgba(255, 255, 255, 0.2)',
  },
};

 

