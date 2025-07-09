import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineUser className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Date of Birth</p>
            <p>4 October 1992</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Email Address</p>
            <p>kallebjorfors@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Phone</p>
            <p>+467 68 70 89 35</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Location</p>
            <p>Malmö, Sweden</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
