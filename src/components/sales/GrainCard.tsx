function GrainCard() {
  return (
    <div className="w-full flex flex-col gap-2 p-4 bg-neutral-100 hover:bg-neutral-200/70 duration-200 rounded-xl cursor-pointer">
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">Grain Name : </span>
        <span className="text-sm text-black-900">Product Name</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">quantity : </span>
        <span className="text-sm text-black-900">20</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">price : </span>
        <span className="text-sm text-black-900">120</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">Selling Price : </span>
        <span className="text-sm text-black-900">Product Name</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">category : </span>
        <span className="text-sm text-black-900">Kg</span>
      </div>
    </div>
  );
}

export default GrainCard;
