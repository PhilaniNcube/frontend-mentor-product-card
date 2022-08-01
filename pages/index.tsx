import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-3 py-2"
      style={{ backgroundColor: "hsl(30, 38%, 92%)" }}
    >
      <div className="max-w-[300px] md:max-w-xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-orange-200/30 grid grid-cols-1 md:grid-cols-2">
        <img
          className="w-full object-cover h-[300px] md:h-full"
          src="/images/image-product-desktop.jpg"
        />
        <div className="w-full bg-white p-6">
          <p className="uppercase text-gray-500 text-md">Perfume</p>

          <h2 className="text-gray-800 text-4xl font-extrabold">
            Gabrielle Essence Eau De Parfum
          </h2>

          <p className="text-gray-400 mt-6 mb-4 text-sm">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>

          <span className="flex space-x-5 items-center"><p className="text-green-800 text-3xl font-extrabold">$149.99</p><p className="text-sm text-gray-500 line-through">$169.99</p></span>

          <button className="w-full flex space-x-3 justify-center items-center py-3 mt-6 rounded-lg bg-green-700 hover:bg-green-900 text-white"><img src="../images/icon-cart.svg" className="h-6 w-6" /><p className="text-white font-medium">Add To Cart</p></button>

        </div>
      </div>
    </div>
  );
}

export default Home
