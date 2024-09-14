import Image from "next/image";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Jasper Nickels",
    position: "Mixing Engineer & Producer",
    text: "Mehedi is highly skilled in his craft. If you want to deepen your understanding of the website program, his explanations are clear and insightful. The entire project progressed seamlessly under his guidance.",
    avatar: memojiAvatar1,
  },
  {
    name: "Shaine Caronel",
    position: "Designer",
    text: "I am delighted to share my fantastic experience working with Mehedi for mobile edits. His willingness to go the extra mile to ensure the job is executed impeccably is truly impressive.",
    avatar: memojiAvatar2,
  },
  {
    name: "Bill Johnson",
    position: "Founder & CEO, Evenrise",
    text: "Mehedi did an excellent job on my WordPress project, showcasing his skills in both PHP and WordPress. His expertise was evident, and he delivered outstanding results. I'm highly pleased with his work!",
    avatar: memojiAvatar3,
  },
  {
    name: "Pooja Devi",
    position: "Marketing manager at The Spot Martious",
    text: "I recently had the privilege of working with Mehedi, an outstanding website developer, and I am thoroughly impressed with the exceptional quality of his work.",
    avatar: memojiAvatar4,
  },
  {
    name: "Rafal Morawiski",
    position: "Founder of Rafsoft",
    text: "Mehedi has been amazing. This is the 3rd project that we've worked together on and he has delivered every time. Highly recommend.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="
        Don't just take my word for it. See what my clients have to say
        about my work.
      "
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8 pr-8 py-4 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2).fill(0)].map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md md:p-8 hover:rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
