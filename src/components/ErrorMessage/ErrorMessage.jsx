import css from "./ErrorMessage.module.css";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast.error("Here is your toast.");

const ErrorMessage = ({ isError }) => {
  if (isError) toast.error("Please try again search later...");
  return (
    <div>
      <Toaster />
    </div>
  );
};
export default ErrorMessage;
