import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="w-[70%]  mx-auto my-8">
      <div className="flex mx-auto  gap-8 items-center justify-center ">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </main>
  );
}
