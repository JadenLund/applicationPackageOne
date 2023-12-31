export default function Contact() {
  return (
    <div>
      <h1 className="pt-.5 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Contact Us
      </h1>
      <div class="max-w-lg mx-auto">
        <form class="px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div class="mb-4">
            <textarea
              class="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="message"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <div class="flex items-center justify-end">
            <button
              class="px-e ml-2 bg-gradient-to-r from-fadein to-fadeout text-white font-bold py-2 px-4 rounded-lg"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
