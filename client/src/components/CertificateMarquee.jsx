import cert1 from "../assets/certificate1.jpeg";
import cert2 from "../assets/certificate2.jpeg";
import Marquee from "react-fast-marquee";

const CertificateCard = ({ img }) => {
  return (
    <div className="relative w-80 h-52 p-4 overflow-hidden rounded-xl p-4]">
      <img
        className=" object-cover"
        src={img}
        alt="Certificate"
      />
    </div>
  );
};

const CertificateMarquee = () => {
  const certificates = [cert1, cert2, cert1, cert2];

  const firstRow = certificates.slice(0, certificates.length / 2);
  const secondRow = certificates.slice(certificates.length / 2);

  return (
      <div className="flex flex-col">

        <Marquee autoFill pauseOnClick>
          {firstRow.map((cert, index) => (
            <CertificateCard key={index} img={cert} />
          ))}
        </Marquee>

        <Marquee direction="right" autoFill pauseOnClick>
          {secondRow.map((cert, index) => (
            <CertificateCard key={index + certificates.length} img={cert} />
          ))}
        </Marquee>
      </div>
  );
};

export default CertificateMarquee;
