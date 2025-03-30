"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a passionate <span className="font-medium">Automotive & Portrait Photographer</span>,
        <span className="font-medium"> Graphic Designer</span>, and <span className="font-medium">Color Grading Expert</span>
        with <span className="font-medium">10 years</span> of experience.
        My work blends technical precision with artistic storytelling, capturing everything from
        <span className="italic"> dynamic rolling shots</span> to <span className="italic"> expressive portraits</span>.
        With a strong background in <span className="font-medium">color grading</span>, I ensure every image has a
        unique and polished look that stands out.
      </p>

      <p className="mb-3">
        Beyond photography, I am also a <span className="font-medium">graphic designer</span>,
        specializing in posters, logos, and branding solutions that bring ideas to life.
        My experience includes working with agencies such as <span className="font-medium">Comguru Agency</span>
        and <span className="font-medium">MetaBuzz</span>, where I collaborated with brands on high-impact visual campaigns.
      </p>

      <p>
        <span className="italic">When I'm not behind the camera</span>, I enjoy exploring new creative techniques,
        learning about film production, and working on personal artistic projects.
        I am always looking for new opportunities to grow, collaborate, and push the boundaries of visual storytelling.
      </p>

    </motion.section>
  );
}
