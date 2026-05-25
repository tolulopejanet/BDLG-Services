import React from "react";
import {
FaShieldAlt,
FaFireExtinguisher,
FaBriefcase
}
from "react-icons/fa";

const features=[
{
icon:<FaShieldAlt size={28}/>,
title:"Law Enforcement",
desc:"Drone surveillance and real-time intelligence."
},
{
icon:<FaFireExtinguisher size={28}/>,
title:"Fire & Rescue",
desc:"Rapid emergency aerial response."
},
{
icon:<FaBriefcase size={28}/>,
title:"Emergency Operations",
desc:"Situational awareness during crises."
}
]

const FeaturesSection=()=>{

return(

<section className="py-32 px-6">

<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">

<p className="text-blue-400 uppercase tracking-widest">
Capabilities
</p>

<h2 className="text-5xl font-bold mt-4">
Built for modern operations
</h2>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{features.map((item,index)=>(

<div
key={index}
className="bg-white/[0.03]
border border-white/10
backdrop-blur-lg
rounded-3xl
p-8
hover:-translate-y-3
hover:border-blue-500
transition duration-500"
>

<div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">

{item.icon}

</div>

<h3 className="mt-6 text-2xl font-bold">

{item.title}

</h3>

<p className="text-gray-400 mt-4">

{item.desc}

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default FeaturesSection