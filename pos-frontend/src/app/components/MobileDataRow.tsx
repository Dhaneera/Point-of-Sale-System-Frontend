import React from 'react'
import TableData from './TableData';

function MobileTableRow(props: any) {
  return (
    <div>
         {
        Object.entries(props.element).map(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            return (
              <TableData key={key} value={JSON.stringify(value)} />
            );
          } else {
            return (
              <TableData key={key} value={value} />
            );
          }
        })
      }
    </div>
  //  <div><p>gjofjg</p>
  //  <p>gjofjg</p>
  //  <p>gjofjg</p>
  //  <p>gjofjg</p>
  //  <p>gjofjg</p>
  //  <p>gjofjg</p>
  //  </div>   


  )
}

export default MobileTableRow