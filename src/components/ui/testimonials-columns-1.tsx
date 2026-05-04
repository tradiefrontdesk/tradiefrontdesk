"use client";

import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image?: string;
  name: string;
  role: string;
};

const initialsFor = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 16,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="testimonial-scroll-track"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, cardIndex) => (
              <div className="testimonial-card" key={`${name}-${index}-${cardIndex}`}>
                <div className="testimonial-text">{text}</div>
                <div className="testimonial-person">
                  {image ? (
                    <img width={40} height={40} src={image} alt={name} className="testimonial-avatar" loading="lazy" />
                  ) : (
                    <div className="testimonial-avatar testimonial-avatar--initials" aria-hidden="true">
                      {initialsFor(name)}
                    </div>
                  )}
                  <div className="testimonial-person-copy">
                    <div className="testimonial-name">{name}</div>
                    <div className="testimonial-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
