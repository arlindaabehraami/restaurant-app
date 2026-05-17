import { menu } from "../data/menu";

function Section({ title, items }) {
  return (
    <div className="mb-12">

      <h2 className="text-2xl font-semibold text-accent mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#111a2e] border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition"
          >

            <img src={item.image} className="h-40 w-full object-cover" />

            <div className="p-4">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-accent mt-2">${item.price}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="p-10">

      <Section title="Food" items={menu.food} />
      <Section title="Drinks" items={menu.drinks} />
      <Section title="Desserts" items={menu.desserts} />

    </div>
  );
}