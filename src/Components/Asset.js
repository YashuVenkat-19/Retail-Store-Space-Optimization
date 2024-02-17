const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function Asset() {
  return (
    <div className="bg-sky-700">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl mb-8 font-bold tracking-tight text-lime-400 sm:text-4xl">
            Our Services
          </h2>
          <h2 className="border-t border-white pt-4 text-l mb-4 font-medium tracking-tight text-amber-400 sm:text-2xl">
            {"  "}- {"       "}Smart stocking of products by monitoring Social
            Media trends using AI
          </h2>
          <h2 className="border-t border-white pt-4 text-l mb-4 font-medium tracking-tight text-amber-400 sm:text-2xl">
            {"  "}- {"       "}Recognition of Store Hotspots & Coldspots using
            Thermal Technology
          </h2>
          <h2 className="border-t border-white pt-4 text-l mb-4 font-medium tracking-tight text-amber-400 sm:text-2xl">
            {"  "}- {"       "}Customer Psychology Analysis Using IoT Enabled
            Weight & Proximity Sensors
          </h2>
          <h2 className="border-t border-white pt-4 text-l mb-4 font-medium tracking-tight text-amber-400 sm:text-2xl">
            {"  "}- {"       "}New Product Performance Prediction Using ML and
            Customer Profiling
          </h2>
          {/* <p className="mt-4 text-white">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p> */}

          {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-white pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://th.bing.com/th/id/OIP.MxZXz_KIBCrFLd9o0CKsMAHaHa?pid=ImgDet&rs=1"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://th.bing.com/th/id/R.7b54e87f9720a96a581a911855cc885b?rik=h210O9oTBBXW4A&riu=http%3a%2f%2fwww.ukas.co.uk%2fwp-content%2fuploads%2f2015%2f06%2fProducts.jpg&ehk=YP3dWBn6j7rptdUjf7ULNf9JRLftWhccCEISE3V1uS0%3d&risl=&pid=ImgRaw&r=0"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://th.bing.com/th/id/OIP.e6WeOfGHnDnEOow4drAcpgAAAA?pid=ImgDet&rs=1"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://th.bing.com/th/id/R.3780173a7b293e8af47674930711669a?rik=kOs9q%2fE4FvZDzQ&riu=http%3a%2f%2fwww.innovativeincentives.in%2fwp-content%2fuploads%2f2014%2f03%2fimportance-of-consumer-engagement-experts.jpg&ehk=KKcOhGpfPjFFAZNdMXYR%2fXBu970Xsb2YgSy%2b%2fDwf5JE%3d&risl=&pid=ImgRaw&r=0"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
