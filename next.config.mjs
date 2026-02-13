/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "shadergradient",
    "three",
    "@react-three/fiber",
    "@react-three/drei",
  ],
};

export default nextConfig;
