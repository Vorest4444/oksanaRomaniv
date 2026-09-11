'use client'

export function AnimatedBackground() {
  return (
    <>
      {/* Fixed gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-primary-50/30 via-white to-white pointer-events-none -z-20" />
      
      {/* Scrollable dots container - covers full page */}
      <div className="absolute inset-0 w-full pointer-events-none -z-10 overflow-visible">
        
        {/* Soft blob at very top */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-200/25 rounded-full filter blur-3xl" />
        
        {/* Additional subtle blobs */}
        <div className="absolute top-[300px] -left-32 w-[400px] h-[400px] bg-primary-100/20 rounded-full filter blur-3xl" />
        <div className="absolute top-[200px] -right-32 w-[350px] h-[350px] bg-primary-100/15 rounded-full filter blur-3xl" />
        
        {/* === HERO ZONE (0-600px) - Dense dots === */}
        <div className="hidden lg:block">
          {/* Left side */}
          <div className="absolute top-[80px] left-[3%] w-2 h-2 bg-primary-400/60 rounded-full animate-float" />
          <div className="absolute top-[150px] left-[5%] w-1.5 h-1.5 bg-primary-300/65 rounded-full animate-float-slow animation-delay-2000" />
          <div className="absolute top-[220px] left-[4%] w-2.5 h-2.5 bg-primary-300/55 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-[300px] left-[6%] w-1 h-1 bg-primary-500/50 rounded-full animate-float-slow" />
          <div className="absolute top-[380px] left-[3%] w-2 h-2 bg-primary-400/55 rounded-full animate-float animation-delay-2000" />
          <div className="absolute top-[470px] left-[5%] w-1.5 h-1.5 bg-primary-300/60 rounded-full animate-float-slow animation-delay-4000" />
          <div className="absolute top-[550px] left-[4%] w-1 h-1 bg-primary-400/50 rounded-full animate-float" />
          
          {/* Right side */}
          <div className="absolute top-[100px] right-[4%] w-2 h-2 bg-primary-300/65 rounded-full animate-float animation-delay-2000" />
          <div className="absolute top-[180px] right-[6%] w-1.5 h-1.5 bg-primary-400/55 rounded-full animate-float-slow" />
          <div className="absolute top-[260px] right-[3%] w-2.5 h-2.5 bg-primary-300/50 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-[340px] right-[5%] w-1 h-1 bg-primary-500/45 rounded-full animate-float-slow animation-delay-2000" />
          <div className="absolute top-[420px] right-[4%] w-2 h-2 bg-primary-400/60 rounded-full animate-float" />
          <div className="absolute top-[500px] right-[6%] w-1.5 h-1.5 bg-primary-300/55 rounded-full animate-float-slow animation-delay-4000" />
        </div>
        
        {/* === MIDDLE ZONE (600-1200px) - Medium density === */}
        <div className="hidden lg:block">
          <div className="absolute top-[650px] left-[4%] w-1.5 h-1.5 bg-primary-400/50 rounded-full animate-float animation-delay-2000" />
          <div className="absolute top-[800px] left-[5%] w-2 h-2 bg-primary-300/45 rounded-full animate-float-slow" />
          <div className="absolute top-[950px] left-[3%] w-1 h-1 bg-primary-400/40 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-[1100px] left-[4%] w-1.5 h-1.5 bg-primary-300/35 rounded-full animate-float-slow animation-delay-2000" />
          
          <div className="absolute top-[700px] right-[5%] w-2 h-2 bg-primary-300/50 rounded-full animate-float-slow animation-delay-4000" />
          <div className="absolute top-[850px] right-[4%] w-1.5 h-1.5 bg-primary-400/45 rounded-full animate-float animation-delay-2000" />
          <div className="absolute top-[1000px] right-[6%] w-1 h-1 bg-primary-300/40 rounded-full animate-float-slow" />
        </div>
        
        {/* === LOWER ZONE (1200-2000px) - Sparse === */}
        <div className="hidden lg:block">
          <div className="absolute top-[1300px] left-[5%] w-1.5 h-1.5 bg-primary-400/30 rounded-full animate-float-slow animation-delay-2000" />
          <div className="absolute top-[1600px] left-[4%] w-1 h-1 bg-primary-300/25 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-[1400px] right-[4%] w-1.5 h-1.5 bg-primary-300/30 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-[1800px] right-[5%] w-1 h-1 bg-primary-400/20 rounded-full animate-float-slow animation-delay-2000" />
        </div>
        
        {/* === BOTTOM ZONE (2000px+) - Very few === */}
        <div className="hidden lg:block">
          <div className="absolute top-[2200px] left-[4%] w-1 h-1 bg-primary-400/20 rounded-full animate-float-slow animation-delay-4000" />
          <div className="absolute top-[2500px] right-[5%] w-1 h-1 bg-primary-300/15 rounded-full animate-float animation-delay-2000" />
        </div>
        
        {/* Mobile - minimal, mostly at top */}
        <div className="lg:hidden">
          <div className="absolute top-[120px] left-[4%] w-1.5 h-1.5 bg-primary-400/50 rounded-full animate-float" />
          <div className="absolute top-[250px] right-[5%] w-2 h-2 bg-primary-300/45 rounded-full animate-float-slow animation-delay-2000" />
          <div className="absolute top-[450px] left-[5%] w-1 h-1 bg-primary-400/35 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-[700px] right-[4%] w-1 h-1 bg-primary-300/25 rounded-full animate-float-slow" />
        </div>
      </div>
    </>
  )
}
