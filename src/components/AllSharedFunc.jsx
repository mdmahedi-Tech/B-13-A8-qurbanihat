


// cards for home page
export const ForHomePage=async ()=>{
  const res=await fetch('https://json-server-4u0i.onrender.com/products')
  return res.json();
}

