import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]"
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
