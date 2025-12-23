import { useState } from "react";
import { TextInput, Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface CountdownFormProps {
  onStart: (data: { name: string; date: string; time: string }) => void;
}

export const CountdownForm = ({ onStart }: CountdownFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: ""
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    onStart(formData);
  };

  return (
    <>
      <div id="startCountdown" className="flex flex-col justify-center items-center h-screen overflow-hidden px-4">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Create Countdown
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Set your special moment and watch time fly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <TextInput
              id="name"
              type="text"
              placeholder="Countdown Name (e.g., New Year 2026)"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="!text-base md:!text-lg text-center"
              required
            />

            <div>
              <label htmlFor="date" className="block text-base md:text-lg font-medium text-gray-700 mb-2 text-center">
                Target Date
              </label>
              <TextInput
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="!text-base md:!text-lg text-center [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                style={{ colorScheme: 'light' }}
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-base md:text-lg font-medium text-gray-700 mb-2 text-center">
                Target Time
              </label>
              <TextInput
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="!text-base md:!text-lg text-center [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                style={{ colorScheme: 'light' }}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full !bg-blue-600 hover:!bg-blue-700 !py-3 md:!py-4 !text-base md:!text-lg !font-semibold !mt-6 md:!mt-8 !rounded-lg"
            >
              Start Countdown
            </Button>
          </form>
        </div>
      </div>

      <Modal show={showModal} size="md" onClose={() => setShowModal(false)}>
        <div className="p-6 md:p-8 text-center bg-white dark:bg-gray-800 rounded-lg">
          <HiOutlineExclamationCircle className="mx-auto mb-4 md:mb-6 h-12 w-12 md:h-16 md:w-16 text-gray-400" />
          <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
            Are you ready to start the countdown?
          </h3>
          <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-500 dark:text-gray-300">
            The form will be closed and your countdown will begin
          </p>
          <div className="flex justify-center gap-3 md:gap-4">
            <Button 
              color="blue" 
              onClick={handleConfirm}
              className="!px-6 md:!px-8 !py-2 md:!py-3 !text-sm md:!text-base"
            >
              Start!
            </Button>
            <Button 
              color="gray" 
              onClick={() => setShowModal(false)}
              className="!px-6 md:!px-8 !py-2 md:!py-3 !text-sm md:!text-base"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};