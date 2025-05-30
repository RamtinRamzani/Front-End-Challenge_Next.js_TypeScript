import ProfileForm from "@/_components/forms/ProfileForm";
import Spinner from "@/_components/Spinner";
import { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<Spinner />}>
      <ProfileForm />;
    </Suspense>
  );
}

export default page;
