export const GetStarted = () => {
  return (
    <div id='getStarted' className="flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="w-full max-w-8xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Flows Countdown
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Never miss your important moments with beautiful, precise countdowns. Track every second until your special day arrives.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-300">Real-time tracking down to the second</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-300">Beautiful, modern interface design</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-500/20">
                  <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-300">Perfect for any special occasion</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 h-48 flex flex-col justify-between hover:scale-105 transition-transform">
                  <span className="text-5xl">🎂</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Birthdays</h3>
                    <p className="text-blue-100 text-sm">Celebrate life</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 h-56 flex flex-col justify-between hover:scale-105 transition-transform">
                  <span className="text-5xl">💍</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Weddings</h3>
                    <p className="text-purple-100 text-sm">Your special day</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 h-56 flex flex-col justify-between hover:scale-105 transition-transform">
                  <span className="text-5xl">✈️</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Vacations</h3>
                    <p className="text-pink-100 text-sm">Time to relax</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl p-8 h-48 flex flex-col justify-between hover:scale-105 transition-transform">
                  <span className="text-5xl">🚀</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Launches</h3>
                    <p className="text-indigo-100 text-sm">Big moments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;