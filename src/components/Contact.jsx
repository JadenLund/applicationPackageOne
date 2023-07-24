export default function Contact() {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Contact Us
      </h1>
      <div class="w-full max-w-xs">
        <form class="px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              placeholder="Message"
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              class=" bg-gradient-to-r from-fadein to-fadeout text-white font-bold py-2 px-4 rounded "
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
