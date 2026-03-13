const AddCoffee = () => {

    const handleForm = e => {


        e.preventDefault();




    }



  return (
    <div className="bg-[#f4f3f0] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-[#f4f3f0] rounded-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#374151] mb-4">
            Add New Coffee
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto leading-8 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onClick={handleForm}  className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 ">
            <div>
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xl font-semibold text-gray-700 mb-2">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-4 rounded bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#d2b48c]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-xl font-semibold text-[#3b2f2f] bg-[#d2b48c] border-2 border-[#6b4f3a] rounded hover:bg-[#c8aa82] transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;