import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffefd8] text-gray-900">
      {/* Header */}
      <header className="bg-[#e1294a] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Hot Lips Coffee Shop</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with CTA */}
      <section className="py-20 text-center" style={{background: "url('/placeholder.svg?height=400&width=1200') no-repeat center center", backgroundSize: 'cover'}}>
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-6">Groovy Vibes, Stellar Coffee</h2>
          <p className="text-xl mb-8">Experience the far-out flavors of Palm Springs&apos; coolest coffee joint!</p>
          <Button className="bg-[#f47200] hover:bg-[#e1294a] text-white text-xl py-3 px-8">Order Ahead</Button>
        </div>
      </section>

      {/* Featured Merchandise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Groovy Merch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Retro Mug', 'Vintage T-Shirt', 'Psychedelic Tote'].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <Image src={`/placeholder.svg?height=200&width=300`} alt={item} width={300} height={200} className="w-full" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item}</h3>
                  <p className="text-gray-600 mb-4">Far out merch to keep your vibe alive!</p>
                  <Button className="bg-[#e1294a] hover:bg-[#f47200] text-white">Shop Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Business */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/placeholder.svg?height=400&width=400" alt="Terra - Owner and Head Barista" width={400} height={400} className="rounded-full" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">Meet the Groovy Gang</h2>
              <p className="text-xl mb-6">
                Founded in 1969 by coffee enthusiast Terra, Hot Lips Coffee Shop has been serving
                Palm Springs the most out-of-sight coffee for over 50 years. As both the owner and head barista,
                Terra&apos;s passion for quality beans and radical roasts has made us a local legend.
              </p>
              <Button className="bg-[#f47200] hover:bg-[#e1294a] text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-[#e1294a] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>123 Groovy Street, Palm Springs, CA 92262</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p>Mon-Fri: 7am-7pm<br />Sat-Sun: 8am-6pm</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p>Phone: (555) 123-4567<br />Email: info@hotlipscoffee.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0570704796384!2d-116.5474!3d33.8303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1a08d1d2a2e9%3A0x8c1c4bd5c5a9c1f0!2sPalm%20Springs%2C%20CA!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{border:0}}
              allowFullScreen=false
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f47200] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Hot Lips Coffee Shop. All rights reserved.</p>
          <p>Website by Palm Springs Web Design</p>
          <p className="mt-2">Stay groovy, Palm Springs!</p>
        </div>
      </footer>
    </div>
  )
}
