import NoActivityVideo from "~/components/video-plyayer/no-activity";
import type { Route } from "./+types/home";
import ActivityVideo from "~/components/video-plyayer/activity-video";
import MultiStepFormNoActivity from "~/multi-step-form/form-with-no-activity";
import MultiStepFormActivity from "~/multi-step-form/form-with-activity";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="space-y-12 p-6">
      <NoActivityVideo />
      <ActivityVideo />
      <MultiStepFormNoActivity />
      <MultiStepFormActivity />
    </div>
  );
}
