export default function Page() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-rose-800 mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Find answers to the most common questions below.
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-white/90">
            <h2 className="text-lg font-semibold text-gray-800">
              What is the purpose of this page?
            </h2>
            <p className="text-gray-600 mt-1">
              This page is designed to provide helpful answers to frequently asked questions.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-white/90">
            <h2 className="text-lg font-semibold text-gray-800">
              How can I contact support?
            </h2>
            <p className="text-gray-600 mt-1">
              You can reach out to us via the contact form on our website or email us directly at support@example.com.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-white/90">
            <h2 className="text-lg font-semibold text-gray-800">
              Where can I find more information?
            </h2>
            <p className="text-gray-600 mt-1">
              Visit our documentation or help center for more detailed guides and tutorials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
