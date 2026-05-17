export default function MenuCard({ item }) {
  return (
    <div className="bg-[#0f2a44] border border-yellow-500/30 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      
      <img src={item.image} className="h-44 w-full object-cover" />

      <div className="p-4">
        <p className="text-yellow-400 text-xs uppercase">{item.category}</p>

        <h2 className="text-xl font-serif font-bold mt-1">
          {item.name}
        </h2>

        <p className="text-white font-bold mt-2">
          ${item.price}
        </p>
      </div>
    </div>
  );
}