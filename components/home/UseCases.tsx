import { Building2, Factory, Fuel, Hospital, House, Landmark, RadioTower, School, Warehouse } from "lucide-react";

const uses = [
  { icon: House, label: "Rumah" },
  { icon: Building2, label: "Gedung Kantor" },
  { icon: Factory, label: "Pabrik" },
  { icon: Warehouse, label: "Gudang" },
  { icon: School, label: "Sekolah" },
  { icon: Landmark, label: "Masjid" },
  { icon: Hospital, label: "Rumah Sakit" },
  { icon: RadioTower, label: "Tower" },
  { icon: Fuel, label: "SPBU" },
];

export default function UseCases() {
  return (
    <section aria-label="Bangunan yang kami lindungi" className="border-y border-line/80 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        <p className="shrink-0 text-sm font-semibold text-ink">Melindungi:</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {uses.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-[15px] font-medium text-ink-soft/80">
              <Icon size={17} className="text-brand" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
