import React from 'react'

function Project() {
  let ProjectList = [
    {
      img: require("../img/smart_fashion.png"),
      title: 'smart fashion',
      skill: ['html', 'css', 'js', 'php', 'sql']
    },
    {
      img: require("../img/sterling.png"),
      title: 'sterling',
      skill: ['html', 'css', 'js']
    },
    {
      img: require("../img/trawell.png"),
      title: 'trawell',
      skill: ['html', 'css', 'js']
    },
    {
      img: require("../img/portfolio.png"),
      title: 'portfolio',
      skill: ['html', 'css', 'js']
    }
  ]
  return (
    <div className='Project'>
        <div className='ProjectHeader'>
          <h1>Projects</h1>
          <a href='mailto:lubnafathima275@gmail.com'>Contact me</a>
        </div>
        <div className='ProjectList'>
          {ProjectList.map((project) => {
            return (
              <div className='ProjectItem' key={project}>
                  <img src={project.img} alt={project.title} />
                  <h2>{project.title}</h2>
                  <p>
                  {project.skill.map((i) => {
                    return(
                      <span>{i}<br/></span>
                    )})}
                  </p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Project