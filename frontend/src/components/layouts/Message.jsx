import React from 'react'

export default function Message  ({variant,children}){
  return (
    <div classname={`alert alert-${variant}`}>
      {children}
    </div>
  );
}


