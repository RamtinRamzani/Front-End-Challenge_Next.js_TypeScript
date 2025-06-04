import OverviewSocialMediaCart from "@/_components/socialMedia/OverviewSocialMediaCart";
import SocialMediaCart from "@/_components/socialMedia/SocialMediaCart";
import SocialMediaHeader from "@/_components/socialMedia/SocialMediaHeader";

function Page() {
  return (
    <div className="mx-auto text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col bg-primary-950 shadow-lg rounded-b-md relative">
        <SocialMediaHeader />
        <SocialMediaCart />
      </div>
      <OverviewSocialMediaCart />
    </div>
  );
}

export default Page;
