import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import AnimateHeight from "react-animate-height";
import paymentsLogo from "../../../../assets/payments.svg";
import communicationLogo from "../../../../assets/communication.svg";
import informationLogo from "../../../../assets/information.svg";

const getTitle = (index) => {
  if (index === 0) {
    return "Payments";
  } else if (index === 1) {
    return "Communication";
  } else if (index === 2) {
    return "Information";
  }
};

const getImage = (index) => {
  if (index === 0) {
    return paymentsLogo;
  } else if (index === 1) {
    return communicationLogo;
  } else if (index === 2) {
    return informationLogo;
  }
};

const getSubTitle = (index) => {
  if (index === 0) {
    return "Internet connectivity is a prerequisite to carry out digital payment transactions.";
  } else if (index === 1) {
    return "Access to communication apps, infrastructure and internet services is often severed.";
  } else if (index === 2) {
    return "Users lack tools for reporting, self-sovereign fact-checking, and source verification.";
  }
};

const getContent = (index) => {
  if (index === 0) {
    return "We serve the unbanked and unserved with financial tools for P2P payments, micro-financing, and savings that can be used in absence of constant connectivity.";
  } else if (index === 1) {
    return "In dire situations like natural disasters, wars, conflict, or in safer environments like malls, concerts, vacations, stay connected with our offline communication solutions.";
  } else if (index === 2) {
    return "Share and consume verifiably authentic real-time information, news, alerts, and more with a hyperlocal and global community with our content reporting tools.";
  }
};

function Item({ index, setScrollProgress }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(index, latest);
    });
  }, [scrollYProgress, index, setScrollProgress]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  console.log("opacity", opacity);

  return (
    <section>
      <div
        ref={ref}
        className="flex justify-center items-center"
        style={{ opacity }}
      >
        <img src={getImage(index)} alt="payments" />
      </div>
    </section>
  );
}

const Acc = ({ index, height }) => {
  let cardClass = "first";
  if (index === 0) {
    cardClass = "first";
  } else if (index === 1) {
    cardClass = "second";
  } else if (index === 2) {
    cardClass = "third";
  }
  return (
    <div className={`acc-card text-white p-6 max-w-[500px] ${cardClass}`}>
      <h4
        className={`${
          height === 0 ? "text-2xl" : "text-3xl"
        } mb-4 font-semibold`}
      >
        {getTitle(index)}
      </h4>
      <AnimateHeight
        id={`example-panel-${index}`}
        duration={500}
        height={height}
      >
        <div className="h-[1px] bg-white mb-4"></div>
        <em className="font-light color-[#eee] mb-4 block text-xl">
          {getSubTitle(index)}
        </em>
        <p className="text-xl">{getContent(index)}</p>
      </AnimateHeight>
    </div>
  );
};

const NewFeatures = () => {
  const [heights, setHeights] = useState([0, 0, 0]);

  const setScrollProgress = (index, progress) => {
    setHeights((prev) => {
      const newHeights = prev.map((h, i) => (i === index ? "auto" : 0));
      console.log(newHeights);
      return newHeights;
    });
  };

  return (
    <div className="py-20 hidden pt-40 lg:block new-features">
      <h2 className="text-center lg:text-5xl text-4xl leading-tight text-[#5573A0] mb-40">
        The internet is a critical need, but it is <br /> becoming increasingly
        vulnerable.
      </h2>
      <div className="feature-grid lg:grid-cols-2 hidden lg:grid">
        <div className="flex flex-col gap-10">
          {heights.map((_, index) => (
            <Item
              key={index}
              index={index}
              setScrollProgress={setScrollProgress}
            />
          ))}
        </div>
        <div>
          <div className="sticky top-40">
            {heights.map((height, index) => (
              <Acc key={index} index={index} height={height} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeatures;
