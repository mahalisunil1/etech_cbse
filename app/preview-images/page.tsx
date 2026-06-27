import Image from "next/image";

export default function PreviewImages() {
  const images = [
    "1000589210.jpg",
    "1000589222.jpg",
    "1000589258.jpg",
    "1000589260.jpg",
    "1000589295.jpg",
    "1000589329.jpg",
    "1000589331.jpg",
    "1000589333.jpg",
    "1000589353.jpg"
  ];

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black">Image Preview for Categorization</h1>
      <div className="grid grid-cols-3 gap-8">
        {images.map(img => (
          <div key={img} className="border p-4 shadow-lg flex flex-col items-center">
            <div className="relative w-full aspect-video mb-4 bg-gray-100">
              <Image src={`/images/${img}`} alt={img} fill className="object-contain" />
            </div>
            <p className="font-mono text-sm font-bold text-black">{img}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
