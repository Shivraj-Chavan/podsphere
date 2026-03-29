
export default function PricingSection() {
    return (
      <>
     
      <section className="bg-white py-30">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* ================= HEADER ================= */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-gray-600">
              Choose a plan that fits your needs. Upgrade anytime.
            </p>
          </div>
  
          {/* ================= PRICING GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
  
            {/* ================= STARTER ================= */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Starter</h4>
  
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">$0</span>
                <span className="text-gray-500 ml-2">/ forever</span>
              </div>
  
              <p className="text-gray-600 mb-8">
                Perfect for individuals and small teams.
              </p>
  
              <button className="w-full bg-black text-white py-3 rounded-full font-semibold mb-8">
                Get Started
              </button>
  
              <ul className="space-y-4 text-sm text-gray-600">
                <li>✓ Up to 3 projects</li>
                <li>✓ Unlimited tasks & members</li>
                <li>✓ Kanban, List & Calendar views</li>
                <li>✓ Due dates & reminders</li>
              </ul>
            </div>
  
            {/* ================= PRO (HIGHLIGHTED) ================= */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-green-200 via-blue-200 to-yellow-200">
  
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Pro</h4>
  
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">$12</span>
                  <span className="text-gray-500 ml-2">
                    per member / month
                  </span>
                </div>
  
                <p className="text-gray-600 mb-8">
                  Best for growing teams and projects.
                </p>
  
                <button className="w-full bg-black text-white py-3 rounded-full font-semibold mb-8">
                  Start 14-day free trial
                </button>
  
                <ul className="space-y-4 text-sm text-gray-600">
                  <li>✓ Everything in Starter, plus:</li>
                  <li>✓ Unlimited projects & storage</li>
                  <li>✓ Advanced team collaboration</li>
                  <li>✓ Task dependencies & priorities</li>
                </ul>
              </div>
            </div>
  
            {/* ================= ENTERPRISE ================= */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                Enterprise
              </h4>
  
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">$29</span>
                <span className="text-gray-500 ml-2">
                  per member / month
                </span>
              </div>
  
              <p className="text-gray-600 mb-8">
                Built for large organization needs.
              </p>
  
              <button className="w-full bg-black text-white py-3 rounded-full font-semibold mb-8">
                Start 14-day free trial
              </button>
  
              <ul className="space-y-4 text-sm text-gray-600">
                <li>✓ Everything in Pro, plus:</li>
                <li>✓ Enterprise security & SSO</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom workflows & permissions</li>
              </ul>
            </div>
  
          </div>
        </div>
      </section>
      
      </>
    );
  }
  