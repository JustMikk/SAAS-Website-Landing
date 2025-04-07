import EcosystemIcon from "../assets/icons/ecosystem.svg";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-5 text-white/70 text-center">
            Our platform is designed to help you achieve your goals with ease.
            Explore our features and see how we can help you succeed.{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-16">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-white/30 py-10 px-5 rounded-xl text-center sm:flex-1"
            >
              <div className="bg-white text-black inline-flex w-14 h-14 items-center justify-center rounded-lg">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
