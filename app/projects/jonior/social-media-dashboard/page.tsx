import OverviewSocialMediaCart from "@/_components/socialMedia/OverviewSocialMediaCart";
import SocialMediaCart from "@/_components/socialMedia/SocialMediaCart";
import {
  overviewData,
  socialMediaData,
} from "@/_components/socialMedia/socialMediaData";

function Page() {
  return (
    <section className="mx-auto text-white">
      <div className="sm:mx-10 mx-4 px-4 py-8 flex flex-col shadow-lg rounded-b-md relative">
        <div className="min-h-screen text-white">
          <div className="max-w-6xl mx-auto">
            <header className="mb-10">
              <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
              <p className="text-slate-400 text-sm">Total Followers: 23,004</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {socialMediaData.map((item, id) => (
                <SocialMediaCart
                  key={id}
                  {...item}
                  icon={<item.icon {...item.iconProps} />}
                />
              ))}
            </div>

            <h2 className="text-xl font-bold mb-6">Overview - Today</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewData.map((item, id) => (
                <OverviewSocialMediaCart
                  key={id}
                  {...item}
                  icon={<item.icon {...item.iconProps} />}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
