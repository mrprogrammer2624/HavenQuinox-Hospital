"use client";
import {
  Blog,
  OurDoctors,
  Faq,
  Footer,
  HQButton,
  Header,
  OurServices,
  AboutUs,
  PatientsSay,
} from "@/components";
import styles from "./(webLayout)/website.module.css";
import clsx from "clsx";
import Image from "next/image";
import { HeroDoctor } from "@/assets/images";
import { Icons } from "@/utility";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pa-0">
        {/* Hero */}
        <section
          className={clsx(styles.heroWrapper, "bg-primary h-screen relative")}
        >
          <div className="container flex flex-col gap-16">
            <h1 className="fw-800">Healthcare</h1>
            <div className={styles.heroIcons}>{Icons.stethoscope}</div>
            <div className="flex items-center justify-between gap-4">
              <p
                className={clsx(
                  styles.bottomTexts,
                  "text-white fw-500 h5 lh-base"
                )}
              >
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
              <div className="flex">
                <HQButton customClass={"uppercase"} shape="round" block>
                  Book An Appointment
                </HQButton>
                <HQButton shape="circle" icon={Icons.CorseUpArrow} />
              </div>
            </div>
            <div className={styles.HeroDoctor}>
              <Image src={HeroDoctor} alt="hero-doctor" />
            </div>
          </div>
        </section>
        {/* About US */}
        <AboutUs />
        {/* Our services */}
        <OurServices />
        {/* Our Doctors */}
        <OurDoctors />
        {/* What Patients Say */}
        <PatientsSay />
        {/* FAQ’s */}
        <Faq />
        {/* Blog */}
        <Blog />
      </main>
      <Footer />
    </>
  );
}
