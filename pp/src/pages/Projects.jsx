import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/* -------------------- DATA -------------------- */

const projects = [
  { title: 'Google Calendar Sync', src: '/gcs.png', color: '#095019ff', link: 'https://google-calendar-sync-jet.vercel.app' },
  { title: 'Mini Game Dashboard', src: '/minihub.png', color: '#8C8C8C', link: 'https://minigamedashboard.onrender.com' },
  { title: 'Performly', src: '/performly.png', color: '#EFE8D3', link: 'https://performly-beige.vercel.app' },

];

/* -------------------- ANIMATION -------------------- */

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

/* -------------------- PAGE -------------------- */

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  /* -------------------- GSAP MOUSE FOLLOW -------------------- */

  useEffect(() => {
    const moveContainerX = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    const moveContainerY = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    const moveCursorX = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    const moveCursorY = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    const moveLabelX = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    const moveLabelY = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    const handleMouseMove = (e) => {
      moveContainerX(e.pageX);
      moveContainerY(e.pageY);
      moveCursorX(e.pageX);
      moveCursorY(e.pageY);
      moveLabelX(e.pageX);
      moveLabelY(e.pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* -------------------- JSX -------------------- */

  return (
    <>
      {/* -------- PROJECT LIST -------- */}
      <main style={styles.main}>
        <div style={styles.body}>
          <div style={styles.columnLeft}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={styles.project}
                onMouseEnter={() => setModal({ active: true, index })}
                onMouseLeave={() => setModal({ active: false, index })}
                onClick={() => { if (project.link && project.link !== '#') window.open(project.link, '_blank'); }}
              >
                <h2 style={styles.h2}>{project.title}</h2>
                <p style={styles.p}>Design & Development</p>
              </div>
            ))}
          </div>
          <div style={styles.columnRight}>
            <h1 style={styles.heading}>My Developments</h1>
          </div>
        </div>
      </main>

      {/* -------- MODAL -------- */}
      <motion.div
        ref={modalContainer}
        style={styles.modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? 'enter' : 'closed'}
      >
        <div
          style={{
            ...styles.modalSlider,
            top: modal.index * -100 + '%',
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                ...styles.modal,
                backgroundColor: project.color,
              }}
            >
              <img
                src={project.src}
                alt="project"
                style={{
                  width: '300px',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* -------- CURSOR -------- */}
      <motion.div
        ref={cursor}
        style={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? 'enter' : 'closed'}
      />

      <motion.div
        ref={cursorLabel}
        style={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
}

/* -------------------- STYLES -------------------- */

const styles = {
  heading: {
    fontSize: '30px', // Bigger than h2 (60px)
    fontWeight: 400,
    marginBottom: '80px', // Add some space below the heading
    color: '#000000',
    textAlign: 'left', // Center the heading
  },
  main: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Ensure background is white as per design
  },
  body: {
    width: '1000px',
    maxWidth: '90%', // Add max-width for some responsiveness
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
  },
  columnLeft: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  columnRight: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50px',
  },
  project: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 20px',
    borderTop: '1px solid #c9c9c9',
    cursor: 'pointer',
    color: '#000000', // Ensure text is visible
  },
  h2: {
    fontSize: '60px',
    fontWeight: 400,
    margin: 0,
  },
  p: {
    fontWeight: 300,
  },
  modalContainer: {
    position: 'absolute',
    height: '350px',
    width: '400px',
    backgroundColor: 'white',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 10, // Ensure it's above other content
  },
  modalSlider: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
  },
  modal: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cursor: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#455CE9',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 11,
  },
  cursorLabel: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 300,
  },
};