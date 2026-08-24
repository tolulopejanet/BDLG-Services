import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats=[
{num:910,label:"Successful Missions"},
{num:600,label:"Deployments"},
{num:100,label:"Efficiency %"}
]

const StatsSection=()=>{

return(

<section className="py-28 px-6">

<div className="max-w-7xl mx-auto">

<div className="grid md:grid-cols-3 gap-8">

{stats.map((item,index)=>(


 <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
key={index}
className="bg-gradient-to-b
from-white/10
to-transparent
border border-white/10
rounded-3xl
text-center
p-10"
>

<h1 className="text-6xl font-black">

<CountUp end={item.num}/>+

</h1>

<p className="text-gray-400 mt-3">

{item.label}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default StatsSection