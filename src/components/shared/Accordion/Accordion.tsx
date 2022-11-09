import React, { useState } from 'react';
import { data } from './data';
import styles from  './Accordion.module.scss';

const Accordion = () => {
const [selectedItem, setSelectedItem] = useState(null);
const toggle = (i) => {
  if(selectedItem === i) {
    return setSelectedItem(null)
  }
  setSelectedItem(i)
  }
  return (
    <div className={`${styles.accordion}`}>
    {data.map((item, i) => {
      return (
        <div className={`${styles.item}`} key={i}>
          <div className={` flex items-center justify-between cursor-pointer ${styles.title}`} onClick={() => toggle(i)}>
            <h2 className={`p-4`}>{item.question}</h2>
            <span>{selectedItem === i ? '-' : '+'}</span>
          </div>
          {selectedItem === i ? (
            <div className={`${styles.contentShow}`}>{item.answer}</div>
          ): (
            <div className={`${styles.content}`}>{item.answer}</div>
          )}
         
        </div>
      );
    })}
  </div>
  )
}

export default Accordion;