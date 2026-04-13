const posts = [
  {
    id: 1,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/4/17941828049781204/medium.jpg",
  },
  {
    id: 2,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/21/18064711405622221/low_resolution.jpg",
  },
  {
    id: 3,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/69/18046442920760469/low_resolution.jpg",
  },
  {
    id: 4,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/35/18063260977720835/low_resolution.jpg",
  },
  {
    id: 5,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/38/18051316648798938/low_resolution.jpg",
  },
  {
    id: 6,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/15/17983745165709515/low_resolution.jpg",
  },
  {
    id: 7,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/33/18060671347641033/medium.jpg",
  },
  {
    id: 8,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/46/17844463278284446/low_resolution.jpg",
  },
  {
    id: 9,
    image: "https://cdn-yotpo-images-production.yotpo.com/instagram/95/17976175100613395/low_resolution.jpg",
  },
];

export default function Images() {
  return (
    <div className="w-full py-8 max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold tracking-widest text-gray-500">
          FOLLOW US
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-orange-500 transition-colors"
        >
          {/* Instagram icon */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919..." />
          </svg>
          @fastrack
        </a>
      </div>

      {/* Grid */}
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "auto auto auto",
        }}
      >
        {/* Large Left */}
        <div className="row-span-2 rounded-xl overflow-hidden relative group">
          <img
            src={posts[0].image}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          {/* Label */}
          <div className="absolute bottom-3 left-3">
            <p className="text-white text-xs font-bold tracking-widest">
              {posts[0].label}
            </p>
          </div>
        </div>

        {/* Top Right */}
        {posts.slice(1, 3).map((p) => (
          <div key={p.id} className="rounded-xl overflow-hidden relative group">
            <img
              src={p.image}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          </div>
        ))}

        {/* Bottom 3 */}
        <div
          className="col-start-2 col-span-2 grid gap-2"
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {posts.slice(3).map((p) => (
            <div key={p.id} className="rounded-xl overflow-hidden relative group">
              <img
                src={p.image}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}