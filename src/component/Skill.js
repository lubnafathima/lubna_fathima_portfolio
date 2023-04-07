import React from 'react'

function Skill() {
    const skillList = ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive'];
    const renderList = skillList.map((item) => <p key={item}>{item}</p>);

    // const displayList = skillList.slice(1, skillList.length).map((item, index) => {
  return (
    <div className='Skill'>
        <div className='SkillList'>{renderList}</div>
    </div>
  )
}

export default Skill