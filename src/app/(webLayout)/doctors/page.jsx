import { SubHero, Title } from "@/components";
import styles from "../website.module.css";

const Doctors = () => {
  const ItemsWithIcon = [
    {
      title: "Doctors",
    },
  ];
  return (
    <>
      <SubHero title="Doctors" items={ItemsWithIcon} />
      <section className="">
        <div className="container">
          <Title title="Our Doctors">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Title>
        </div>
      </section>
    </>
  );
};

export default Doctors;
