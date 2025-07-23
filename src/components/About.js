const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-[#fffdf9] shadow-2xl rounded-3xl p-10 border border-orange-100">
        <h1 className="text-5xl font-extrabold text-center text-[#ff6b00] mb-8 drop-shadow">
          🍽️ About Yummyfy
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          <span className="font-semibold text-[#ff6b00]">Yummyfy</span> brings
          you happiness on a plate. From spicy street food to comforting
          classics, we deliver every flavor your tastebuds crave — fresh, fast,
          and full of love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-[#fff3ed] rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-[#e85a00] mb-3">
              🚀 What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Fast & reliable food delivery</li>
              <li>Wide variety of local and premium restaurants</li>
              <li>Exclusive coupons & daily combos</li>
              <li>Live order tracking & real-time updates</li>
              <li>Secure & easy payments</li>
            </ul>
          </div>

          <div className="bg-[#f4e3ff] rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-[#8c3eff] mb-3">
              🌟 Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Curated menus for every mood</li>
              <li>Superfast delivery partners</li>
              <li>Hygienic packaging & safety guaranteed</li>
              <li>24/7 foodie support</li>
              <li>Delightful experience from tap to bite</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#ffe4e1] via-[#fff5e1] to-[#e0d8ff] p-6 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-bold text-[#cc3366] mb-2">
            👨‍🍳 Made With Love
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
            Whether you're planning a cozy dinner, a party feast, or a solo
            pamper night — Yummyfy is here to deliver the food that makes your
            moments special. Freshly made, thoughtfully packed, and always on
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
