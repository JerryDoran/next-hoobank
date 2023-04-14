export default function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-200 rounded-[10px] transition duration-200 outline-none ${styles} hover:bg-teal-100`}
    >
      Get Started
    </button>
  );
}
