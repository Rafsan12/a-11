import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const footerItems = [
  {
    about: [
      {
        title: "About",
        link: [
          "About MyFeedback",
          "Investor Relations",
          "Trust & Safety",
          "Content Guidelines",
          "Terms of Service",
          "Privacy Policy",
          "Your Privacy Choices",
        ],
      },
    ],
    feedback: [
      {
        title: "MyFeedback",
        link: [
          "MyFeedback for business",
          "Collections",
          "Talk",
          "Events",
          "MyFeedback blog",
          "Support",
          "Developers",
        ],
      },
    ],
    language: [
      {
        title: "Language",
        link: "English",
      },
    ],
    countries: [
      {
        title: "Countries",
        link: "Singapour",
      },
    ],
  },
];

const Footer = () => {
  const { about, feedback, language, countries } = footerItems[0];
  return (
    <footer className="border-t border-[#DCDCDC]">
      <div className="flex flex-col sm:flex-row justify-around items-start gap-3 md:gap-6 py-6 md:py-10 md:px-16 px-24 ">
        <div>
          {about.map((item, i) => (
            <div key={i}>
              <h1 className="font-lexend font-extrabold text-xl leading-6 text-EerieBlack1E mb-3">
                {item.title}
              </h1>
              <div>
                {item.link.map((items, i) => (
                  <p
                    key={i}
                    className="font-roboto text-sm leading-4 text-[#5E5E5E] mb-2"
                  >
                    {items}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          {feedback.map((item, i) => (
            <div key={i}>
              <h1 className="font-lexend font-extrabold text-xl leading-6 text-EerieBlack1E mb-3">
                {item.title}
              </h1>
              <div>
                {item.link.map((items, i) => (
                  <p
                    key={i}
                    className="font-roboto text-sm leading-4 text-[#5E5E5E] mb-2"
                  >
                    {items}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            {language.map((items, i) => (
              <div key={i}>
                <h1 className="font-lexend font-extrabold text-xl leading-6 text-EerieBlack1E mb-1">
                  {items.title}
                </h1>
                <p className="flex items-center font-roboto text-sm leading-4 text-[#5E5E5E] mb-1">
                  <Select className="outline-none border-none focus:outline-none focus:border-none">
                    <SelectTrigger className="outline-none border-none focus:outline-none focus:border-none">
                      <SelectValue placeholder={items.link} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Bangla">Bangla</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            {countries.map((items, i) => (
              <div key={i}>
                <h1 className="font-lexend font-extrabold text-xl leading-6 text-EerieBlack1E mb-1">
                  {items.title}
                </h1>
                <p className="flex items-center font-roboto text-sm leading-4 text-[#5E5E5E] mb-1">
                  <Select className="outline-none border-none focus:outline-none focus:border-none">
                    <SelectTrigger className="outline-none border-none focus:outline-none focus:border-none">
                      <SelectValue placeholder={items.link} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Countries</SelectLabel>
                        <SelectItem value="America">America</SelectItem>
                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="singapour">singapour</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="font-roboto font-semibold text-sm leading-4 text-EerieBlack1E text-center pb-5 px-3">
          Septembre 2024 myfeedback, designed by scott
        </p>
      </div>
    </footer>
  );
};

export default Footer;
