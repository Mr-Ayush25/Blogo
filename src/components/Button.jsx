import Link from "next/link";

const Button = ({ title, url }) => {
  return (
    <Link href={url}>
      <button className="mt-3 rounded-md font-semibold hover:rounded-full text-lg w-content px-14 bg-[#319345] py-3 hover:bg-[#277737] transition-all duration-150 ease-in-out border-white border-[1px]">
        {title}
      </button>
    </Link>
  );
};

export default Button;
