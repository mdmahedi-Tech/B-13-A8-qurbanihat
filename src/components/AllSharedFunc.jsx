


// cards for home page
export const ForHomePage=async ()=>{
  const res=await fetch('http://localhost:5000/products')
  return res.json();
}

