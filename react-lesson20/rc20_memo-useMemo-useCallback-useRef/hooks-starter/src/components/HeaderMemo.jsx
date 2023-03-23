import React from 'react'
import { memo } from 'react';

// const HeaderMemo = memo( () => {
//   console.log("Header Memo Componenti");
//   return (
//     <div className='text-center text-success'>HeaderMemo Componenti</div>
//   )
// })

// export default HeaderMemo



const HeaderMemo = ({count}) => {
  console.log("Header Memo Componenti");
  return (
    <div className='text-center text-success'>HeaderMemo Componenti</div>
  )
}

export default memo (HeaderMemo)