import { motion } from "framer-motion"; import { ShoppingCart, Cpu, Zap, Activity } from "lucide-react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function ArduinoStore() { const products = [ { name: "Arduino Uno R3", desc: "Perfect for beginners & professionals", price: "PKR 3,500" }, { name: "Ultrasonic Sensor", desc: "Accurate distance measurement", price: "PKR 750" }, { name: "Smoke Sensor (MQ-2)", desc: "Detect gas & smoke instantly", price: "PKR 1,200" }, { name: "LED Module Pack", desc: "Multi-color LEDs for projects", price: "PKR 500" }, ];

const projects = [ { name: "Smart Traffic Light System", desc: "Arduino-based automated traffic control" }, { name: "Home Smoke Alarm", desc: "Real-time smoke detection & alert system" }, { name: "Smart Parking System", desc: "Ultrasonic-based parking solution" }, ];

return ( <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white"> {/* HERO SECTION */} <section className="px-6 py-20 text-center max-w-6xl mx-auto"> <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold tracking-tight" > Smart Arduino Store </motion.h1> <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"> Build the future with Arduino boards, sensors, and ready-made intelligent projects. Designed for innovators, students, and engineers. </p> <div className="mt-10 flex justify-center gap-4"> <Button className="rounded-2xl px-8 py-6 text-lg shadow-xl"> Shop Components </Button> <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg"> View Projects </Button> </div> </section>

{/* FEATURES */}
  <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
    {[{ icon: Cpu, title: "Original Arduino", desc: "Reliable boards & ICs" },
      { icon: Activity, title: "Smart Sensors", desc: "Smoke, ultrasonic & more" },
      { icon: Zap, title: "Ready Projects", desc: "Plug & play solutions" }].map((f, i) => (
      <Card key={i} className="bg-white/5 border-white/10 rounded-2xl">
        <CardContent className="p-6 text-center">
          <f.icon className="mx-auto h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold">{f.title}</h3>
          <p className="text-gray-400 mt-2">{f.desc}</p>
        </CardContent>
      </Card>
    ))}
  </section>

  {/* PRODUCTS */}
  <section className="px-6 py-20 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Arduino Components</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p, i) => (
        <motion.div key={i} whileHover={{ scale: 1.05 }}>
          <Card className="bg-white/5 border-white/10 rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              <p className="mt-4 font-bold">{p.price}</p>
              <Button className="mt-4 w-full rounded-xl">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>

  {/* PROJECTS */}
  <section className="px-6 py-20 bg-white/5">
    <h2 className="text-4xl font-bold text-center mb-12">Arduino Projects for Sale</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <Card key={i} className="bg-black/40 border-white/10 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <Button variant="outline" className="mt-4 rounded-xl">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* FOOTER */}
  <footer className="px-6 py-10 text-center text-gray-500">
    © 2026 Smart Arduino Store • Build • Learn • Innovate
  </footer>
</div>

); }
Add homepage
