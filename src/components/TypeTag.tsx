import React from 'react';

export default function TypeTag(props:{type:string}) {
  return (
    <span
      style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#6cc1ff',
        backgroundColor: '#edf5fd',
        padding: '5px',
        borderRadius: '7px'
      }}
    >
      {props.type}
    </span>
  );
}