/** @type {import('next').NextConfig} */
const nextConfig = {
  // purge: [
  //   "./app/**/*.{js,ts,jsx,tsx}",
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  images: {
    domains: ["utfs.io"],
  },
  async headers() {
    return [
      {
        source: "/api/(.*)", // جميع نقاط النهاية تحت /api
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://casecobramohamedramadan22.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
