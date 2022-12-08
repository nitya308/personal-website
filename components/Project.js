import styles from '../styles/project.module.css';
import React from 'react'
import OnVisible from 'react-on-visible';
import clsx from 'clsx';

const renderImage = (project, left) => (
  <div className={clsx({
    [styles.projectImage]: true,
    [styles.left]: left,
    [styles.right]: !left
  })}>
    <img
      src={project.img}
      alt={project.title}>
    </img>
  </div>
);

const renderText = (project, left) => (
  <div className={clsx({
    [styles.projectImage]: true,
    [styles.left]: left,
    [styles.right]: !left,
    [styles.projectTextLeftMargin]: !left,
    [styles.projectTextRightMargin]: left
  })}>
    {project.description}
    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>here</a>}.
    <div className={styles.projectTech}> <b>Tech Stack:</b> <i>{project.techStack}</i></div>
  </div>
);

export default function Project({ containerStyle, project }) {
  return (
    <OnVisible visibleClassName={styles.visible} className={styles.projectContainer} style={containerStyle}>
      <div className={styles.projectHeading}>
        <div className={styles.projectTitle}>{project.title}</div>
        <div className={styles.projectSubTitle}>
          <div style={{ fontWeight: 400 }}>{project.dates}</div>
          <div>{project.partners}</div>
        </div>
      </div>
      <div className={styles.projectDescription}>
        {(project.key % 2 == 0) ? renderImage(project, true) : renderText(project, true)}
        {(project.key % 2 == 0) ? renderText(project) : renderImage(project)}
      </div>
      {/* link to read more about project */}
    </OnVisible>
  );
}