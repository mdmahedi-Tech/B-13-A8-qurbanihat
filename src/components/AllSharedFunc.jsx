


// cards for home page
export const ForHomePage=async ()=>{
  const res=await fetch('http://localhost:5000/products')
  return res.json();
}

// sort start
    // const [sortingtype,setsortingtype]=useState('');
    // console.log(sortingtype);

    //  {/* sort start */}
    //      <div className="dropdown dropdown-bottom flex justify-center py-5">
    //       <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
    //       <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    //         <li onClick={setsortingtype("price")}><a>price</a></li>
           
    //       </ul>
    //     </div>
                {/* shot field end */}

// for details page
// export const ForDetails=async ()=>{
//   const res=await fetch(`http://localhost:5000/products/${id}`)
//   return res.json();
// }