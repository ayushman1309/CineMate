import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyDateTimeData, dummyShowsData } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFormat from "../lib/isoTimeFormat";
import BlueCircle from "../components/BlueCircle";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const { id, date } = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const s = dummyShowsData.find((show) => show._id === id);
    if (s) {
      setShow({
        movie: s,
        dateTime: dummyDateTimeData,
      });
    }
  };

  const handleSeatClick = (seatId) => {
    if (!selectedTime) return toast("Please Select Time First");
    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4)
      return toast("You can only select 5 Seats");
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  // polished seat renderer
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex justify-center gap-2">
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        const active = selectedSeats.includes(seatId);
        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            className={`h-9 w-9 rounded border border-primary/60 transition-colors ${
              active ? "bg-primary text-white" : "hover:bg-primary/20"
            }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-10 md:pt-14">
      {/* Available Timings */}
      <aside className="w-full md:w-60 md:shrink-0 bg-primary/10 border border-primary/20 rounded-lg py-6 md:py-10 h-max md:sticky md:top-10 mt-20">
        <p className="text-lg font-semibold px-6 rounded-2xl">Available Timings</p>
        <div className="mt-5 space-y-1 px-2">
          {show.dateTime[date].map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-4 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? "bg-primary text-white"
                  : "hover:bg-primary/20"
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Seats + button */}
      <section className="flex-1 max-md:mt-10">
        <div className="relative flex flex-col items-center">
          <BlueCircle top="-100px" left="-100px" />
          <BlueCircle bottom="0" right="0" />
          <h1 className="text-3xl font-semibold mb-4 mt-20">Select Your Seat</h1>
          <img src={assets.screenImage} alt="screen" />
          <p className="text-gray-400 text-sm mb-6">Screen Side</p>

          {/* Seat grid */}
          <div className="mt-6 text-xs text-gray-300">
            {/* A–B */}
            <div className="space-y-2 mb-6">
              {["A", "B"].map((r) => renderSeats(r))}
            </div>

            {/* Gap between B and C */}
            <div className="h-5" />

            {/* C–D | gap | E–F */}
            <div className="flex justify-center items-start">
              <div className="space-y-2">
                {["C", "D"].map((r) => renderSeats(r))}
              </div>
              <div className="w-20 md:w-24" />
              <div className="space-y-2">
                {["E", "F"].map((r) => renderSeats(r))}
              </div>
            </div>

            {/* Gap before G–J */}
            <div className="h-8" />

            {/* G–H | gap | I–J */}
            <div className="flex justify-center items-start">
              <div className="space-y-2">
                {["G", "H"].map((r) => renderSeats(r))}
              </div>
              <div className="w-16 md:w-20" />
              <div className="space-y-2">
                {["I", "J"].map((r) => renderSeats(r))}
              </div>
            </div>
          </div>

          {/* Proceed button - centered under grid (change md:justify-center -> md:justify-end to right-align on desktop) */}
          {selectedSeats.length > 0 && (
            <div className="w-full mt-10 flex justify-center md:justify-center">
              <button
                onClick={() => navigate("/my-bookings")}
                className="flex items-center gap-2 px-8 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium active:scale-95 shadow-lg shadow-primary/30"
              >
                Proceed To Checkout
                <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
