const MainVisual = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/Videos/Header Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white px-6 py-12 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">MOVIE LIBRARY</h2>
        <p className="max-w-2xl text-sm sm:text-base text-gray-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
    </section>
  )
}

export default MainVisual
