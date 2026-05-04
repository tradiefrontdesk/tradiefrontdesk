"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "When calls come in while we are on the tools, the first problem is not more marketing. It is making sure the enquiry gets captured and followed up.",
    name: "Plumbing business owner",
    role: "Residential plumbing",
  },
  {
    text: "Quote requests used to sit in email until someone had time. A proper front-desk flow makes the next action much clearer.",
    name: "Electrical contractor",
    role: "Service and maintenance",
  },
  {
    text: "The useful part is having calls, forms, replies, and follow-ups in one process instead of spread across phone notes and memory.",
    name: "Roofing operator",
    role: "Repairs and replacements",
  },
  {
    text: "For emergency work, speed matters. The customer needs to know their message landed, and the owner needs to see what needs action.",
    name: "Drainage specialist",
    role: "Emergency callouts",
  },
  {
    text: "The follow-up gap is where good quote opportunities can go cold. Having reminders and a pipeline gives the team something visible to work from.",
    name: "Air conditioning installer",
    role: "Install and service",
  },
  {
    text: "We do not need another tool sitting unused. The value is in a managed setup that fits how enquiries actually arrive.",
    name: "Landscaping company",
    role: "Design and maintenance",
  },
  {
    text: "A missed call text-back would stop a lot of simple enquiry leaks, especially during busy job days.",
    name: "Garage door technician",
    role: "Repairs and installs",
  },
  {
    text: "Customers often just need a fast acknowledgement and a clear next step. That alone can make the business feel more professional.",
    name: "Pest control owner",
    role: "Home services",
  },
  {
    text: "Old enquiries and past customers are easy to forget. A system can make reactivation more organised without relying on memory.",
    name: "Painting contractor",
    role: "Residential repaints",
  },
  {
    text: "The owner alert is important. Automation is useful, but the business still needs control over which jobs move forward.",
    name: "Building maintenance lead",
    role: "Commercial maintenance",
  },
  {
    text: "The audit idea makes sense because every trade business leaks enquiries in different places: calls, forms, quotes, or follow-up.",
    name: "Pool service business",
    role: "Recurring service work",
  },
  {
    text: "Better enquiry handling is not a guarantee of more work, but it gives the business a cleaner process to respond, qualify, and follow up.",
    name: "Solar installer",
    role: "Home energy systems",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export default function TradieTestimonials() {
  return (
    <section className="tradie-testimonials" aria-label="Tradie testimonial examples">
      <div className="tradie-testimonials__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="tradie-testimonials__head"
        >
          <p className="eyebrow">Tradie feedback themes</p>
          <h2>What Trade Businesses Usually Want Fixed</h2>
          <p className="lead">
            Example comments based on common front-desk problems: missed calls, slow replies, quote follow-up, and scattered opportunities.
          </p>
          <p className="fineprint">
            These are illustrative examples, not verified customer endorsements or guaranteed outcomes.
          </p>
        </motion.div>

        <div className="tradie-testimonials__columns">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="testimonial-column--tablet" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="testimonial-column--desktop" duration={20} />
        </div>
      </div>
    </section>
  );
}
